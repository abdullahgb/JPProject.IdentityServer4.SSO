using System.ComponentModel.DataAnnotations;

namespace Jp.UI.SSO.Models
{
    public class RegisterTenantViewModel
    {
        [Required]
        public string Name { get; set; }
        public int Type { get; set; }
        public string Country { get; set; }
        public string Currency { get; set; }
        public string ReturnUrl { get; set; }
    }
}
