using System;
using System.Threading.Tasks;
using Application.Base.Businesses.ViewModel;
using Bk.Common.Commands;

namespace Application.Base.Businesses.Command
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
