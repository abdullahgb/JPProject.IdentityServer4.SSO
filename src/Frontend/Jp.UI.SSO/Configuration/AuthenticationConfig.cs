using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bk.Common.Environments;
using IdentityModel;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace Jp.UI.SSO.Configuration
{
    public static class AuthenticationConfig
    {
        public static AuthenticationBuilder AddCustomAuthentication(this IServiceCollection services,
            IConfiguration configuration)
        {
            AuthenticationBuilder builder;
            if (!ApplicationEnvironment.IsDev)
            {
                builder = services.AddAuthentication()
                    .AddPolicyScheme("switch", "cookie or bearer", options =>
                    {
                        options.ForwardDefaultSelector = context =>
                        {
                            var bearerAuth = context.Request.Headers["Authorization"].FirstOrDefault()?.StartsWith("Bearer ") ?? false;
                            // You could also check for the actual path here if that's your requirement:
                            // eg: if (context.HttpContext.Request.Path.StartsWithSegments("/api", StringComparison.InvariantCulture))
                            if (bearerAuth)
                                return JwtBearerDefaults.AuthenticationScheme;
                            return "Identity.Application";
                        };
                    })
                    .AddIdentityServerAuthentication(options =>
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
                builder = services.AddAuthentication()
                    .AddPolicyScheme("switch", "cookie or bearer", options =>
                    {
                        options.ForwardDefaultSelector = context =>
                        {
                            var bearerAuth = context.Request.Headers["Authorization"].FirstOrDefault()?.StartsWith("Bearer ") ?? false;
                            // You could also check for the actual path here if that's your requirement:
                            // eg: if (context.HttpContext.Request.Path.StartsWithSegments("/api", StringComparison.InvariantCulture))
                            if (bearerAuth)
                                return JwtBearerDefaults.AuthenticationScheme;
                            return "Identity.Application";
                        };
                    })
                    .AddJwtBearer("Bearer", options =>
                    {
                        options.TokenValidationParameters = new TokenValidationParameters
                        {
                            ValidateAudience = false,
                            ValidateIssuer = false,
                            ValidateIssuerSigningKey = false,
                            ValidateLifetime = false,
                            ValidateTokenReplay = false,
                            RequireSignedTokens = false,
                            RequireAudience = false,
                            ValidateActor = false,
                            RequireExpirationTime = false,
                            SaveSigninToken = true

                        };
                        options.Authority = configuration.GetValue<string>("ApplicationSettings:Authority");
                        options.RequireHttpsMetadata = false;
                    });
            }

            return builder;
        }
    }
}
