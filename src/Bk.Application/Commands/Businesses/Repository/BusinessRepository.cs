using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Bk.Common.Roles;
using Microsoft.EntityFrameworkCore;
using Jp.Database.Context;
using JPProject.Sso.AspNetIdentity.Models;

namespace Application.Base.Businesses.Repository
{
    public class BusinessRepository : IBusinessRepository
    {
        private readonly SsoContext _commandContext;
        private readonly DbSet<Tenant> _tenants;
        public BusinessRepository(SsoContext commandContext)
        {
            _commandContext = commandContext;
            _tenants = commandContext.Tenants;
        }

        public Task<Tenant> GetById(string businessId) 
            => _tenants.FirstOrDefaultAsync(x => x.Id == businessId);

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
