using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bk.Common.Repositories;
using JPProject.Sso.AspNetIdentity.Models.Identity;

namespace Bk.Application.Commands.Users.Repository
{
    public interface IUserRepository : IRepository
    {
        Task<UserIdentity> GetById(Guid id);
        Task<UserIdentity> GetById(Guid id,Guid businessId);
        Task<bool> HasRole(Guid businessId, Guid id, List<string> appRoles);
        void Add(UserIdentity admin);
        Task<bool> IsEmailDuplicate(string email);
        void InsertBulk(List<UserIdentity> users);
        Task<bool> IsEmailDuplicateExceptUser(Guid userId, string email);
        Task<List<UserIdentity>> GetByEmail(List<string> emails);
        Task<List<UserRoleIdentity>> GetUserAndRoles(Guid id, Guid businessId);
    }
}
