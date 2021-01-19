using System.Threading.Tasks;
using Bk.Common.Repositories;
using JPProject.Sso.AspNetIdentity.Models;

namespace Application.Base.Businesses.Repository
{
    public interface IBusinessRepository : IRepository
    {
        Task<Tenant> GetById(string businessId);
        Task<Tenant> FindById(string businessId);
        Task<Tenant> GetOwnedById(string businessId);
        Task<bool> IsNameDuplicate(string name);
        Task<bool> IsNameDuplicateExceptBusiness(string businessId, string name);
    }
}
