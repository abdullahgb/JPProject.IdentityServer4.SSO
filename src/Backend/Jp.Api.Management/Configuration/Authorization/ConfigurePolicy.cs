using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection;

namespace Jp.Api.Management.Configuration.Authorization
{
    public static class ConfigurePolicy
    {
        public static void AddPolicies(this IServiceCollection services)
        {
            services.AddAuthorization(options =>
            {
                options.AddPolicy("UserManagement", policy =>
                    policy.RequireAuthenticatedUser());
                options.AddPolicy("MultiTenantUser", policy =>
                    policy.RequireAuthenticatedUser()
                        .RequireClaim("tid"));
                options.AddPolicy("TenantAdministration", policy =>
                    policy.RequireAuthenticatedUser()
                        .RequireClaim("tid")
                        .RequireRole("owner"));

                options.AddPolicy("Default",
                    policy =>
                    {
                        policy.Requirements.Add(new AccountRequirement());
                        policy.AuthenticationSchemes =  new List<string>{"Bearer"};
                    });
            });
            services.AddSingleton<IAuthorizationHandler, AccountRequirementHandler>();
        }
    }
}
