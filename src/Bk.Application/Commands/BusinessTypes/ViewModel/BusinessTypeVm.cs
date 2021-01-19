using JPProject.Sso.AspNetIdentity.Models;

namespace Application.Base.BusinessTypes.ViewModel
{
    public class BusinessTypeVm
    {
	    public virtual byte Id { get; private set; }
	    public virtual string Name { get; private set; }
	    public virtual string Code { get; private set; }
	    public virtual BusinessCategories Category { get; private set; }
    }
}
