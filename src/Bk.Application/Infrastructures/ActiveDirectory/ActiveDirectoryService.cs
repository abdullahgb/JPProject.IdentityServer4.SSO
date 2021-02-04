using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bk.Common.StringUtils;
using Microsoft.Extensions.Options;
using Microsoft.Graph;
using UserIdentity = JPProject.Sso.AspNetIdentity.Models.Identity.UserIdentity;

namespace Bk.Application.Infrastructures.ActiveDirectory
{
    public class ActiveDirectoryService:IActiveDirectoryService
    {
        private readonly AzureApp _azureApp;
        private const int NumberOfUserPerRequest = 500;

        public ActiveDirectoryService(IOptions<AzureApp> config)
        {
            _azureApp = config.Value;
        }

        public async Task<List<UserIdentity>> GetNewUsers(string microsoftTenantId, List<string> oldUserEmails)
        {
            var client = AzureAuthenticationProvider.CreateGraphClient(microsoftTenantId, _azureApp);
            var reqUsers = new List<User>();
            var req = await client.Users.Request().Top(NumberOfUserPerRequest).GetAsync();
            reqUsers.AddRange(req);

            while (req.NextPageRequest != null)
            {
                req = await req.NextPageRequest.GetAsync();
                reqUsers.AddRange(req);
            }
            var dbUsersEmailHash = new HashSet<string>(oldUserEmails).ToList();
            var newUsers = reqUsers
                .Where(reqUser => !reqUser.UserPrincipalName.IsNullOrEmpty())
                .Where(reqUser => !dbUsersEmailHash.Contains(reqUser.UserPrincipalName))
                .Select(src => new UserIdentity(src.DisplayName, src.UserPrincipalName))
                .ToList();
            return newUsers;
        }
    }
}
