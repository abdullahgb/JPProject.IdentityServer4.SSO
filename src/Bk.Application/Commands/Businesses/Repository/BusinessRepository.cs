using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Bk.Common.Roles;
using Jp.Database.Context;
using JPProject.Sso.AspNetIdentity.Models;
using Microsoft.EntityFrameworkCore;

namespace Bk.Application.Commands.Businesses.Repository
{
    public class BusinessRepository : IBusinessRepository
    {
        private readonly SsoCommandContext _commandContext;
        private readonly DbSet<Tenant> _tenants;
        public BusinessRepository(SsoCommandContext commandContext)
        {
            _commandContext = commandContext;
            _tenants = commandContext.Tenants;
        }

        public Task<Tenant> GetById(string businessId) 
            => _tenants.FirstOrDefaultAsync(x => x.Id == businessId);

        public Task<List<string>> GetUserEmails(string businessId)
            => (from tenant in _tenants
                join userRole in _commandContext.UserRoles on tenant.Id equals userRole.TenantId
                join user in _commandContext.Users on userRole.UserId equals user.Id
                where tenant.Id == businessId
                select user.Email).Distinct().ToListAsync();

        public Task<Tenant> GetOwnedById(string businessId)
            => (from tenant in _tenants
                join userRole in _commandContext.UserRoles on tenant.Id equals userRole.TenantId
                where tenant.Id == businessId && userRole.Role.Name.Contains(ApplicationRoles.Owner)
                select tenant).FirstOrDefaultAsync();
        public Task<Tenant> FindById(string businessId)
	        => _tenants.FindAsync(businessId).AsTask();

        public void Add(Tenant business)
            => _tenants.Add(business);

        public Task<bool> IsNameDuplicate(string name)
            => _tenants.AnyAsync(x => x.CanonicalName.Trim().ToLower().Equals(name.Trim().ToLower()));
        public Task<bool> IsNameDuplicateExceptBusiness(string businessId, string name)
            => (from tenant in _tenants
                join userRole in _commandContext.UserRoles on tenant.Id equals userRole.TenantId
                where tenant.Id != businessId &&  tenant.CanonicalName.Trim().ToLower().Equals(name.Trim().ToLower())
                select tenant.CanonicalName).AnyAsync();

        public Task<int> SaveChanges(CancellationToken cancellationToken = default)
            => _commandContext.SaveChangesAsync(cancellationToken);

    }
}
