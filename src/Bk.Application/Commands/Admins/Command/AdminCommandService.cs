using System;
using System.IO;
using System.Threading.Tasks;
using Application.Base.Admins.Repository;
using Application.Base.Admins.ViewModel;
using Application.Common;
using Bk.Application.Managers;
using Bk.Common.Exceptions;
using Bk.Common.Services;
using JPProject.Sso.AspNetIdentity.Models.Identity;

namespace Application.Base.Admins.Command
{
    [Validate]
    public class AdminCommandService : BaseService, IAdminCommandService
    {
	    private readonly IAdminRepository _adminRepository;
        private readonly IBlobStorageManager _blobStorageManager;

        private static NotFoundException UserNotFound(Guid adminId) =>
            new NotFoundException($"User Not Found against AddressId: {adminId}");
        private static ConflictException ConflictEmail(string email) =>
            new ConflictException($"User already exists against {email}");

        public AdminCommandService(IAdminRepository adminRepository, IBlobStorageManager blobStorageManager)
        {
	        _adminRepository = adminRepository;
            _blobStorageManager = blobStorageManager;
        }

        //public async Task<Guid> CreateAdmin(CreateAdminVm vm)
        //{
        //    if (await _adminRepository.IsEmailDuplicate(vm.Email))
        //        throw new ConflictException($"User already exists against {vm.Email}");

        //    var admin = new UserIdentity(vm.FirstName, vm.LastName, vm.Email, vm.Gender);
        //    _adminRepository.Add(admin);
        //    await _adminRepository.SaveChanges();
        //    return admin.Id;
        //}

        public async Task UpdateAdmin(UpdateAdminVm vm)
        {
	        if (await _adminRepository.IsEmailDuplicateExceptUser(vm.Id, vm.Email)) throw ConflictEmail(vm.Email);

            var admin = await _adminRepository.GetById(vm.Id) ?? throw UserNotFound(vm.Id);

            admin.Update(vm.FirstName, vm.LastName, vm.Email, vm.Gender, vm.State);

            await _adminRepository.SaveChanges();
        }

        public async Task Restore(Guid adminId)
        {
            // Get AggregateRoot from repository
            var admin = await _adminRepository.GetById(adminId) ?? throw UserNotFound(adminId);

            admin.Restore();

            // Save Changes in repository
            await _adminRepository.SaveChanges();
        }

        public async Task Archive(Guid id)
        {
            // Get AggregateRoot from repository
            var user = await _adminRepository.GetById(id) ?? throw new NotFoundException("User not found.");

            user.Archive();

            // Save Changes in repository
            await _adminRepository.SaveChanges();
        }
        public async Task<UserIdentity> UpdatePhoto(Guid id, string fileName, Stream stream)
        {
            // Get AggregateRoot from repository
            var user = await _adminRepository.GetById(id) ?? throw new NotFoundException("User not found.");

            // upload file to cloud
            var filePath = $"user-{id}/avatar";

            var pic = await _blobStorageManager.UploadAndGetFile(fileName, filePath, stream);

            // update AggregateRoot
            user.UpdatePhoto(pic);

            // Save Changes in repository
            await _adminRepository.SaveChanges();
            return user;
        }
    }
}
