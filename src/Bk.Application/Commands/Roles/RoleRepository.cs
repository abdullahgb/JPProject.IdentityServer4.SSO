using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Jp.Database.Context;
using JPProject.Sso.AspNetIdentity.Models.Identity;
using Microsoft.EntityFrameworkCore;

namespace Bk.Application.Commands.Roles
{
    public class RoleRepository:IRoleRepository
    {
        private readonly SsoCommandContext _context;

        public RoleRepository(SsoCommandContext context)
        {
            _context = context;
        }

        public Task<RoleIdentity> GetRole(string role)
            => _context.Roles.FirstOrDefaultAsync(x => x.Name.ToLower().Equals(role.ToLower()));

        public Task<List<RoleIdentity>> GetRoles(List<string> roles)
            => _context.Roles.Where(x => roles.Contains(x.Name.ToLower())).ToListAsync();

        public Task<int> SaveChanges(CancellationToken cancellationToken = new CancellationToken())
        {
            return _context.SaveChangesAsync();
        }
    }
}
