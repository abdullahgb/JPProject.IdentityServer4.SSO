using System;
using System.IO;
using System.Threading.Tasks;
using Application.Base.Admins.ViewModel;
using Bk.Common.Commands;
using JPProject.Sso.AspNetIdentity.Models.Identity;

namespace Application.Base.Admins.Command
{
    public interface IAdminCommandService: ICommandService
    {
        //Task<Guid> CreateAdmin(CreateAdminVm vm);
        Task UpdateAdmin(UpdateAdminVm vm);
        Task<UserIdentity> UpdatePhoto(Guid id, string fileName, Stream stream);
        Task Archive(Guid id);
        Task Restore(Guid adminId);
    }
}
