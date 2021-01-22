using System;
using System.ComponentModel.DataAnnotations;
using Bk.Common.ViewModels;
using JPProject.Sso.AspNetIdentity.Models;
using JPProject.Sso.AspNetIdentity.Models.Identity;

namespace Bk.Application.Commands.Workers.ViewModel
{
	public class WorkerVm : AuditViewModel, IBaseViewModel
	{
		public virtual Guid Id { get; set; }
		public virtual string FirstName { get; set; }
		public virtual string LastName { get; set; }
		public virtual string FullName { get; set; }
		public virtual string Email { get; set; }
		public virtual Gender Gender { get; set; }
		public virtual string Pic { get; set; }
		public virtual States State { get; set; }
		
	}
	public class CreateWorkerVM : WorkerVm
	{
		[Required]
		[StringLength((int)QuickValidator.User.FirstNameMaxLength, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = (int)QuickValidator.User.FirstNameMinLength)]
		public override string FirstName { get; set; }
		[Required]
		[StringLength((int)QuickValidator.User.LastNameMaxLength, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = (int)QuickValidator.User.LastNameMinLength)]
		public override string LastName { get; set; }
		[EmailAddress]
		[Required]
		[DataType(DataType.EmailAddress)]
		public override string Email { get; set; }
		[Required]
		public override Gender Gender { get; set; }
		[Required]
		public Guid AdminId { get; set; }
		[Required]
		public override States State { get; set; }
        [Required]
        public string BusinessId { get; set; }
    }
	public class UpdateWorkerVM : WorkerVm
	{
		[Required]
		public override Guid Id { get; set; }
		[Required]
		[StringLength((int)QuickValidator.User.FirstNameMaxLength, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = (int)QuickValidator.User.FirstNameMinLength)]
		public override string FirstName { get; set; }
		[Required]
		[StringLength((int)QuickValidator.User.LastNameMaxLength, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = (int)QuickValidator.User.LastNameMinLength)]
		public override string LastName { get; set; }
		[EmailAddress]
		[Required]
		[StringLength((int)QuickValidator.User.EmailMaxLength, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = (int)QuickValidator.User.EmailMinLength)]
		public override string Email { get; set; }
		[Required]
		public override Gender Gender { get; set; }
		[Required]
		public Guid AdminId { get; set; }
		[Required]
		public override States State { get; set; }
	}
}
