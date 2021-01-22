using System.Collections.Generic;
using System.Threading.Tasks;
using Bk.Common.Repositories;
using JPProject.Sso.AspNetIdentity.Models.Identity;

namespace Bk.Application.Commands.Roles
{
    public interface IRoleRepository:IRepository
    {
        public Task<RoleIdentity> GetRole(string role);
        public Task<List<RoleIdentity>> GetRoles(List<string> roles);
    }
}
