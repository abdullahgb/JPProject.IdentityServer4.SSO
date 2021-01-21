using Bk.Common.Claims;
using Bk.Common.Roles;
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
                options.AddPolicy("MultiTenantUser", policy =>
                    policy.RequireAuthenticatedUser()
                        .RequireClaim("tid"));
                options.AddPolicy("TenantOwner", policy =>
                    policy
                        .RequireClaim(OpenIdRoles.TenantId)
                        .RequireRole(
                            ApplicationRoles.Owner
                        ));
                options.AddPolicy("TenantAdministration", policy =>
                    policy
                        .RequireClaim("http://schemas.microsoft.com/identity/claims/tenantid")
                        .RequireRole(
                            ApplicationRoles.Owner,
                                ApplicationRoles.Finance.Admin,

                                ApplicationRoles.Hr.Admin,

                                ApplicationRoles.TimeTracking.Admin,

                                ApplicationRoles.TrackingAgent.Admin
                        ));
                options.AddPolicy("TenantManagement", policy =>
                    policy
                        .RequireClaim("http://schemas.microsoft.com/identity/claims/tenantid")
                        .RequireRole(
                            ApplicationRoles.Owner,
                            ApplicationRoles.Finance.Admin,
                            ApplicationRoles.Finance.Manager,

                            ApplicationRoles.Hr.Admin,
                            ApplicationRoles.Hr.Manager,

                            ApplicationRoles.TimeTracking.Admin,
                            ApplicationRoles.TimeTracking.Manager,

                            ApplicationRoles.TrackingAgent.Admin,
                            ApplicationRoles.TrackingAgent.Manager
                        ));
            });
            services.AddSingleton<IAuthorizationHandler, AccountRequirementHandler>();
        }
    }
}
