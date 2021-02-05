using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Bk.Application.Commands.Businesses.Command;
using Bk.Application.Commands.Businesses.Repository;
using Bk.Application.Commands.Roles;
using Bk.Application.Commands.Users.Repository;
using Bk.Application.Commands.Users.ViewModel;
using Bk.Application.Common;
using Bk.Application.Infrastructures.ActiveDirectory;
using Bk.Application.Infrastructures.BlobStorage;
using Bk.Auth.Events.User;
using Bk.Common.EventBus;
using Bk.Common.Exceptions;
using Bk.Common.LinqUtils;
using Bk.Common.Roles;
using Bk.Common.Services;
using Bk.Common.StringUtils;
using JPProject.Sso.AspNetIdentity.Models;
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
        private readonly IActiveDirectoryService _activeDirectoryService;
        private readonly IEventBus _eventBus;

        public static NotFoundException UserNotFound(Guid adminId) =>
            new NotFoundException($"User Not Found against UserId: {adminId}");
        public static ConflictException ConflictEmail(string email) =>
            new ConflictException($"User already exists against {email}");

        public UserCommandService(IUserRepository userRepository, IBlobStorageManager blobStorageManager,
            IBusinessRepository businessRepository,IRoleRepository roleRepository, IActiveDirectoryService activeDirectoryService,
            IEventBus eventBus)
        {
	        _userRepository = userRepository;
            _blobStorageManager = blobStorageManager;
            _businessRepository = businessRepository;
            _roleRepository = roleRepository;
            _activeDirectoryService = activeDirectoryService;
            _eventBus = eventBus;
        }

        //public async Task<Guid> CreateAdmin(CreateUser vm)
        //{
        //    if (await _userRepository.IsEmailDuplicate(vm.Email))
        //        throw new ConflictException($"User already exists against {vm.Email}");

        //    var admin = new UserIdentity(vm.FirstName, vm.LastName, vm.Email, Gender.NA);
        //    _userRepository.Add(admin);
        //    await _userRepository.SaveChanges();
        //    return Guid.Parse(admin.Id);
        //}

        public async Task UpdateUser(UpdateUser vm)
        {
	        if (await _userRepository.IsEmailDuplicateExceptUser(vm.Id, vm.Email))
                throw ConflictEmail(vm.Email);

            var admin = await _userRepository.GetById(vm.Id,vm.BusinessId) ?? throw UserNotFound(vm.Id);

            admin.Update(vm.FirstName, vm.LastName);

            await _userRepository.SaveChanges();
        }

        public async Task AssignUserRoles(AssignUserRoles vm, bool isAdmin)
        {
            // check if user is not owner,Oauth admin
            var user = await _userRepository.GetById(vm.Id, vm.BusinessId) ?? throw UserNotFound(vm.Id);
            if (vm.Roles.HasAny())
            {
                var roles = await _roleRepository.GetRoles(vm.Roles);
                user.ReplaceUserRoles(vm.BusinessId, roles, isAdmin);
            }
            else
            {
                vm.Roles.Add(ApplicationRoles.Member);
                var role = await _roleRepository.GetRole(ApplicationRoles.Member);
                user.ReplaceUserRole(vm.BusinessId, role);
            }

            await _businessRepository.SaveChanges();
            //await _eventBus.Publish(new UserRoleChanged(vm.BusinessId.ToString(),user.Id, vm.Roles));
        }

        public async Task SyncActiveDirectoryUsers(SyncActiveDirectory vm)
        {
            var business = await _businessRepository.GetById(vm.BusinessId.ToString()) ??
                           throw BusinessCommandService.BusinessNotFound(vm.BusinessId);
            if (business.MicrosoftTenantId.IsNullOrEmpty())
                throw new UnprocessableException("No Microsoft Tenant ID associated with the Business");

            var oldUserEmails = await _businessRepository.GetUserEmails(business.Id);
            var newUsers = await _activeDirectoryService.GetNewUsers(business.MicrosoftTenantId, oldUserEmails);
            if (newUsers.Any())
            {
                // check for users if they already registered tenant before company synchronize active directory
                var alreadyRegisteredUsers =
                    await _userRepository.GetByEmail(newUsers.Select(x => x.Email).ToList());
                var commonUsersFromDifferentUsers = new List<UserIdentity>();
                if (alreadyRegisteredUsers.Any())
                {
                    // remove all those users that already exists in db
                    commonUsersFromDifferentUsers = alreadyRegisteredUsers.Where(alreadyRegisteredUser => newUsers.Select(newUser => newUser.Email).Contains(alreadyRegisteredUser.Email)).ToList();
                    commonUsersFromDifferentUsers.ForEach(commonUserFromDifferentTenant => newUsers.RemoveAll(newUser => newUser.Email.Trim().ToLower().Equals(commonUserFromDifferentTenant.Email.ToLower().ToLower())));
                }
                _userRepository.InsertBulk(newUsers);
                await _userRepository.SaveChanges();
                var noneRole = await _roleRepository.GetRole(ApplicationRoles.Member);
                // update users list to include already registered users from different tenant
                newUsers.AddRange(commonUsersFromDifferentUsers);
                business.AddUsersWithRole(newUsers, noneRole);
                await _businessRepository.SaveChanges();
                await _eventBus.Publish(newUsers.Select(x =>
                    new UserCreatedIntegration(x.Id, x.FirstName, x.LastName, x.Email, vm.BusinessId.ToString())));
            }

        }

        public async Task Restore(Guid id, Guid businessId)
        {
            // Get AggregateRoot from repository
            var user = await _userRepository.GetById(id) ?? throw UserNotFound(id);

            UpdateUserState(user, businessId, States.Active);

            // Save Changes in repository
            await _userRepository.SaveChanges();
        }

        public async Task Archive(Guid id, Guid businessId)
        {
            // Get AggregateRoot from repository
            var user = await _userRepository.GetById(id) ?? throw new NotFoundException("User not found.");

            UpdateUserState(user, businessId, States.Inactive);

            // Save Changes in repository
            await _userRepository.SaveChanges();
        }

        private void UpdateUserState(UserIdentity user, Guid businessId, States state)
        {
            var userRolesInBusiness = user.UserRoles.Where(x =>
                x.TenantId.Equals(businessId.ToString())).ToList();

            userRolesInBusiness.ForEach(x => x.State = state);
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
