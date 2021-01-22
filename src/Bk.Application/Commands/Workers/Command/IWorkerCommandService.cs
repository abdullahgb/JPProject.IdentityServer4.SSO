using System.Threading.Tasks;
using Bk.Application.Commands.Workers.ViewModel;
using Bk.Common.Commands;

namespace Bk.Application.Commands.Workers.Command
{
    public interface IWorkerCommandService:ICommandService
    {
        Task<string> CreateWorker(CreateWorkerVM vm);
        Task UpdateWorker(UpdateWorkerVM vm);
    }
}
