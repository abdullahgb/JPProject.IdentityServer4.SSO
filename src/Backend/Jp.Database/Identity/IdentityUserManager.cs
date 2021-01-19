using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JPProject.Sso.AspNetIdentity.Models;
using JPProject.Sso.AspNetIdentity.Models.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Jp.Database.Identity
{
    public class IdentityUserManager:UserManager<UserIdentity>
    {
        private readonly IdentityUserStore<UserIdentity, Tenant> _store;
        public IdentityUserManager(IdentityUserStore<UserIdentity, Tenant> store, IOptions<IdentityOptions> optionsAccessor, IPasswordHasher<UserIdentity> passwordHasher, IEnumerable<IUserValidator<UserIdentity>> userValidators, IEnumerable<IPasswordValidator<UserIdentity>> passwordValidators, ILookupNormalizer keyNormalizer, IdentityErrorDescriber errors, IServiceProvider services, ILogger<UserManager<UserIdentity>> logger) : base(store, optionsAccessor, passwordHasher, userValidators, passwordValidators, keyNormalizer, errors, services, logger)
        {
            _store = store;
        }
        public Task<IList<string>> GetRolesAsync(string userId, string tenantId)
        {
            var user = _store.Context.Set<UserIdentity>().Find(userId);
            var tenant = _store.Context.Set<Tenant>().Find(tenantId);

            if (null == user)
            {
                throw new Exception("User not found");
            }

            if (null == tenant)
            {
                throw new Exception("Tenant not found");
            }

            return _store.GetRolesAsync(user, tenant);
        }

        public async Task<IdentityResult> AddToRoleAsync(Tenant tenant,UserIdentity user, string role)
        {
            ThrowIfDisposed();
            var userRoleStore = GetUserRoleStore();
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }

            var normalizedRole = NormalizeName(role);
            if (await userRoleStore.IsInRoleAsync(user,tenant, normalizedRole, CancellationToken))
            {
                return await UserAlreadyInRoleError(user, role);
            }
            await userRoleStore.AddToRoleAsync(user, tenant, normalizedRole, CancellationToken);
            return await UpdateUserAsync(user);
        }
        private async Task<IdentityResult> UserAlreadyInRoleError(UserIdentity user, string role)
        {
            Logger.LogWarning(5, "User {userId} is already in role {role}.", await GetUserIdAsync(user), role);
            return IdentityResult.Failed(ErrorDescriber.UserAlreadyInRole(role));
        }
        private IdentityUserStore<UserIdentity, Tenant> GetUserRoleStore()
        {
            var cast = Store as IdentityUserStore<UserIdentity,Tenant>;
            if (cast == null)
            {
                throw new NotSupportedException("StoreNotIUserRoleStore not supported to casting");
            }
            return cast;
        }
        public virtual async Task<IdentityResult> AddToRolesAsync(UserIdentity user, Tenant tenant, IEnumerable<string> roles)
        {
            ThrowIfDisposed();
            var userRoleStore = GetUserRoleStore();
            if (user == null)
            {
                throw new ArgumentNullException(nameof(user));
            }
            if (roles == null)
            {
                throw new ArgumentNullException(nameof(roles));
            }

            foreach (var role in roles.Distinct())
            {
                var normalizedRole = NormalizeName(role);
                if (await userRoleStore.IsInRoleAsync(user, tenant, normalizedRole, CancellationToken))
                {
                    return await UserAlreadyInRoleError(user, role);
                }
                await userRoleStore.AddToRoleAsync(user, tenant, normalizedRole, CancellationToken);
            }
            return await UpdateUserAsync(user);
        }
    }
}
