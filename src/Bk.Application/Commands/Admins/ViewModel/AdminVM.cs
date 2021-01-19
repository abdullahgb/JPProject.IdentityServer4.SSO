using System;
using System.ComponentModel.DataAnnotations;
using Bk.Common.ViewModels;
using JPProject.Sso.AspNetIdentity.Models;
using JPProject.Sso.AspNetIdentity.Models.Identity;
using States = JPProject.Sso.AspNetIdentity.Models.States;

namespace Application.Base.Admins.ViewModel
{
	public class CreateAdminVm : IBaseViewModel
    {
        [Required]
        [StringLength((int)QuickValidator.User.FirstNameMaxLength, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = (int)QuickValidator.User.FirstNameMinLength)]
        public string FirstName { get; set; }
        [Required]
        [StringLength((int)QuickValidator.User.LastNameMaxLength, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = (int)QuickValidator.User.LastNameMinLength)]
        public string LastName { get; set; }
        [EmailAddress]
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email{get; set;}
        [Required]
        public Gender Gender { get; set; }
        [Required]
        public States State { get; set; }
        public virtual string Pic { get; set; }
    }
    public class UpdateAdminVm : IBaseViewModel
    {
        [Required]
        public Guid Id { get; set; }
        [Required]
        [StringLength((int)QuickValidator.User.FirstNameMaxLength, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength =(int)QuickValidator.User.FirstNameMinLength)]
        public string FirstName { get; set; }
        [Required]
        [StringLength((int)QuickValidator.User.LastNameMaxLength, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = (int)QuickValidator.User.LastNameMinLength)]
        public string LastName { get; set; }
        [EmailAddress]
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [Required]
        public Gender Gender { get; set; }
        [Required]
        public States State { get; set; }
        public virtual string Pic { get; set; }
    }
}
