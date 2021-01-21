using System.Linq;
using Bk.Application.SessionExtension;
using HotChocolate;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Data;
using HotChocolate.Types;
using Jp.Database.Context;
using JPProject.Sso.AspNetIdentity.Models;
using JPProject.Sso.AspNetIdentity.Models.Identity;

namespace Bk.Application.QueryTypes
{
    
    public class UserQueryType
    {
        public string Version = "1.0";

        [Authorize]
        [UseProjection]
        [UseFiltering]
        public IQueryable<Tenant> GetAssociatedBusinesses([GraphQLSession] OAuthSession session, [Service] SsoQueryContext context) => (from tenant in context.Tenants
            join userRole in context.UserRoles on tenant.Id equals userRole.TenantId
            join role in context.Roles on userRole.RoleId equals role.Id
            where userRole.UserId == session.SubjectId.ToString()
            select tenant).Distinct();

    }
    public class UserQueryConfiguration
        : ObjectType<UserIdentity>
    {
        protected override void Configure(IObjectTypeDescriptor<UserIdentity> descriptor)
        {
            descriptor.BindFieldsExplicitly();
            descriptor.Field(x => x.Id);
            descriptor.Field(x => x.UserName);
            descriptor.Field(x => x.Email);
            descriptor.Field(x => x.DisplayName);
            descriptor.Field(x => x.Gender);
            descriptor.Field(x => x.State);
            descriptor.Field(x => x.Pic);
            descriptor.Field(x => x.FirstName);
            descriptor.Field(x => x.LastName);
            descriptor.Field(x => x.UserName);
            descriptor.Field(x => x.PhoneNumber);
        }
    }
}
