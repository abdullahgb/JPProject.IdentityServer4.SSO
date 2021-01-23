using System.Collections.Generic;
using System.Threading.Tasks;
using Bk.Common.Repositories;
using JPProject.Sso.AspNetIdentity.Models;

namespace Bk.Application.Commands.Businesses.Repository
{
    public interface IBusinessRepository : IRepository
    {
        Task<Tenant> GetById(string businessId);
        Task<Tenant> FindById(string businessId);
        Task<Tenant> GetOwnedById(string businessId);
        Task<List<string>> GetUserEmails(string businessId);
        Task<bool> IsNameDuplicate(string name);
        Task<bool> IsNameDuplicateExceptBusiness(string businessId, string name);
    }
}
