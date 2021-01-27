﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Bk.Auth.Events;
using Bk.Auth.Events.Business;
using Bk.Common.Claims;
using Bk.Common.EventBus;
using Bk.Common.Roles;
using IdentityModel;
using IdentityServer4.Extensions;
using IdentityServer4.Services;
using IdentityServer4.Stores;
using Jp.Database;
using Jp.Database.Context;
using Jp.Database.Identity;
using Jp.UI.SSO.Models;
using Jp.UI.SSO.Util;
using JPProject.Sso.AspNetIdentity.Models;
using JPProject.Sso.AspNetIdentity.Models.Identity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MultiTenancyServer;

namespace Jp.UI.SSO.Controllers.Tenants
{
    public class TenantsController : Controller
    {
        private readonly SsoContext _context;
        private readonly IIdentityServerInteractionService _interaction;
        private readonly IClientStore _clientStore;
        private readonly TenantManager<Tenant> _tenantManager;
        private readonly IdentityUserManager _userManager;
        private readonly IEventBus _eventBus;

        public TenantsController(SsoContext context, IIdentityServerInteractionService interaction,
            IClientStore clientStore, TenantManager<Tenant> tenantManager, IdentityUserManager userManager,IEventBus eventBus)
        {
            _context = context;
            _interaction = interaction;
            _clientStore = clientStore;
            _tenantManager = tenantManager;
            _userManager = userManager;
            _eventBus = eventBus;
        }
        public async Task<IActionResult> Index(string returnUrl = "")
        {
            var vm  = new TenantViewModel();
            var context = await _interaction.GetAuthorizationContextAsync(returnUrl);
            if (context?.ClientId != null)
            {
                var client = await _clientStore.FindEnabledClientByIdAsync(context.ClientId);
                if (client != null)
                {
                    vm.ClientLogo = client.LogoUri;
                }
            }
            var sub = User.GetSubjectId();
            var tenants = await (from tenant in _context.Tenants
                join userRole in _context.UserRoles on tenant.Id equals userRole.TenantId
                where userRole.UserId == sub
                select tenant).Distinct().ToListAsync();
            var count = tenants.Count;
            if (count < 1) return NotFound("No Tenant Found");
            //if (tenants.Count == 1)
            //{
            //    var tenant = tenants.FirstOrDefault();
            //    return await Select(Guid.Parse(tenant!.Id),  tenant.CanonicalName, returnUrl);
            //}
            ViewBag.referer = Request.Headers["Referer"].ToString();
            vm.Tenants = tenants;
            vm.ReturnUrl = returnUrl;
            return View(vm);
        }
        [HttpPost]
        public async Task<IActionResult> Select(Guid id, string name, string returnUrl)
        {
            var claims = new List<Claim>(HttpContext.User.Claims)
            {
                new Claim(OpenIdClaims.TenantId, id.ToString()), new Claim("tname", name)
            };
            await HttpContext.SignInAsync(User.Claims.Single(r => r.Type == "sub").Value, claims.ToArray());
            return Redirect(returnUrl);
        }

        [HttpGet]
        public async Task<IActionResult> Onboarding(string returnUrl = "")
        {
            if (await CheckBusinessAlreadyCreatedByUser(User.GetSubjectId()))
            {
                return BadRequest("Onboarding Already Completed");
            }
            return View(new RegisterTenantViewModel{ReturnUrl = returnUrl});
        }

        [HttpPost]
        public async Task<IActionResult> Onboarding(RegisterTenantViewModel vm)
        {
            if (!ModelState.IsValid)
            {
                // something went wrong, show form with error
                return View();
            }

           
            if (await _tenantManager.Tenants.AnyAsync(x =>
                x.CanonicalName.Trim().ToLower().Equals(vm.Name.Trim().ToLower())))
            {
                ModelState.AddModelError("Conflict","Business name already exist");
                return View();
            }
            var ownerId = User.GetSubjectId();
            var providerClaim = await _context.UserClaims
                .Where(x => x.UserId == ownerId && x.ClaimType == CustomClaimTypes.ProviderTenantId)
                .Select(x=> x.ClaimValue)
                .FirstOrDefaultAsync();
            // Create new tenant
            var newTenant = new Tenant(vm.Name,vm.Name,vm.Country,vm.Currency, providerClaim);
            await _tenantManager.CreateAsync(newTenant);

            // Add Owner role to user
            var user =  await _userManager.FindByIdAsync(ownerId);
            var roles = new[]
            {
                ApplicationRoles.Owner,
                ApplicationRoles.Finance.Admin,
                ApplicationRoles.Hr.Admin,
                ApplicationRoles.TimeTracking.Admin,
                ApplicationRoles.TrackingAgent.Admin
            };
           
            await _userManager.AddToRolesAsync(user, newTenant, roles);
            //user.CompleteUserProfile();
            user.CompleteTenantProfile();
            await _userManager.UpdateAsync(user);
            //await transaction.CommitAsync();
            
            var @event = new BusinessCreated(newTenant.Id, newTenant.CanonicalName, ownerId, user.UserName, user.Email);
            // Publish event so other services can be notified
            await _eventBus.Publish(@event);
            // Sig-in with new tenant claims
            var newClaims = new List<Claim>(roles.Select(role =>
                new Claim(JwtClaimTypes.Role, role)))
            {
                new Claim(OpenIdClaims.TenantId, newTenant.Id),
                new Claim("tname", newTenant.CanonicalName)
            };
            var claims = User.Claims.Where(x => x.Type != CustomClaimTypes.TenantProfileInComplete).Concat(newClaims).ToArray();
            await HttpContext.SignInAsync(ownerId, claims);
            return IEnumerableExtensions.IsNullOrEmpty(vm.ReturnUrl) ?
                Redirect("~/Grants") :
                Redirect(vm.ReturnUrl);
        }

        private Task<bool> CheckBusinessAlreadyCreatedByUser(string userId)
            => (from userRole in _context.UserRoles
                join tenant in _context.Tenants on userRole.TenantId equals tenant.Id
                where userRole.UserId == userId
                select tenant).AnyAsync();

    }
}
