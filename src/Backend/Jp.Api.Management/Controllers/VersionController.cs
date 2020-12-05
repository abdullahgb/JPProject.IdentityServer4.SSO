using System.Dynamic;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Jp.Api.Management.Controllers
{
    [Route("version"), ApiController]
    public class VersionController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            dynamic dyn = new ExpandoObject();
            dyn.value = "Full";
            return JsonConvert.SerializeObject(dyn);
        }

    }
}
