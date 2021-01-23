using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Graph;
using Microsoft.IdentityModel.Clients.ActiveDirectory;

namespace Bk.Application.Infrastructures.ActiveDirectory
{
    public class AzureAuthenticationProvider: IAuthenticationProvider
    {

        public string Authority { get; set; }
        public string ClientId { get; set; }
        public string ClientSecretId { get; set; }
        public string SignedInUserID { get; set; }
        public string TenantId { get; set; }


        public async Task AuthenticateRequestAsync(HttpRequestMessage request)
        {
            // get a token for the Graph without triggering any user interaction (from the cache, via multi-resource refresh token, etc)
            var cred = new ClientCredential(ClientId, ClientSecretId);
            // initialize AuthenticationContext with the token cache of the currently signed in user, as kept in the app's database
            //new ADALTokenCache(signedInUserID)
            var authenticationContext = new AuthenticationContext($"{Authority}{TenantId}");
            var authResult = await authenticationContext.AcquireTokenAsync("https://graph.microsoft.com/", cred);
            request.Headers.Add("Authorization", "Bearer " + authResult.AccessToken);
        }
        public static GraphServiceClient CreateGraphClient(string tenantId,AzureApp azureApp)
        {
            var authProvider =
                new AzureAuthenticationProvider
                {
                    ClientSecretId = azureApp.ClientSecret,
                    ClientId = azureApp.ClientId,
                    Authority = azureApp.Authority,
                    TenantId = tenantId
                };
            return new GraphServiceClient(authProvider);
        }
    }
}
