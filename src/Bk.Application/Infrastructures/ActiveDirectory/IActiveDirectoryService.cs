using System.Collections.Generic;
using System.Threading.Tasks;
using JPProject.Sso.AspNetIdentity.Models.Identity;
using JPProject.Sso.Domain.Models;

namespace Bk.Application.Infrastructures.ActiveDirectory
{
    public interface IActiveDirectoryService
    {
        Task<List<UserIdentity>> GetNewUsers(string businessId, List<string> oldUserEmails);
    }
}
