using System.Linq;
using HotChocolate;
using HotChocolate.Data;
using Jp.Database.Context;
using JPProject.Sso.AspNetIdentity.Models.Identity;
using HotChocolate.AspNetCore.Authorization;
using Jp.Database;
using Microsoft.AspNetCore.Http;

namespace Jp.UI.SSO.Graphql.Types
{
    [Authorize]
    // ReSharper disable once ClassNeverInstantiated.Global
    public class BusinessQueryType: BaseQueryType
    {
        public BusinessQueryType(IHttpContextAccessor httpContextAccessor) : base(httpContextAccessor) { }

        [UseProjection]
        [UseFiltering]
        [GraphQLIgnore]
        public IQueryable<Tenant> GetMyBusinesses([Service] SsoQueryContext context) => (from tenant in context.Tenants
            join userRole in context.UserRoles on tenant.Id equals userRole.TenantId
            join role in context.Roles on userRole.RoleId equals role.Id
            where userRole.UserId == Session.SubjectId.ToString() && role.Name.Contains(CustomRoleTypes.Owner)
            select tenant).Distinct();

        [UseProjection]
        [UseFiltering]
        [GraphQLIgnore]
        public IQueryable<Tenant> GetAssociatedBusinesses([Service] SsoQueryContext context) => (from tenant in context.Tenants
            join userRole in context.UserRoles on tenant.Id equals userRole.TenantId
            join role in context.Roles on userRole.RoleId equals role.Id
            where userRole.UserId == Session.SubjectId.ToString()
            select tenant).Distinct();
    }
}
