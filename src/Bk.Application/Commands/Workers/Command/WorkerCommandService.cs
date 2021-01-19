using System;
using System.Threading.Tasks;
using Application.Base.Admins.Repository;
using Application.Base.Workers.ViewModel;
using Application.Common;
using AutoMapper;
using Bk.Common.Exceptions;
using Bk.Common.Services;
using JPProject.Sso.AspNetIdentity.Models.Identity;
using JPProject.Sso.Domain.Models;

namespace Application.Base.Workers.Command
{
    [Validate]
    public class WorkerCommandService: BaseService, IWorkerCommandService
    {
        private readonly IMapper _mapper;
        private readonly IAdminRepository _adminRepository;

        private static NotFoundException UserNotFound(Guid adminId) =>
            new NotFoundException($"User Not Found against AddressId: {adminId}");
        private static ConflictException ConflictEmail(string email) =>
            new ConflictException($"User already exists against {email}");

        public WorkerCommandService(IMapper mapper, IAdminRepository adminRepository)
        {
            _mapper = mapper;
            _adminRepository = adminRepository;
        }
        public async Task<string> CreateWorker(CreateWorkerVM vm)
        {
            if (await _adminRepository.IsEmailDuplicate(vm.Email)) throw ConflictEmail(vm.Email);

            var admin = await _adminRepository.GetById(vm.AdminId) ?? throw UserNotFound(vm.AdminId);

            var worker = new UserIdentity(admin, vm.FirstName, vm.LastName, vm.Email, vm.Gender);
            admin.AddWorker(worker);

            await _adminRepository.SaveChanges();
            return worker.Id;
        }
        public async Task UpdateWorker(UpdateWorkerVM vm)
        {
            if (await _adminRepository.IsEmailDuplicateExceptUser(vm.Id, vm.Email)) throw ConflictEmail(vm.Email);

            var admin = await _adminRepository.GetById(vm.AdminId) ?? throw UserNotFound(vm.AdminId);

            var worker = admin.GetWorker(vm.Id);

            worker.Update(vm.FirstName, vm.LastName, vm.Email, vm.Gender, vm.State);

            await _adminRepository.SaveChanges();
        }
    }
}
