using System;
using System.Threading.Tasks;
using Bk.Application.Commands.Businesses.Repository;
using Bk.Application.Commands.Businesses.ViewModel;
using Bk.Application.Commands.Users.Command;
using Bk.Application.Commands.Users.Repository;
using Bk.Application.Common;
using Bk.Application.Managers;
using Bk.Common.EventBus;
using Bk.Common.Exceptions;
using Bk.Common.Services;
using JPProject.Sso.AspNetIdentity.Models;

namespace Bk.Application.Commands.Businesses.Command
{
    [Validate]
    public class BusinessCommandService : BaseService, IBusinessCommandService
    {
        private readonly IBusinessRepository _businessRepository;
        private readonly IUserRepository _userRepository;
        private readonly IBlobStorageManager _blobStorageManager;
        private readonly IEventBus _eventBus;
        public static NotFoundException BusinessNotFound(Guid businessId) =>
            new NotFoundException($"Businesses Not Found against Id: {businessId}");

        public static ConflictException BusinessNameConflict(string name) =>
            new ConflictException($"Business already exists against name {name}");

        public BusinessCommandService(IBusinessRepository businessRepository, IBlobStorageManager blobStorageManager, IUserRepository userRepository, IEventBus eventBus)
        {
            _businessRepository = businessRepository;
            _blobStorageManager = blobStorageManager;
            _userRepository = userRepository;
            _eventBus = eventBus;
        }
        public async Task<string> CreateBusiness(CreateBusinessVm vm)
        {
            // Check If Businesses Exists in BusinessRepository
            var admin = await _userRepository.GetById(vm.OwnerId) ?? throw UserCommandService.UserNotFound(vm.OwnerId);

            if (await _businessRepository.IsNameDuplicate(vm.Name)) throw BusinessNameConflict(vm.Name);
            // Create in AggregateRoot
            var business = new Tenant(admin,  vm.Name, vm.Country, vm.Currency, vm.TenantTypeId, vm.IndustryId);

            admin.CreateBusiness(business);

            // Save Changes in BusinessRepository
            await _userRepository.SaveChanges();

            return business.Id;
        }
        public async Task Update(UpdateBusinessVm vm)
        {
            // Get AggregateRoot from BusinessRepository
            var business = await _businessRepository.GetById(vm.Id.ToString()) ?? throw BusinessNotFound(vm.Id);

            if (await _businessRepository.IsNameDuplicateExceptBusiness(vm.Id.ToString(), vm.Name)) throw BusinessNameConflict(vm.Name);

            // Update entity
            business.Update(vm.Name, vm.Phone, vm.Fax, vm.Mobile, vm.TollFree, vm.Website);

            // Save Changes in BusinessRepository
            await _businessRepository.SaveChanges();
        }

        public async Task Archive(Guid ownerId, Guid businessId)
        {
            // Get AggregateRoot from businessRepository
            var admin = await _userRepository.GetById(ownerId) ?? throw UserCommandService.UserNotFound(ownerId);

            // Check If Businesses Exists in businessRepository
            var business = await _businessRepository.GetById(businessId.ToString());

            // Update entity
            business.Archive();

            // Save Changes in businessRepository
            await _userRepository.SaveChanges();
        }
        public async Task Restore(Guid adminId, Guid businessId)
        {
            // Get AggregateRoot from businessRepository
            var admin = await _userRepository.GetById(adminId) ?? throw UserCommandService.UserNotFound(adminId);

            // Check If Businesses Exists in businessRepository
            var business = await _businessRepository.GetById(businessId.ToString());

            // Update entity
            business.Restore();

            // Save Changes in businessRepository
            await _userRepository.SaveChanges();
        }

        [Obsolete]
        public async Task UpdateLogo(UpdateBusinessLogoVm vm)
        {
            // Get AggregateRoot from BusinessRepository
            var business = await _businessRepository.GetById(vm.Id.ToString()) ?? throw BusinessNotFound(vm.Id);

            // upload file to cloud
            var filePath = $"Businesses-{business.Id}/logo";

            var pic = await _blobStorageManager.UploadAndGetFile(vm.File.Name, filePath, vm.File.Stream);
            await vm.File.Stream.DisposeAsync();

            // update AggregateRoot
            business.UpdateLogo(pic);

            // Save Changes in BusinessRepository
            await _businessRepository.SaveChanges();
        }

    }
}
