using System.Threading.Tasks;
using Bk.Application.Commands.Users.Command;
using Bk.Application.Commands.Users.ViewModel;
using Bk.Application.Common;
using Bk.Application.GraphQL.QueryTypes;
using HotChocolate;

namespace Bk.Application.GraphQL.MutationTypes.Types
{
    public class ProfileMutationType:BaseMutation
    {
        public async Task<string> Update([GraphQLSession] OAuthSession session,
            [Service] IUserCommandService service, UpdateUser model)
        {
            model.BusinessId = session.TenantId;
            model.Id = session.SubjectId;
            await service.UpdateUser(model);
            return Ok();
        }
    }
}
