using System;
using System.IO;
using System.Threading.Tasks;
using Bk.Application.Commands.Users.ViewModel;
using Bk.Common.Commands;
using JPProject.Sso.AspNetIdentity.Models.Identity;

namespace Bk.Application.Commands.Users.Command
{
    public interface IUserCommandService: ICommandService
    {
        //Task<Guid> CreateAdmin(CreateUser vm);
        Task UpdateUser(UpdateUser vm);
        Task AssignUserRoles(AssignUserRoles vm, bool isAdmin);
        Task SyncActiveDirectoryUsers(SyncActiveDirectory vm);
        Task<UserIdentity> UpdatePhoto(Guid id, string fileName, Stream stream);
        Task Archive(Guid id, Guid businessId);
        Task Restore(Guid id, Guid businessId);
    }
}
