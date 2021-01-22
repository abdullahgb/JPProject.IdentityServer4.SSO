using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Bk.Common.Roles;
using Jp.Database.Context;
using JPProject.Sso.AspNetIdentity.Models.Identity;
using Microsoft.EntityFrameworkCore;

namespace Bk.Application.Commands.Users.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly SsoCommandContext _commandContext;
        private readonly DbSet<UserIdentity> _users;
        public UserRepository(SsoCommandContext commandContext)
        {
            _commandContext = commandContext;
            _users = commandContext.Users;
        }

        public Task<UserIdentity> GetById(Guid id, Guid businessId)
            => (from user in _users
                join userRole in _commandContext.UserRoles on user.Id equals userRole.UserId
                where userRole.TenantId == businessId.ToString()
                select user).FirstOrDefaultAsync();
        public Task<bool> HasRole(Guid businessId,Guid id, List<string> appRoles)
            => (from user in _users
                join userRole in _commandContext.UserRoles on user.Id equals userRole.UserId
                join role in _commandContext.Roles on userRole.RoleId equals role.Id    
                where appRoles.Contains(role.Name) && userRole.TenantId == businessId.ToString()
                select user).AnyAsync();

        public void Add(UserIdentity user)
            => _users.Add(user);

        public async Task<UserIdentity> GetById(Guid id)
            => await _users.FirstOrDefaultAsync(x => x.Id == id.ToString());

        public Task<bool> IsEmailDuplicate(string email)
            => _commandContext.Users.AnyAsync(x => x.Email.Trim().ToLower().Equals(email.Trim().ToLower()));

        public Task<bool> IsEmailDuplicateExceptUser(Guid userId, string email)
            => _commandContext.Users.AnyAsync(x => x.Id != userId.ToString() && x.Email.Trim().ToLower().Equals(email.Trim().ToLower()));

        public Task<int> SaveChanges(CancellationToken cancellationToken = default)
            => _commandContext.SaveChangesAsync(cancellationToken);

    }
}
