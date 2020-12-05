using System.ComponentModel.DataAnnotations;
using JPProject.Sso.Application.ViewModels.UserViewModels;

namespace Jp.UI.SSO.Models
{
    public class RegisterViewModel:RegisterUserViewModel
    {
        [Required]
        [Display(Name = "Accept Agreement")]
        [Range(typeof(bool), "true", "true", ErrorMessage = "Accept Agreement must be checked.")]
        public bool Accept { get; set; }
    }
}
