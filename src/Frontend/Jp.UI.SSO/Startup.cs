using System;
using System.Net;
using System.Reflection;
using System.Threading.Tasks;
using Bk.Auth.Events;
using Bk.Common.Environments;
using Bk.Common.EventBus;
using Bk.Rebus.EventBus;
using Bk.Rebus.EventBus.Configurations;
using Hellang.Middleware.ProblemDetails;
using IdentityServer4.Services;
using Jp.Api.Management.Configuration;
using Jp.Api.Management.Configuration.Authorization;
using Jp.Api.Management.Interfaces;
using Jp.Database.Context;
using Jp.Database.Identity;
using Jp.UI.SSO.Configuration;
using Jp.UI.SSO.Util;
using JPProject.AspNet.Core;
using JPProject.Domain.Core.ViewModels;
using JPProject.Sso.AspNetIdentity.Configuration;
using JPProject.Sso.AspNetIdentity.Models.Identity;
using JPProject.Sso.EntityFramework.Repository.Configuration;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Hosting;
using MultiTenancyServer;
using Newtonsoft.Json;
using Rebus.Routing.TypeBased;
using Serilog;

namespace Jp.UI.SSO
{
    public class Startup
    {
        private readonly IWebHostEnvironment _env;
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration, IWebHostEnvironment env)
        {
            _env = env;
            Configuration = configuration;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddHttpContextAccessor();
            services.AddControllersWithViews()
                .AddViewLocalization(LanguageViewLocationExpanderFormat.Suffix, opts => { opts.ResourcesPath = "Resources"; })
                .AddDataAnnotationsLocalization()
                .AddApplicationPart(Assembly.Load(new AssemblyName("Jp.Api.Management")))
                .AddNewtonsoftJson(options =>
                {
                    options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                    options.AllowInputFormatterExceptionMessages = true;
                }).AddControllersAsServices();
            services.AddRazorPages().AddRazorRuntimeCompilation();
            services.Configure<CookiePolicyOptions>(options =>
            {
                options.CheckConsentNeeded = context => true;
                options.Secure = CookieSecurePolicy.SameAsRequest;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            // The following line enables Application Insights telemetry collection.
            //services.AddApplicationInsightsTelemetry();

            // Add localization
            services.AddMvcLocalization();

            // Dbcontext config
            services.ConfigureProviderForContext<SsoContext>(DetectDatabase);

            // ASP.NET Identity Configuration
            services
                .AddIdentity<UserIdentity, RoleIdentity>(AccountOptions.NistAccountOptions)
                .AddClaimsPrincipalFactory<IdentityUserClaimsPrincipalFactory>()
                .AddUserStore<IdentityUserStore<UserIdentity, Tenant>>()
                .AddSignInManager<IdentitySigninManager>()
                .AddUserManager<IdentityUserManager>()
                .AddEntityFrameworkStores<SsoContext>()
                .AddDefaultTokenProviders();

            // Improve Identity password security
            services.UpgradePasswordSecurity().UseArgon2<UserIdentity>();


            // IdentityServer4 Configuration
            services
                .AddIdentityServer(options =>
                {
                    options.Events.RaiseErrorEvents = true;
                    options.Events.RaiseInformationEvents = true;
                    options.Events.RaiseFailureEvents = true;
                    options.Events.RaiseSuccessEvents = true;
                })
                .AddAspNetIdentity<UserIdentity>()
                .ConfigureContext(DetectDatabase, _env)
                .AddAuthorizeInteractionResponseGenerator<TenantChooserResponseGenerator>()
                .AddProfileService<SsoProfileService>()
                // Configure key material. By default it supports load balance scenarios and have a key managemente close to Key Management from original IdentityServer4
                // Unless you really know what are you doing, change it.
                .SetupKeyMaterial();

            // SSO Configuration
            services
                .ConfigureSso<AspNetUser>()
                .AddSsoContext<SsoContext>()
                // If your ASP.NET Identity has additional fields, you can remove this line and implement IIdentityFactory<TUser> and IRoleFactory<TUser>
                // theses interfaces will able you to intercept Register / Update Flows from User and Roles
                .AddDefaultAspNetIdentityServices();

            // Configure Federation gateway (external logins), such as Facebook, Google etc
            services.AddFederationGateway(Configuration);

            // Adding MediatR for Domain Events and Notifications
            services.AddMediatR(typeof(Startup));

            // .NET Native DI Abstraction
            RegisterServices(services);
            ConfigureMultiTenantServices(services);
            ConfigureApiManagementServices(services);
            ConfigureIdentityServices(services);
            services.AddRebusEventBus(Array.Empty<Type>(),
                new SqlServerBusConfig(Configuration.GetValue<string>("EventBusConfiguration:ConnectionString"))
                {
                    MessageQueue = "AuthQueue",
                    UseSerilog = true
                },
                x=> x.TypeBased());
            services.AddScoped<IEventBus, EventBus>();
            
        }

        public void ConfigureIdentityServices(IServiceCollection services)
        {
            services.AddScoped<IdentityUserStore<UserIdentity, Tenant>>();
            services.AddScoped<IdentityUserClaimsPrincipalFactory>();
            services.AddScoped<MultitenantIdentityDbContext, SsoContext>();
        }

        public void ConfigureMultiTenantServices(IServiceCollection services)
        {
            // MultiTenent
            services.AddTransient<TenantManager<Tenant>>();
            services.AddMultiTenancy<Tenant, string>()
                // Add one or more IRequestParser (MultiTenancyServer.AspNetCore).
                .AddSubdomainParser(".tenants.localhost")
                .AddClaimParser("tname")
                .AddEntityFrameworkStore<SsoContext, Tenant, string>();
        }

        public void ConfigureApiManagementServices(IServiceCollection services)
        {
            services.AddProblemDetails(options => options.IncludeExceptionDetails = (context, exception) => _env.IsDevelopment());
            // Cors request
            services.ConfigureCors();

            // Configure policies
            services.AddPolicies();

            // configure openapi
            services.AddSwagger(Configuration);

            //// IdentityServer4 Admin services
            services
                .ConfigureJpAdminServices<AspNetUser>()
                .ConfigureJpAdminStorageServices()
                .SetupDefaultIdentityServerContext<SsoContext>();
            SetupGeneralAuthorizationSettings(services);

            services.AddScoped<IReCaptchaService, ReCaptchaService>();

            // Response compression
            services.AddBrotliCompression();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // Only use HTTPS redirect in Production Ambients
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else if (env.IsProduction() && !env.IsBehindReverseProxy(Configuration))
            {
                app.UseHttpsRedirection();
                app.UseHsts(options => options.MaxAge(days: 365));
            }

            app.UseSerilogRequestLogging();
            app.UseSecurityHeaders(env, Configuration);
            app.UseStaticFiles();

            var fordwardedHeaderOptions = new ForwardedHeadersOptions
            {
                ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
            };
            fordwardedHeaderOptions.KnownNetworks.Clear();
            fordwardedHeaderOptions.KnownProxies.Clear();

            app.UseForwardedHeaders(fordwardedHeaderOptions);
            // Configure event bus
            app.UseCustomRebus();
            //app.UseMultiTenancy<Tenant>();
            app.UseIdentityServer();
            app.UseLocalization();
            app.UseDefaultCors();
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseProblemDetails();
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "SSO Api Management");
                c.OAuthClientId("Swagger");
                c.OAuthClientSecret("swagger");
                c.OAuthAppName("SSO Management Api");
                c.OAuthUseBasicAuthenticationWithAccessCodeGrant();
            });
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
                endpoints.MapRazorPages();
            });
            if (_env.IsQa())
            {
                Log.Information($"Environment => {_env.EnvironmentName}");
                Log.Information($"Auth Db Connection => {DetectDatabase.Item1}:  {DetectDatabase.Item2}");
                Log.Information($"Event Db Connection => {Configuration.GetValue<string>("EventBusConfiguration:ConnectionString")}");
            }

        }
        private static void SetupGeneralAuthorizationSettings(IServiceCollection services)
        {
            services.ConfigureApplicationCookie(options =>
            {
                //options.AccessDeniedPath = new PathString("/accounts/access-denied");
                options.Events.OnRedirectToAccessDenied = context =>
                {
                    context.Response.StatusCode = (int)HttpStatusCode.NotFound;
                    return Task.CompletedTask;
                };
            });
        }
        private void RegisterServices(IServiceCollection services)
        {
            // Adding dependencies from another layers (isolated from Presentation)
            services.AddScoped<IEventSink, IdentityServerEventStore>();
            services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();
        }

        /// <summary>
        /// it's just a tuple. Returns 2 parameters.
        /// Trying to improve readability at ConfigureServices
        /// </summary>
        private (DatabaseType, string) DetectDatabase => (
            Configuration.GetValue<DatabaseType>("ApplicationSettings:DatabaseType"),
            Configuration.GetConnectionString("SSOConnection"));
    }


}
