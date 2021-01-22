using System;
using System.Threading.Tasks;
using Bk.Application.Commands.Businesses.ViewModel;
using Bk.Common.Commands;

namespace Bk.Application.Commands.Businesses.Command
{
    public interface IBusinessCommandService: ICommandService
    {
        Task<string> CreateBusiness(CreateBusinessVm vm);
       Task Update(UpdateBusinessVm vm);
       Task UpdateLogo(UpdateBusinessLogoVm vm);
        Task Archive(Guid adminId, Guid businessId);
        Task Restore(Guid adminId, Guid businessId);

    }
}
