using System;
using System.Threading.Tasks;
using Application.Base.Workers.ViewModel;
using Application.Common;
using Bk.Common.Commands;

namespace Application.Base.Workers.Command
{
    public interface IWorkerCommandService:ICommandService
    {
        Task<string> CreateWorker(CreateWorkerVM vm);
        Task UpdateWorker(UpdateWorkerVM vm);
    }
}
