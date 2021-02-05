using System.Collections.Generic;
using System.Linq;
using Bk.Application.Common;
using Bk.Common.GraphQL;
using Bk.Common.Roles;
using HotChocolate;
using HotChocolate.Data;
using HotChocolate.Types;
using Jp.Database.Context;
using JPProject.Sso.AspNetIdentity.Models.Identity;

namespace Bk.Application.GraphQL.QueryTypes.Types
{
    [ExtendObjectType(Name = nameof(Query))]
    public class RoleQueryType: IGraphQLType
    {
        public readonly List<string> RestrictedRoles = new List<string>
        {
            ApplicationRoles.Owner,
            ApplicationRoles.OAuthAdmin
        };

        [UseProjection]
        [UseFiltering]
        public IQueryable<RoleIdentity> GetRoles([Service] SsoQueryContext context)
            => context.Roles.Where(x => !RestrictedRoles.Contains(x.Name));
    }
    public class RoleQueryConfiguration
        : ObjectType<RoleIdentity>, IGraphQLType
    {
        protected override void Configure(IObjectTypeDescriptor<RoleIdentity> descriptor)
        {
            descriptor.BindFieldsExplicitly();
            descriptor.Field(x => x.Id);
            descriptor.Field(x => x.Name);
        }
    }
}
