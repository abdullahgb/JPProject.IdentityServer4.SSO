using System.Linq;
using Bk.Application.Common;
using Bk.Common.GraphQL;
using Bk.Common.Roles;
using HotChocolate;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using Jp.Database.Context;
using JPProject.Sso.AspNetIdentity.Models;

namespace Bk.Application.GraphQL.QueryTypes.Types
{
    // ReSharper disable once ClassNeverInstantiated.Global
    public class BusinessQueryType
    {
        [Authorize(Policy = "TenantOwner")]
        [UseProjection]
        [UseFiltering]
        [GraphQLIgnore]
        public IQueryable<Tenant> GetOwnedBusinesses([GraphQLSession] OAuthSession session, [Service] SsoQueryContext context) => (from tenant in context.Tenants
            join userRole in context.UserRoles on tenant.Id equals userRole.TenantId
            join role in context.Roles on userRole.RoleId equals role.Id
            where userRole.UserId == session.SubjectId.ToString() && role.Name.Contains(ApplicationRoles.Owner)
            select tenant).Distinct();

        [Authorize]
        [UseProjection]
        [UseFiltering]
        public IQueryable<Tenant> GetAssociatedBusinesses([GraphQLSession] OAuthSession session,[Service] SsoQueryContext context) => (from tenant in context.Tenants
            join userRole in context.UserRoles on tenant.Id equals userRole.TenantId
            join role in context.Roles on userRole.RoleId equals role.Id
            where userRole.UserId == session.SubjectId.ToString()
            select tenant).Distinct();
    }
    public class BusinessQueryConfiguration
        : ObjectType<Tenant>,IGraphQLType
    {
        protected override void Configure(IObjectTypeDescriptor<Tenant> descriptor)
        {
            descriptor.Name("Business");
            descriptor.BindFieldsExplicitly();
            descriptor.Field(x => x.Id);
            descriptor.Field(x => x.CanonicalName).Name("name");
            descriptor.Field(x => x.DisplayName);
            descriptor.Field(x => x.Logo);
            descriptor.Field(x => x.Email);
            descriptor.Field(x => x.Phone);
            descriptor.Field(x => x.Fax);
            descriptor.Field(x => x.Mobile);
            descriptor.Field(x => x.TollFree);
            descriptor.Field(x => x.Website);
            descriptor.Field(x => x.Country);
            descriptor.Field(x => x.Currency);
            descriptor.Field(x => x.TenantTypeId).Name("businessTypeId");
            descriptor.Field(x => x.IndustryId);
            descriptor.Field(x => x.State);
        }
    }
}
