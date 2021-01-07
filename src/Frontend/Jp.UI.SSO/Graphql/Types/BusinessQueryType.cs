using System.Linq;
using HotChocolate;
using HotChocolate.Data;
using HotChocolate.Resolvers;
using Jp.Database.Context;
using JPProject.Sso.AspNetIdentity.Models.Identity;
using HotChocolate.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;

namespace Jp.UI.SSO.Graphql.Types
{
    // ReSharper disable once ClassNeverInstantiated.Global
    public class BusinessQueryType: BaseQueryType
    {
        public BusinessQueryType(IHttpContextAccessor httpContextAccessor) : base(httpContextAccessor) { }

        [Authorize(Policy = "MultiTenantUser")]
        [UseProjection]
        [UseFiltering]
        [GraphQLIgnore]
        public IQueryable<Tenant> GetMyBusinesses([Service] SsoQueryContext context) => (from tenant in context.Tenants
            join userRole in context.UserRoles on tenant.Id equals userRole.TenantId
            join role in context.Roles on userRole.RoleId equals role.Id
            where userRole.UserId == Session.SubjectId.ToString() && !role.Name.Contains("owner")
            select tenant).Distinct();
    }
}
