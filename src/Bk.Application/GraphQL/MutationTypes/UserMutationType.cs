using System.Threading.Tasks;
using Bk.Application.Commands.Users.Command;
using Bk.Application.Commands.Users.ViewModel;
using Bk.Application.Common;
using Bk.Common.Roles;
using HotChocolate;
using HotChocolate.AspNetCore.Authorization;

namespace Bk.Application.GraphQL.MutationTypes
{
    public class UserMutationType:BaseMutation
    {
        [Authorize(Roles = new[] {ApplicationRoles.Owner})]
        public async Task<string> AssignRolesToUser(AssignUserRoles model, [GraphQLSession] OAuthSession session, [Service] IUserCommandService commandService)
        {
            model.BusinessId = session.TenantId;
            await commandService.AssignUserRoles(model);
            return Ok();
        }
    }
}
