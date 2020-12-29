using IdentityModel;
using IdentityServer4.Models;
using IdentityServer4.Services;
using IdentityServer4.Stores;
using Jp.UI.SSO.Util;
using JPProject.Sso.AspNetIdentity.Models.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Bk.Common.ObjectUtils;
using Jp.Database.Identity;
using JPProject.Domain.Core.Util;
using Microsoft.AspNetCore.Http;
using MultiTenancyServer;

namespace Jp.UI.SSO.Configuration
{
    public class SsoProfileService : IProfileService
    {
        protected UserManager<UserIdentity> UserManager;
        private readonly ILogger<DefaultProfileService> Logger;
        private readonly IdentityUserClaimsPrincipalFactory _claimsFactory;
        private readonly IResourceStore _resourceStore;
        private readonly IHttpContextAccessor _context;
        private readonly ITenancyContext<Tenant> _tenancyContext;
        public SsoProfileService(
            UserManager<UserIdentity> userManager,
            ILogger<DefaultProfileService> logger,
           IdentityUserClaimsPrincipalFactory claimsFactory,
            IResourceStore resourceStore, IHttpContextAccessor context,
            ITenancyContext<Tenant> tenancyContext)
        {
            UserManager = userManager;
            Logger = logger;
            _claimsFactory = claimsFactory;
            // IResourceStore will be cached in production, while IResourceRepo won't
            _resourceStore = resourceStore;
            _context = context;
            _tenancyContext = tenancyContext;
        }

        public async Task GetProfileDataAsync(ProfileDataRequestContext context)
        {
            // Get user data
            var user = await UserManager.GetUserAsync(context.Subject);
            var principal = await _claimsFactory.CreateAsync(user, GetTenantFromContext(context.Subject));
            var claimsUser = principal.Claims.ToList();
            var subjectClaims = context.Subject.Claims.ToList();

            // Merge ASP.NET Identity claims
            subjectClaims.Merge(claimsUser);
            
            subjectClaims.AddIfDontExist(new Claim("username", user.UserName));
            subjectClaims.AddIfDontExist(new Claim(JwtClaimTypes.Name, user.UserName));

            if (subjectClaims.All(a => a.Type != JwtClaimTypes.Role))
            {
                var roles = await UserManager.GetRolesAsync(user);
                subjectClaims.AddRange(roles.Select(s => new Claim(JwtClaimTypes.Role, s)));
            }

            // Sometimes IdentityResources are specified at UserClaims in ProtectedResource. Then we include all related claims to RequestedClaims
            var resources = await _resourceStore.GetAllResourcesAsync();
            var usersClaimsToGoWithin = GetIdentityResourcesToIncludeInRequestedClaims(context, resources);
            if (context.Subject.ContainsTenant())
            {
                usersClaimsToGoWithin.Add("tid");
                usersClaimsToGoWithin.Add("tname");
            }

            usersClaimsToGoWithin.Merge(context.RequestedClaimTypes);
            context.RequestedClaimTypes = usersClaimsToGoWithin;

            context.LogProfileRequest(Logger);
            context.AddRequestedClaims(subjectClaims);
            context.LogIssuedClaims(Logger);
        }

        private static List<string> GetIdentityResourcesToIncludeInRequestedClaims(ProfileDataRequestContext context,
            Resources resources)
        {
            var usersClaimsToGoWithin = new List<string>();
            foreach (var contextRequestedClaimType in context.RequestedClaimTypes)
            {
                if (resources.IdentityResources.Any(a => a.Name == contextRequestedClaimType))
                {
                    usersClaimsToGoWithin.AddRange(resources.IdentityResources
                        .FirstOrDefault(f => f.Name == contextRequestedClaimType).UserClaims);
                }
            }

            return usersClaimsToGoWithin;
        }

        private string GetTenantNameFromAcr(IsActiveContext context)
        {
            string tenantName;
            var tenantIdClaim = context.Subject.Claims.FirstOrDefault(x => x.Type == "tname");
            tenantName = tenantIdClaim?.Value;
            if (!tenantName.IsObjNull()) return tenantName;
            tenantName = _context.HttpContext.Request.Query["acr_values"].ToString().Replace("tenant:", "");
            return tenantName;
        }
        private string GetTenantNameFromContext(ClaimsPrincipal subject)
        {
            var tenantName = _tenancyContext.Tenant?.CanonicalName;

            if (!tenantName.IsNullOrEmpty())
                return tenantName;

            tenantName = subject.GetTenantName();
            return tenantName;
        }
        private Tenant GetTenantFromContext(ClaimsPrincipal subject)
        {
            var tenant = _tenancyContext.Tenant;

            if (!tenant.IsObjNull())
                return tenant;

            tenant = subject.GetTenant();
            return tenant;
        }
        public async Task IsActiveAsync(IsActiveContext context)
        {
            var user = await UserManager.GetUserAsync(context.Subject);

            // In case admin is accidentally blocked.
            var isBlocked = user.LockoutEnabled && user.LockoutEnd.GetValueOrDefault(DateTimeOffset.UtcNow.UtcDateTime.Date) > DateTimeOffset.UtcNow.UtcDateTime;
            if (isBlocked)
                isBlocked = await UserManager.IsInRoleAsync(user, "Administrator");
            if (context.Caller == "AuthorizeEndpoint")
            {
                var acrTenant = GetTenantNameFromAcr(context);
                var contextTenant = GetTenantNameFromContext(context.Subject);
                if (user.IsObjNull() || (acrTenant != contextTenant))
                {
                    context.IsActive = false;
                }
            }
            context.IsActive = !isBlocked;
        }
    }
}
