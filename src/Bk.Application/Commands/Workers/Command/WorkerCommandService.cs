using System;
using System.Threading.Tasks;
using Bk.Application.Commands.Users.Repository;
using Bk.Application.Commands.Workers.ViewModel;
using Bk.Application.Common;
using Bk.Common.Exceptions;
using Bk.Common.Services;
using JPProject.Sso.AspNetIdentity.Models.Identity;

namespace Bk.Application.Commands.Workers.Command
{
    [Validate]
    public class WorkerCommandService: BaseService, IWorkerCommandService
    {
        private readonly IUserRepository _userRepository;

        private static NotFoundException UserNotFound(Guid adminId) =>
            new NotFoundException($"User Not Found against AddressId: {adminId}");
        private static ConflictException ConflictEmail(string email) =>
            new ConflictException($"User already exists against {email}");

        public WorkerCommandService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public async Task<string> CreateWorker(CreateWorkerVM vm)
        {
            if (await _userRepository.IsEmailDuplicate(vm.Email)) throw ConflictEmail(vm.Email);

            var admin = await _userRepository.GetById(vm.AdminId) ?? throw UserNotFound(vm.AdminId);

            var worker = new UserIdentity(admin, vm.FirstName, vm.LastName, vm.Email, vm.Gender);
            admin.AddWorker(worker);

            await _userRepository.SaveChanges();
            return worker.Id;
        }
        public async Task UpdateWorker(UpdateWorkerVM vm)
        {
            if (await _userRepository.IsEmailDuplicateExceptUser(vm.Id, vm.Email)) throw ConflictEmail(vm.Email);

            var admin = await _userRepository.GetById(vm.AdminId) ?? throw UserNotFound(vm.AdminId);

            var worker = admin.GetWorker(vm.Id);

            worker.Update(vm.FirstName, vm.LastName, vm.Email, vm.Gender, vm.State);

            await _userRepository.SaveChanges();
        }
    }
}
