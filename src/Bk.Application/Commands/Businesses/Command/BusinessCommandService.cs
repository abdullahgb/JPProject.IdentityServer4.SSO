using System;
using System.Threading.Tasks;
using Application.Base.Admins.Repository;
using Application.Base.Businesses.Repository;
using Application.Base.Businesses.ViewModel;
using Application.Common;
using AutoMapper;
using Bk.Application.Commands.Roles;
using Bk.Application.Managers;
using Bk.Common.EventBus;
using Bk.Common.Exceptions;
using Bk.Common.Roles;
using Bk.Common.Services;
using JPProject.Sso.AspNetIdentity.Models;

namespace Application.Base.Businesses.Command
{
    [Validate]
    public class BusinessCommandService : BaseService, IBusinessCommandService
    {
        private readonly IMapper _mapper;
        private readonly IRoleRepository _roleRepository;
        private readonly IBusinessRepository _businessRepository;
        private readonly IAdminRepository _adminRepository;
        private readonly IBlobStorageManager _blobStorageManager;
        private readonly IEventBus _eventBus;
        private static NotFoundException BusinessNotFound(Guid businessId) =>
            new NotFoundException($"Businesses Not Found against Id: {businessId}");
        private static NotFoundException UserNotFound(Guid adminId) =>
            new NotFoundException($"User Not Found against Id: {adminId}");
        private static ConflictException BusinessNameConflict(string name) =>
            new ConflictException($"Business already exists against name {name}");

        public BusinessCommandService(IMapper mapper, IRoleRepository roleRepository, IBusinessRepository businessRepository, IBlobStorageManager blobStorageManager, IAdminRepository adminRepository, IEventBus eventBus)
        {
            _mapper = mapper;
            _roleRepository = roleRepository;
            _businessRepository = businessRepository;
            _blobStorageManager = blobStorageManager;
            _adminRepository = adminRepository;
            _eventBus = eventBus;
        }
        public async Task<string> CreateBusiness(CreateBusinessVm vm)
        {
            // Check If Businesses Exists in BusinessRepository
            var admin = await _adminRepository.GetById(vm.OwnerId) ?? throw UserNotFound(vm.OwnerId);

            if (await _businessRepository.IsNameDuplicate(vm.Name)) throw BusinessNameConflict(vm.Name);
            // Create in AggregateRoot
            var business = new Tenant(admin,  vm.Name, vm.Country, vm.Currency, vm.TenantTypeId, vm.IndustryId);

            admin.CreateBusiness(business);

            // Save Changes in BusinessRepository
            await _adminRepository.SaveChanges();

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
            var admin = await _adminRepository.GetById(ownerId) ?? throw UserNotFound(ownerId);

            // Check If Businesses Exists in businessRepository
            var business = await _businessRepository.GetById(businessId.ToString());

            // Update entity
            business.Archive();

            // Save Changes in businessRepository
            await _adminRepository.SaveChanges();
        }
        public async Task Restore(Guid adminId, Guid businessId)
        {
            // Get AggregateRoot from businessRepository
            var admin = await _adminRepository.GetById(adminId) ?? throw UserNotFound(adminId);

            // Check If Businesses Exists in businessRepository
            var business = await _businessRepository.GetById(businessId.ToString());

            // Update entity
            business.Restore();

            // Save Changes in businessRepository
            await _adminRepository.SaveChanges();
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
