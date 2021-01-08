using System.Threading.Tasks;
using IdentityServer4.Models;
using IdentityServer4.ResponseHandling;
using IdentityServer4.Services;
using IdentityServer4.Validation;
using Jp.Database;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Logging;

namespace Jp.UI.SSO.Configuration
{
    public class TenantChooserResponseGenerator : AuthorizeInteractionResponseGenerator
    {
        public TenantChooserResponseGenerator(ISystemClock clock,
            ILogger<AuthorizeInteractionResponseGenerator> logger,
            IConsentService consent, IProfileService profile)
            : base(clock, logger, consent, profile) { }

        public override async Task<InteractionResponse> ProcessInteractionAsync(ValidatedAuthorizeRequest request, ConsentResponse consent = null)
        {
            var response = await base.ProcessInteractionAsync(request, consent);
            if (response.IsConsent || response.IsLogin || response.IsError)
                return response;
            if (request.Subject.HasClaim(c => c.Type == CustomClaimTypes.ProfileIncomplete))
                return new InteractionResponse
                {
                    RedirectUrl = "/Tenants/Onboarding"
                };
            if (!request.Subject.HasClaim(c => c.Type == "tid" && c.Value != "0"))
                return new InteractionResponse
                {
                    RedirectUrl = "/Tenants"
                };
            
            return new InteractionResponse();
        }
    }
}
