using IdentityServer4.EntityFramework.Entities;
using IdentityServer4.EntityFramework.Extensions;
using IdentityServer4.EntityFramework.Interfaces;
using IdentityServer4.EntityFramework.Options;
using JPProject.Domain.Core.Events;
using JPProject.EntityFrameworkCore.Interfaces;
using JPProject.Sso.AspNetIdentity.Models.Identity;
using JPProject.Sso.Domain.Models;
using JPProject.Sso.EntityFramework.Repository.Constants;
using JPProject.Sso.EntityFramework.Repository.Interfaces;
using JPProject.Sso.EntityFramework.Repository.Mappings;
using Jwks.Manager;
using Jwks.Manager.Store.EntityFrameworkCore;
using Microsoft.AspNetCore.DataProtection.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using JPProject.Sso.AspNetIdentity.Models;
using Microsoft.Extensions.Logging;
using MultiTenancyServer;
using MultiTenancyServer.EntityFramework;
using MultiTenancyServer.Options;

namespace Jp.Database.Context
{
    public class SsoContext :MultitenantIdentityDbContext,
        ITenantDbContext<Tenant, string>,
       //IdentityDbContext<UserIdentity, RoleIdentity, string>,
       IPersistedGrantDbContext,// IdentityServer4 Context
       IConfigurationDbContext, // IdentityServer4 Context
       ISsoContext, // Sso context
       IEventStoreContext, // sso context
       IDataProtectionKeyContext,
       ISecurityKeyContext
    {
        private readonly ConfigurationStoreOptions _storeOptions;
        private readonly OperationalStoreOptions _operationalOptions;

        private static TenancyModelState<string> _tenancyModelState;
        private readonly ITenancyContext<Tenant> _tenancyContext;
        private readonly ILogger _logger;

        public SsoContext(
            DbContextOptions<SsoContext> options,
            ConfigurationStoreOptions storeOptions,
            OperationalStoreOptions operationalOptions,
            ILogger<SsoContext> logger,
            ITenancyContext<Tenant> tenancyContext = null)
            : base(options)
        {
            _storeOptions = storeOptions;
            _operationalOptions = operationalOptions;

            _tenancyContext = tenancyContext;
            _logger = logger;
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            ConfigureIdentityContext(builder);
        }

        private void ConfigureIdentityContext(ModelBuilder builder)
        {
            base.OnModelCreating(builder);


            builder.ConfigureClientContext(_storeOptions);
            builder.ConfigureResourcesContext(_storeOptions);
            builder.ConfigurePersistedGrantContext(_operationalOptions);
            builder.ConfigureSsoContext();
            builder.ConfigureEventStoreContext();
            builder.ConfigureIdentity();
            builder.ConfigureTenant(out _tenancyModelState);
        }

        public Task<int> SaveChangesAsync()
        {
            this.EnsureTenancy(_tenancyContext?.Tenant?.Id, _tenancyModelState, _logger);
            return base.SaveChangesAsync();
        }

        public DbSet<Client> Clients { get; set; }
        public DbSet<IdentityResource> IdentityResources { get; set; }
        public DbSet<ApiResource> ApiResources { get; set; }
        public DbSet<PersistedGrant> PersistedGrants { get; set; }
        public DbSet<DeviceFlowCodes> DeviceFlowCodes { get; set; }

        public DbSet<Template> Templates { get; set; }
        public DbSet<Email> Emails { get; set; }
        public DbSet<GlobalConfigurationSettings> GlobalConfigurationSettings { get; set; }
        public DbSet<StoredEvent> StoredEvent { get; set; }
        public DbSet<EventDetails> StoredEventDetails { get; set; }
        public DbSet<DataProtectionKey> DataProtectionKeys { get; set; }
        public DbSet<SecurityKeyWithPrivate> SecurityKeys { get; set; }
        public DbSet<Tenant> Tenants { get; set; }
    }

    public class SsoQueryContext : SsoContext
    {
        public SsoQueryContext(DbContextOptions<SsoContext> options, ConfigurationStoreOptions storeOptions, OperationalStoreOptions operationalOptions, ILogger<SsoContext> logger, ITenancyContext<Tenant> tenancyContext = null) : base(options, storeOptions, operationalOptions, logger, tenancyContext) { }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
            optionsBuilder.UseLazyLoadingProxies(false);
            base.OnConfiguring(optionsBuilder);
        }
    }
    public class SsoCommandContext : MultitenantIdentityDbContext
    {
        public DbSet<Tenant> Tenants { get; set; }
        public SsoCommandContext(DbContextOptions<SsoCommandContext> options) : base(options) { }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
            optionsBuilder.EnableSensitiveDataLogging();
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.ConfigureIdentity();
        }
    }

    public static class ContextExtensions
    {
        public static void ConfigureIdentity(this ModelBuilder builder)
        {
            builder.Entity<RoleIdentity>().ToTable(TableConsts.IdentityRoles);
            builder.Entity<IdentityRoleClaim<string>>().ToTable(TableConsts.IdentityRoleClaims);
            builder.Entity<UserIdentity>(userEntity =>
            {
                userEntity.ToTable(TableConsts.IdentityUsers);
                userEntity.Property(x => x.MultitenantEnabled).HasDefaultValue(true);
                userEntity.Property(x => x.IsExternalUser).HasDefaultValue(false);
            });
         
            builder.Entity<IdentityUserLogin<string>>().ToTable(TableConsts.IdentityUserLogins);
            builder.Entity<IdentityUserClaim<string>>().ToTable(TableConsts.IdentityUserClaims);
            builder.Entity<IdentityUserToken<string>>().ToTable(TableConsts.IdentityUserTokens);
            builder.Entity<UserRoleIdentity>(b =>
            {
                b.ToTable(TableConsts.IdentityUserRoles);
                b.Property(x => x.State).HasDefaultValue(States.Active);

                b
                    .HasOne(c => c.User)
                    .WithMany(e => e.UserRoles)
                    .HasForeignKey(e => e.UserId)
                    .IsRequired();
                b
                    .HasOne(c => c.Role)
                    .WithMany(e => e.UserRoles)
                    .HasForeignKey(e => e.RoleId)
                    .IsRequired();
                b
                    .HasOne(c => c.Tenant)
                    .WithMany(e => e.UserRoles)
                    .HasForeignKey(e => e.TenantId)
                    .IsRequired();
                b.Ignore("Id");

                // Add multi-tenancy support to entity.
                //b.HasTenancy(() => _tenancyContext.Tenant.Id, _tenancyModelState, hasIndex: false);
                // Primary key
                b.HasKey(r => new {r.UserId, r.RoleId, r.TenantId});

                //Remove unique index on NormalizedName.
                b.HasIndex(r => r.UserId).IsUnique(false);
                b.HasIndex(r => r.RoleId).IsUnique(false);
                b.HasIndex(r => r.TenantId).IsUnique(false);
                // Add unique index on TenantId and NormalizedName.
                b.HasIndex(r => new { r.UserId, r.RoleId, r.TenantId })
                    .HasDatabaseName("TenantUserRoleIndex").IsUnique();
            });
        }
        public static void ConfigureTenant(this ModelBuilder builder,out TenancyModelState<string> tenancyModelState)
        {
             // MultiTenancyServer configuration.
            var tenantStoreOptions = new TenantStoreOptions();
            builder.ConfigureTenantContext<Tenant, string>(tenantStoreOptions);

            // Add multi-tenancy support to model.
            var tenantReferenceOptions = new TenantReferenceOptions();
            builder.HasTenancy(tenantReferenceOptions, out tenancyModelState);
        }
    }
}
