using System;
using System.Threading.Tasks;
using Bk.Common.Repositories;
using JPProject.Sso.AspNetIdentity.Models.Identity;

namespace Application.Base.Admins.Repository
{
    public interface IAdminRepository : IRepository
    {
        Task<UserIdentity> GetById(Guid id);
        void Add(UserIdentity admin);
        Task<bool> IsEmailDuplicate(string email);
        Task<bool> IsEmailDuplicateExceptUser(Guid userId, string email);
    }
}
