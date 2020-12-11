using IdentityModel;
using Jp.UI.SSO.Util;
using JPProject.Sso.AspNetIdentity.Models.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Jp.Database.Identity;
using MultiTenancyServer;

namespace Jp.UI.SSO.Configuration
{
    public class ApplicationClaimsIdentityFactory : UserClaimsPrincipalFactory<UserIdentity>
    {
        private readonly ITenancyContext<Tenant> _tenancyContext;
        public ApplicationClaimsIdentityFactory(IdentityUserManager userManager, IOptions<IdentityOptions> optionsAccessor, ITenancyContext<Tenant> tenancyContext) : base(userManager, optionsAccessor)
        {
            _tenancyContext = tenancyContext;
        }

        protected override async Task<ClaimsIdentity> GenerateClaimsAsync(UserIdentity user)
        {
            var identity = await base.GenerateClaimsAsync(user);
            
            var claims = new List<Claim>();

            claims.AddIfDontExist(new Claim(JwtClaimTypes.Name, user.UserName));
            claims.AddIfDontExist(new Claim(JwtClaimTypes.GivenName, user.UserName));
            var roles = await UserManager.GetRolesAsync(user);

            if (identity.Claims.All(c => c.Type != JwtClaimTypes.Role))
                claims.AddRange(roles.Select(s => new Claim(JwtClaimTypes.Role, s)));
            var tenant = _tenancyContext?.Tenant;
            if (tenant != null)
            {
                claims.Add(new Claim("tid", tenant.Id));
                claims.Add(new Claim("tname", tenant.CanonicalName));
            }
            identity.AddClaims(claims);
            return identity;
        }
    }
}
