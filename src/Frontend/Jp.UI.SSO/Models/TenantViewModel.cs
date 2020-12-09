using System;
using System.Collections.Generic;
using JPProject.Sso.AspNetIdentity.Models.Identity;

namespace Jp.UI.SSO.Models
{
    public class TenantViewModel
    {
        public Guid TenantId { get; set; }
        public List<Tenant> Tenants { get; set; }
        public string ReturnUrl { get; set; }
        public string ClientLogo { get; set; }
    }
}
