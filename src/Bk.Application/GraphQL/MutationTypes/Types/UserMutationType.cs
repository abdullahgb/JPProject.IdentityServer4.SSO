using System;
using System.Linq;
using System.Threading.Tasks;
using Bk.Application.Commands.Users.Command;
using Bk.Application.Commands.Users.ViewModel;
using Bk.Application.Common;
using Bk.Application.GraphQL.QueryTypes;
using Bk.Common.Roles;
using HotChocolate;

namespace Bk.Application.GraphQL.MutationTypes.Types
{
    public class UserMutationType:BaseMutation
    {
      //  [Authorize(Roles = new[] {ApplicationRoles.Owner})]
        public async Task<string> AssignRolesToUser(AssignUserRoles model, [GraphQLSession] OAuthSession session, [Service] IUserCommandService commandService)
        {
            var isAdmin = session.Roles.Any(x =>
                x.Equals(ApplicationRoles.Owner) || x.Equals(ApplicationRoles.OAuthAdmin));
            model.BusinessId = session.TenantId;
            await commandService.AssignUserRoles(model, isAdmin);
            return Ok();
        }
        //[Authorize(Roles = new[] { ApplicationRoles.Owner })]
        public async Task<string> SyncActiveDirectoryUsers([GraphQLSession] OAuthSession session, [Service] IUserCommandService commandService)
        {
            await commandService.SyncActiveDirectoryUsers(new SyncActiveDirectory
            {
                Id = session.SubjectId,
                BusinessId = session.TenantId
            });
            return Ok();
        }
        //public async Task<string> Add([GraphQLSession] OAuthSession session,
        //    [Service] IUserCommandService commandService, CreateUser model)
        //{
        //    model.AdminId = session.Id;
        //    var workerId = await service.CreateUser(session.BusinessId, model);
        //    return Ok(workerId);
        //}
        public async Task<string> Update([GraphQLSession] OAuthSession session,
            [Service] IUserCommandService service, UpdateUser model)
        {
            model.BusinessId = session.TenantId;
            await service.UpdateUser(model);
            return Ok();
        }

        public async Task<string> Archive([GraphQLSession] OAuthSession session, [Service] IUserCommandService service, Guid userId)
        {
            await service.Archive(userId, session.TenantId);
            return Ok();
        }

        public async Task<string> Restore([GraphQLSession] OAuthSession session, [Service] IUserCommandService service, Guid userId)
        {
            await service.Restore(userId, session.TenantId);
            return Ok();
        }
    }
}
