using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Bk.Application.Commands.Businesses.Repository;
using Bk.Application.Commands.Roles;
using Bk.Application.Commands.Users.Repository;
using Bk.Application.Commands.Users.ViewModel;
using Bk.Application.Common;
using Bk.Application.Managers;
using Bk.Common.Exceptions;
using Bk.Common.LinqUtils;
using Bk.Common.Roles;
using Bk.Common.Services;
using JPProject.Sso.AspNetIdentity.Models.Identity;

namespace Bk.Application.Commands.Users.Command
{
    [Validate]
    public class UserCommandService : BaseService, IUserCommandService
    {
	    private readonly IUserRepository _userRepository;
        private readonly IBlobStorageManager _blobStorageManager;
        private readonly IBusinessRepository _businessRepository;
        private readonly IRoleRepository _roleRepository;

        public static NotFoundException UserNotFound(Guid adminId) =>
            new NotFoundException($"User Not Found against UserId: {adminId}");
        public static ConflictException ConflictEmail(string email) =>
            new ConflictException($"User already exists against {email}");

        public UserCommandService(IUserRepository userRepository, IBlobStorageManager blobStorageManager, IBusinessRepository businessRepository,IRoleRepository roleRepository)
        {
	        _userRepository = userRepository;
            _blobStorageManager = blobStorageManager;
            _businessRepository = businessRepository;
            _roleRepository = roleRepository;
        }

        //public async Task<Guid> CreateAdmin(CreateUser vm)
        //{
        //    if (await _userRepository.IsEmailDuplicate(vm.Email))
        //        throw new ConflictException($"User already exists against {vm.Email}");

        //    var admin = new UserIdentity(vm.FirstName, vm.LastName, vm.Email, vm.Gender);
        //    _userRepository.Add(admin);
        //    await _userRepository.SaveChanges();
        //    return admin.Id;
        //}

        public async Task UpdateAdmin(UpdateUser vm)
        {
	        if (await _userRepository.IsEmailDuplicateExceptUser(vm.Id, vm.Email)) throw ConflictEmail(vm.Email);

            var admin = await _userRepository.GetById(vm.Id,vm.BusinessId) ?? throw UserNotFound(vm.Id);

            admin.Update(vm.FirstName, vm.LastName, vm.Email, vm.Gender, vm.State);

            await _userRepository.SaveChanges();
        }

        public async Task AssignUserRoles(AssignUserRoles vm)
        {
            // check if user is not owner,Oauth admin
            if (await _userRepository.HasRole(vm.BusinessId, vm.Id, new List<string>
            {
                ApplicationRoles.Owner,
                ApplicationRoles.OAuthAdmin
            })) throw new UnprocessableException("Cannot change this person role");

            var user = await _userRepository.GetById(vm.Id, vm.BusinessId) ?? throw UserNotFound(vm.Id);
            if (vm.Roles.HasAny())
            {
                var roles = await _roleRepository.GetRoles(vm.Roles);
                user.ReplaceUserRoles(vm.BusinessId, roles);
            }
            else
            {
                var role = await _roleRepository.GetRole(ApplicationRoles.None);
                user.ReplaceUserRole(vm.BusinessId, role);
            }

            await _businessRepository.SaveChanges();
        }

        public async Task Restore(Guid adminId)
        {
            // Get AggregateRoot from repository
            var admin = await _userRepository.GetById(adminId) ?? throw UserNotFound(adminId);

            admin.Restore();

            // Save Changes in repository
            await _userRepository.SaveChanges();
        }

        public async Task Archive(Guid id)
        {
            // Get AggregateRoot from repository
            var user = await _userRepository.GetById(id) ?? throw new NotFoundException("User not found.");

            user.Archive();

            // Save Changes in repository
            await _userRepository.SaveChanges();
        }
        public async Task<UserIdentity> UpdatePhoto(Guid id, string fileName, Stream stream)
        {
            // Get AggregateRoot from repository
            var user = await _userRepository.GetById(id) ?? throw new NotFoundException("User not found.");

            // upload file to cloud
            var filePath = $"user-{id}/avatar";

            var pic = await _blobStorageManager.UploadAndGetFile(fileName, filePath, stream);

            // update AggregateRoot
            user.UpdatePhoto(pic);

            // Save Changes in repository
            await _userRepository.SaveChanges();
            return user;
        }
    }
}
