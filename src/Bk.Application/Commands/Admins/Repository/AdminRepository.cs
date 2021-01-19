using System;
using System.Threading;
using System.Threading.Tasks;
using Jp.Database.Context;
using JPProject.Sso.AspNetIdentity.Models.Identity;
using Microsoft.EntityFrameworkCore;

namespace Application.Base.Admins.Repository
{
    public class AdminRepository : IAdminRepository
    {
        private readonly SsoContext _commandContext;
        private readonly DbSet<UserIdentity> _admins;
        public AdminRepository(SsoContext commandContext)
        {
            _commandContext = commandContext;
            _admins = commandContext.Users;
        }

        public void Add(UserIdentity user)
            => _admins.Add(user);

        public async Task<UserIdentity> GetById(Guid id)
            => await _admins.FirstOrDefaultAsync(x => x.Id == id.ToString());

        public Task<bool> IsEmailDuplicate(string email)
            => _commandContext.Users.AnyAsync(x => x.Email.Trim().ToLower().Equals(email.Trim().ToLower()));

        public Task<bool> IsEmailDuplicateExceptUser(Guid userId, string email)
            => _commandContext.Users.AnyAsync(x => x.Id != userId.ToString() && x.Email.Trim().ToLower().Equals(email.Trim().ToLower()));

        public Task<int> SaveChanges(CancellationToken cancellationToken = default)
            => _commandContext.SaveChangesAsync(cancellationToken);

    }
}
