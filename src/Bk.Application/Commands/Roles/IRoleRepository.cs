using System.Threading.Tasks;
using Bk.Common.Roles;
using JPProject.Sso.AspNetIdentity.Models.Identity;

namespace Bk.Application.Commands.Roles
{
    public interface IRoleRepository
    {
        public Task<RoleIdentity> GetRole(string role);
    }
}
