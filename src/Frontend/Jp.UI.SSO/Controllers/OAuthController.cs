using System.Linq;
using System.Threading.Tasks;
using Jp.Api.Management.Controllers;
using Jp.UI.SSO.Models;
using JPProject.Sso.Application.ViewModels.UserViewModels;
using Microsoft.AspNetCore.Mvc;

namespace Jp.UI.SSO.Controllers
{
    [Route("oauth")]
    public class OAuthController : Controller
    {
        private readonly SignUpController _signUpController;

        public OAuthController(SignUpController signUpController)
        {
            _signUpController = signUpController;
        }
        /// <summary>
        /// Route to Sign-up
        /// </summary>
        [HttpGet("register")]
        public async Task<IActionResult> Register() =>
            View("Signup.cshtml", new RegisterViewModel());
        /// <summary>
        /// Route to Sign-up
        /// </summary>
        [HttpPost("register")]
        public async Task<ActionResult<RegisterUserViewModel>> Register(RegisterViewModel vm)
        {
            var samePage = View("Signup.cshtml", vm);
            if (!ModelState.IsValid)
            {
                // something went wrong, show form with error
                return samePage;
            }
            var response =  await _signUpController.Register(vm);
            var result = response.Result;
            if (result is OkObjectResult || result is CreatedAtActionResult)
            {
                return Redirect("~/");
            }
            if (!(result is BadRequestObjectResult bad))
            {
                ModelState.AddModelError("Error", "Error Occured while executing your request");
                return samePage;
            }

            var validation = bad.Value as ValidationProblemDetails;
            foreach (var (key, value) in validation!.Errors)
            {
                ModelState.AddModelError(key, value.FirstOrDefault());
            }   
            return samePage;
        }
    }
}
