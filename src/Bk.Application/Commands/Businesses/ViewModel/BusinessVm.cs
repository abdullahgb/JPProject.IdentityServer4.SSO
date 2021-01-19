using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Bk.Common.ViewModels;
using JPProject.Sso.AspNetIdentity.Models;
using Validation = JPProject.Sso.AspNetIdentity.Models.QuickValidator.Business;

namespace Application.Base.Businesses.ViewModel
{
	public class BusinessVm : IBaseViewModel
	{
		public virtual Guid Id { get; set; }
		public virtual Guid OwnerId { get; set; }
        public virtual States State { get; set; }
		public virtual JPProject.Sso.AspNetIdentity.Models.TenantTypes TenantTypeId { get; set; }
		public virtual JPProject.Sso.AspNetIdentity.Models.Industries IndustryId { get; set; }
		public virtual string Name { get; set; }
		public virtual string Country { get; set; }
		public virtual string Currency { get; set; }
        public virtual string Phone { get; set; }
		public virtual string Fax { get; set; }
		public virtual string Mobile { get; set; }
		public virtual string TollFree { get; set; }
		public virtual string Website { get; set; }
		public virtual string Logo { get; set; }

    }
	public class CreateBusinessVm : BusinessVm
	{
		[Required(ErrorMessage = "Name is required")]
		[StringLength((int)Validation.NameMaxLength, ErrorMessage = "Business {0} must be at least {2} characters long.", MinimumLength = (int)Validation.NameMinLength)]
		public override string Name { get; set; }

		[Required(ErrorMessage = "Business Type is required")]
		public override JPProject.Sso.AspNetIdentity.Models.TenantTypes TenantTypeId { get; set; }

		[Required(ErrorMessage = "Country is required")]
		[MaxLength((int)Validation.CountryMaxLength, ErrorMessage = "Business {0} must not be at more than {2} characters long.")]
		public override string Country { get; set; }

		[Required(ErrorMessage = "Currency is required")]
		[MaxLength((int)Validation.CurrencyMaxLength, ErrorMessage = "Business {0} must not be at more than {2} characters long.")]
		public override string Currency { get; set; }

		[Required(ErrorMessage = "Organization Type is required")]
		public override JPProject.Sso.AspNetIdentity.Models.Industries IndustryId { get; set; }
	}
	public class UpdateBusinessVm : BusinessVm
	{
		[Required]
		public override Guid OwnerId { get; set; }

		[Required]
		public override Guid Id { get; set; }

		[Required(ErrorMessage = "Name is required")]
		[StringLength((int)Validation.NameMaxLength, ErrorMessage = "Business {0} must be at least {2} characters long.", MinimumLength = (int)Validation.NameMinLength)]
		public override string Name { get; set; }

		[Required]
		[MaxLength((int)Validation.PhoneMaxLength, ErrorMessage = "Business Phone must not be more than {2} characters long.")]
		[MinLength((int)Validation.PhoneMinLength, ErrorMessage = "Business Phone must be at least {2} characters long.")]
		public override string Phone { get; set; }

		[MaxLength((int)Validation.PhoneMaxLength, ErrorMessage = "Business Mobile must not be more than {2} characters long.")]
		[MinLength((int)Validation.PhoneMinLength, ErrorMessage = "Business Mobile must be at least {2} characters long.")]
		public override string Mobile { get; set; }

		[MaxLength((int)Validation.PhoneMaxLength, ErrorMessage = "Business Fax must not be more than {2} characters long.")]
		[MinLength((int)Validation.PhoneMinLength, ErrorMessage = "Business Fax must be at least {2} characters long.")]
		public override string Fax { get; set; }

		[MaxLength((int)Validation.PhoneMaxLength, ErrorMessage = "Business Toll Free must not be more than {2} characters long.")]
		[MinLength((int)Validation.PhoneMinLength, ErrorMessage = "Business Toll Free must be at least {2} characters long.")]
		public override string TollFree { get; set; }

		[MaxLength((int)Validation.WebsiteMaxLength, ErrorMessage = "Business {0} must not be at more than {2} characters long.")]
		public override string Website { get; set; }

		[MaxLength((int)Validation.LogoMaxLength, ErrorMessage = "Business {0} must not be more than {2} characters long.")]
		public override string Logo { get; set; }

		public FileViewModel File { get; set; }
	}

	public class UpdateBusinessLogoVm : BusinessVm
	{
		[Required(ErrorMessage = "ContactId is required")]
		public override Guid Id { get; set; }

		[Required]
		public override Guid OwnerId { get; set; }

		[Required(ErrorMessage = "File is required")]
		public FileViewModel File { get; set; }
	}
}
