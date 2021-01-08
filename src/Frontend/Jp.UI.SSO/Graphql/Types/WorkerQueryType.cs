using System.Linq;
using HotChocolate;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using Jp.Database.Context;
using JPProject.Sso.AspNetIdentity.Models.Identity;
using Microsoft.AspNetCore.Http;

namespace Jp.UI.SSO.Graphql.Types
{
    
    public class WorkerQueryType : BaseQueryType
    {
        public WorkerQueryType(IHttpContextAccessor httpContextAccessor) : base(httpContextAccessor) { }

        [Authorize(Policy = "TenantAdministration")]
        [UsePaging]
        [UseProjection]
        [UseFiltering]
        [UseSorting]
        [GraphQLIgnore]
        public IQueryable<UserIdentity> GetPaginatedWorkers([Service] SsoQueryContext context) =>
            (from user in context.Users
                join userRole in context.UserRoles on user.Id equals userRole.UserId
                join role in context.Roles on userRole.RoleId equals role.Id
                where userRole.TenantId == Session.TenantId.ToString() && !role.Name.Contains("owner")
                      && !role.Name.Contains("admin") && userRole.UserId != Session.SubjectId.ToString()
                select user).Distinct();
    }
}
