using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using IdentityServer4;
using IdentityServer4.Extensions;
using Jp.Database.Context;
using Jp.UI.SSO.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Jp.UI.SSO.Controllers.Tenants
{
    public class TenantsController : Controller
    {
        private readonly SsoContext _context;

        public TenantsController(SsoContext context)
        {
            _context = context;
        }
        public async Task<IActionResult> Index(string returnUrl = "")
        {
            var userRoles = _context.UserRoles.ToList();
            var sub = User.GetSubjectId();
            var tenants = await (from tenant in _context.Tenants
                join userRole in _context.UserRoles on tenant.Id equals userRole.TenantId
                where userRole.UserId == sub
                select tenant).Distinct().ToListAsync();
            var count = tenants.Count;
            if (count < 1) return NotFound("No Tenant Found");
            if (tenants.Count == 1)
            {
                var tenant = tenants.FirstOrDefault();
                return await Select(Guid.Parse(tenant!.Id),  tenant.CanonicalName, returnUrl);
            }
            ViewBag.referer = Request.Headers["Referer"].ToString();
            return View(new TenantViewModel
            {
                Tenants = tenants,
                ReturnUrl = returnUrl
            });
        }
        [HttpPost]
        public async Task<IActionResult> Select(Guid id, string name, string returnUrl)
        {
            var identityUser = new IdentityServerUser(User.Claims.Single(r => r.Type == "sub").Value);
            identityUser.AdditionalClaims.Add(new Claim("tid", id.ToString()));
            identityUser.AdditionalClaims.Add(new Claim("tname", name));
            await HttpContext.SignInAsync(identityUser);
            return Redirect(returnUrl);
        }
        
    }
}
