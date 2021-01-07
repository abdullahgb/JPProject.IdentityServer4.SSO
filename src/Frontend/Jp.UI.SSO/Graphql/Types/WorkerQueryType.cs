using System.Linq;
using HotChocolate;
using HotChocolate.Data;
using HotChocolate.Types;
using Jp.Database.Context;
using JPProject.Sso.AspNetIdentity.Models.Identity;
using Microsoft.AspNetCore.Http;

namespace Jp.UI.SSO.Graphql.Types
{
    public class WorkerQueryType : BaseQueryType
    {
        private readonly SsoQueryContext _queryContext;

        public WorkerQueryType(IHttpContextAccessor httpContextAccessor, SsoQueryContext context)
            : base(httpContextAccessor)
        {
            _queryContext = context;
        }

        [UsePaging]
        [UseProjection]
        [UseFiltering]
        [UseSorting]
        [GraphQLIgnore]
        public IQueryable<UserIdentity> GetPaginatedWorkers()
        {
            var query = (from user in _queryContext.Users
                        join userRole in _queryContext.UserRoles on user.Id equals userRole.UserId
                        join role in _queryContext.Roles on userRole.RoleId equals role.Id
                        where userRole.TenantId == Session.TenantId.ToString() && !role.Name.Contains("owner")
                        select user).Distinct();
            return query;
        }
    }
}
