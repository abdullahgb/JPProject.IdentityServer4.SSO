using System.Linq;
using Bk.Common.Authentication;
using Bk.Common.Environments;
using IdentityModel;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

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
