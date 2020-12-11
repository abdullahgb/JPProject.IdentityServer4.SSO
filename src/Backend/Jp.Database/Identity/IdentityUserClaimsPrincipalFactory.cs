using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using IdentityModel;
using JPProject.Sso.AspNetIdentity.Models.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using MultiTenancyServer;

namespace Jp.Database.Identity
{
    public class IdentityUserClaimsPrincipalFactory:UserClaimsPrincipalFactory<UserIdentity>
    {
        private readonly ITenancyContext<Tenant> _tenancyContext;

        public IdentityUserClaimsPrincipalFactory(IdentityUserManager userManager,
            IOptions<IdentityOptions> optionsAccessor, ITenancyContext<Tenant> tenancyContext)
            : base(userManager, optionsAccessor)
        {
            _tenancyContext = tenancyContext;
        }

        protected override async Task<ClaimsIdentity> GenerateClaimsAsync(UserIdentity user)
        {
            var identity = await base.GenerateClaimsAsync(user);
            var claims = new List<Claim>();

            // Check if Tenant is not created
            if (!user.ProfileCompleted) claims.Add(new Claim("profileIncomplete", ""));

            AddIfDontExist(claims,new Claim(JwtClaimTypes.Name, user.UserName));
            AddIfDontExist(claims,new Claim(JwtClaimTypes.GivenName, user.UserName));
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
        public void AddIfDontExist(List<Claim> claims, Claim newClaim)
        {
            if (claims.Any(c => c.Type == newClaim.Type))
                return;

            claims.Add(newClaim);
        }
    }
}
