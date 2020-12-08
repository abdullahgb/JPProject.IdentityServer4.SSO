using JPProject.Sso.AspNetIdentity.Models.Identity;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Jp.Database.Identity
{
    public class IdentitySigninManager : SignInManager<UserIdentity>
    {
        public IdentitySigninManager(IdentityUserManager userManager, IHttpContextAccessor contextAccessor,
            IdentityUserClaimsPrincipalFactory claimsFactory, IOptions<IdentityOptions> optionsAccessor,
            ILogger<SignInManager<UserIdentity>> logger, IAuthenticationSchemeProvider schemes,
            IUserConfirmation<UserIdentity> confirmation) : base(userManager, contextAccessor, claimsFactory,
            optionsAccessor, logger, schemes, confirmation)
        {
        }

    }
}
