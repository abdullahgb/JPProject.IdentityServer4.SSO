using System.Linq;
using Bk.Application.Common;
using Bk.Common.GraphQL;
using HotChocolate;
using HotChocolate.Data;
using HotChocolate.Types;
using Jp.Database.Context;
using JPProject.Sso.AspNetIdentity.Models;
using JPProject.Sso.AspNetIdentity.Models.Identity;

namespace Bk.Application.GraphQL.QueryTypes.Types
{
    
    public class UserQueryType
    {

        ///  [Authorize]
        public string Version => "1.0";

        [UseProjection]
        [UseFiltering]
        public IQueryable<UserIdentity> GetPaginated([GraphQLSession] OAuthSession session,
            [Service] SsoQueryContext context) => (from user in context.Users
            join userRole in context.UserRoles on user.Id equals userRole.UserId
            join role in context.Roles on userRole.RoleId equals role.Id
            where userRole.TenantId == session.TenantId.ToString()
            select user);

    }
    public class UserQueryConfiguration
        : ObjectType<UserIdentity>, IGraphQLType
    {
        protected override void Configure(IObjectTypeDescriptor<UserIdentity> descriptor)
        {
            descriptor.BindFieldsExplicitly();
            descriptor.Field(x => x.Id);
            descriptor.Field(x => x.UserName);
            descriptor.Field(x => x.Email);
            descriptor.Field(x => x.DisplayName);
            descriptor.Field(x => x.Gender);
            descriptor.Field(x => x.Pic);
            descriptor.Field(x => x.FirstName);
            descriptor.Field(x => x.LastName);
            descriptor.Field(x => x.UserName);
            descriptor.Field(x => x.PhoneNumber);
        }
    }
}
