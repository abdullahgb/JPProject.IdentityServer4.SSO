using System.ComponentModel.DataAnnotations;

namespace Jp.UI.SSO.Models
{
    public class RegisterTenantViewModel
    {
        [Required]
        public string Name { get; set; }
        public int Type { get; set; }
        [Required]
        public string Country { get; set; }
        [Required]
        public string Currency { get; set; }
        public string ReturnUrl { get; set; }
    }
}
