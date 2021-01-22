using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Bk.Common.ViewModels;
using JPProject.Sso.AspNetIdentity.Models;
using JPProject.Sso.AspNetIdentity.Models.Identity;
using States = JPProject.Sso.AspNetIdentity.Models.States;

namespace Bk.Application.Commands.Users.ViewModel
{
    public class CreateUser : IBaseViewModel
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
    public class UpdateUser : IBaseViewModel
    {
        [Required]
        public Guid Id { get; set; }
        [Required]
        public Guid BusinessId { get; set; }
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
    public class AssignUserRoles : IBaseViewModel
    {
        [Required]
        public Guid Id { get; set; }
        [Required]
        public Guid BusinessId { get; set; }
        [Required]
        public List<string> Roles { get; set; } = new List<string>();
    }
}
