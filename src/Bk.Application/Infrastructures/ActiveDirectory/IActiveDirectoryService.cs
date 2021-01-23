using System.Collections.Generic;
using System.Threading.Tasks;
using JPProject.Sso.AspNetIdentity.Models.Identity;

namespace Bk.Application.Infrastructures.ActiveDirectory
{
    public interface IActiveDirectoryService
    {
        Task<List<UserIdentity>> GetNewUsers(string businessId, List<string> oldUserEmails);
    }
}
