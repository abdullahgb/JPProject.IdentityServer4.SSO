using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Jp.Database.Context;
using JPProject.Sso.AspNetIdentity.Models.Identity;
using Microsoft.EntityFrameworkCore;

namespace Bk.Application.Commands.Roles
{
    public class RoleRepository:IRoleRepository
    {
        private readonly SsoContext _context;

        public RoleRepository(SsoContext context)
        {
            _context = context;
        }

        public Task<RoleIdentity> GetRole(string role)
            => _context.Roles.FirstOrDefaultAsync(x => x.Name.ToLower().Equals(role.ToLower()));
    }
}
