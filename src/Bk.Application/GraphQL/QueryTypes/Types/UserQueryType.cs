using System;
using System.Linq;
using System.Threading.Tasks;
using Bk.Application.Common;
using Bk.Common.GraphQL;
using HotChocolate;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using Jp.Database.Context;
using JPProject.Sso.AspNetIdentity.Models.Identity;
using Microsoft.EntityFrameworkCore;
using UserIdentity = JPProject.Sso.AspNetIdentity.Models.Identity.UserIdentity;

namespace Bk.Application.GraphQL.QueryTypes.Types
{
    
    public class UserQueryType
    {
        [Authorize]
        [UsePaging]
        [UseProjection]
        [UseFiltering]
        [UseSorting]
        public IQueryable<UserIdentity> GetPaginated([GraphQLSession] OAuthSession session,
            [Service] SsoQueryContext context) => (from user in context.Users
            join userRole in context.UserRoles on user.Id equals userRole.UserId
            join role in context.Roles on userRole.RoleId equals role.Id
            where userRole.TenantId == session.TenantId.ToString()
            select user).Distinct();

        [Authorize]
        [UseProjection]
        [UseFiltering]
        [UseFirstOrDefault]
        public IQueryable<UserIdentity> GetFirst([GraphQLSession] OAuthSession session,
            [Service] SsoQueryContext context, Guid userId) => (from user in context.Users
            join userRole in context.UserRoles on user.Id equals userRole.UserId
            join role in context.Roles on userRole.RoleId equals role.Id
            where userRole.TenantId.Equals(session.TenantId.ToString()) && userRole.UserId.Equals(userId.ToString())
            select user).Distinct();

        [Authorize]
        [UseProjection]
        [GraphQLIgnore]
        public Task<UserIdentity> GetMe([GraphQLSession] OAuthSession session,
            [Service] SsoQueryContext context)
            => (from user in context.Users
                join userRole in context.UserRoles on user.Id equals userRole.UserId
                join role in context.Roles on userRole.RoleId equals role.Id
                where userRole.TenantId.Equals(session.TenantId.ToString()) &&
                      userRole.UserId.Equals(session.SubjectId.ToString())
                select user).FirstOrDefaultAsync();

        [Authorize]
        [UseProjection]
        [UseFiltering]
        public IQueryable<RoleIdentity> GetUserRoles([GraphQLSession] OAuthSession session,
            [Service] SsoQueryContext context, Guid userId)
        => (from user in context.Users
                join userRole in context.UserRoles on user.Id equals userRole.UserId
                join role in context.Roles on userRole.RoleId equals role.Id
                where userRole.TenantId.Equals(session.TenantId.ToString())
                      && user.Id.Equals(userId.ToString())
                select role).Distinct();
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
            descriptor.Field(x => x.DateOfBirth);
        }
    }
}
