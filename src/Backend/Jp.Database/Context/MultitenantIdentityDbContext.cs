using JPProject.Sso.AspNetIdentity.Models.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Jp.Database.Context
{
    public class MultitenantIdentityDbContext : IdentityDbContext<
        UserIdentity, RoleIdentity, string, IdentityUserClaim<string>, UserRoleIdentity,
        IdentityUserLogin<string>, IdentityRoleClaim<string>, IdentityUserToken<string>>
    {
        public MultitenantIdentityDbContext(DbContextOptions<SsoContext> options):base(options){}
        public MultitenantIdentityDbContext(DbContextOptions<SsoCommandContext> options):base(options){}
    }
}
