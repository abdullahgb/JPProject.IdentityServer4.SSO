using System.Linq;
using Bk.Common.Roles;
using HotChocolate;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using Jp.Database.Context;
using JPProject.Sso.AspNetIdentity.Models;
using Microsoft.AspNetCore.Http;

namespace Bk.Application.QueryTypes
{
    [Authorize]
    // ReSharper disable once ClassNeverInstantiated.Global
    public class BusinessQueryType: BaseQueryType
    {
        public BusinessQueryType(IHttpContextAccessor httpContextAccessor) : base(httpContextAccessor) { }

        [UseProjection]
        [UseFiltering]
        [GraphQLIgnore]
        public IQueryable<Tenant> GetOwnedBusinesses([Service] SsoQueryContext context) => (from tenant in context.Tenants
            join userRole in context.UserRoles on tenant.Id equals userRole.TenantId
            join role in context.Roles on userRole.RoleId equals role.Id
            where userRole.UserId == Session.SubjectId.ToString() && role.Name.Contains(ApplicationRoles.Owner)
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
