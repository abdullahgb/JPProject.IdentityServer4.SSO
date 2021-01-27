using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Bk.Common.Authentication;
using Bk.Common.Environments;
using IdentityModel;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;

namespace Jp.UI.SSO.Configuration
{
    public static class AuthenticationConfig
    {
        public static AuthenticationBuilder AddCustomAuthentication(this IServiceCollection services,
            IConfiguration configuration)
        {
            var builder = services.AddAuthentication()
                .AddPolicyScheme("switch", "cookie or bearer", options =>
                {
                    options.ForwardDefaultSelector = context =>
                    {
                        var bearerAuth =
                            context.Request.Headers["Authorization"].FirstOrDefault()?.StartsWith("Bearer ") ?? false;
                        // You could also check for the actual path here if that's your requirement:
                        // eg: if (context.HttpContext.Request.Path.StartsWithSegments("/api", StringComparison.InvariantCulture))
                        if (bearerAuth)
                            return JwtBearerDefaults.AuthenticationScheme;
                        return "Identity.Application";
                    };
                }).AddOpenIdConnect("Microsoft",opt =>
                {
                    opt.Authority = $"{configuration.GetValue<string>("ExternalLogin:Microsoft:Authority")}common/";
                    opt.ClientId = configuration.GetValue<string>("ExternalLogin:Microsoft:ClientId");
                    opt.RequireHttpsMetadata = false;
                    opt.ClientSecret = configuration.GetValue<string>("ExternalLogin:Microsoft:ClientSecret");
                    opt.ResponseType = OpenIdConnectResponseType.Code;
                    opt.TokenValidationParameters.ValidateIssuer = false;
                    opt.CallbackPath = new PathString("/signin-microsoft");
                    opt.ClaimsIssuer = OpenIdConnectDefaults.AuthenticationScheme;
                    opt.Prompt = "select_account";
                    opt.Events = new OpenIdConnectEvents
                    {
                        OnTicketReceived = e =>
                        {
                            var claims = new List<Claim>();
                            var identity = (ClaimsIdentity)e.Principal.Identity;
                            var email = identity.Name;
                            if (email.Contains("@"))
                            {
                                claims.Add(new Claim(JwtClaimTypes.Email,email));
                                claims.Add(new Claim("user_name",email));
                            }

                            var newIdentity = new ClaimsIdentity(identity.Claims.Concat(claims), identity.AuthenticationType);

                            e.Principal = new ClaimsPrincipal(newIdentity);
                            return Task.CompletedTask;
                        }
                    };
                });
            if (!ApplicationEnvironment.IsDev)
            {

                builder.AddIdentityServerAuthentication(options =>
                {
                    options.Authority = configuration.GetValue<string>("ApplicationSettings:Authority");
                    options.RequireHttpsMetadata = false;
                    options.ApiSecret = "Q&tGrEQMypEk.XxPU:%bWDZMdpZeJiyMwpLv4F7d**w9x:7KuJ#fy,E8KPHpKz++";
                    options.ApiName = "jp_api";
                    options.RoleClaimType = JwtClaimTypes.Role;
                    options.NameClaimType = JwtClaimTypes.Name;
                });
            }
            else
            {
                builder.AddJwtBearer("Bearer", options =>
                {
                    options.TokenValidationParameters =
                        TokenValidator.SkipValidation(configuration.GetValue<string>("ApplicationSettings:Authority"));
                    options.RequireHttpsMetadata = false;
                });
            }

            return builder;
        }
    }
}
