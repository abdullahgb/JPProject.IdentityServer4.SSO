using System;
using System.IO;
using System.Text;
using Jp.UI.SSO.Util;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;

namespace Jp.UI.SSO.Controllers
{
    public class SpaController : ControllerBase
    {
        private readonly IMemoryCache _memoryCache;
        private readonly IServiceProvider _serviceProvider;
        public SpaController(IMemoryCache memoryCache, IServiceProvider serviceProvider)
        {
            _memoryCache = memoryCache;
            _serviceProvider = serviceProvider;
        }
        [HttpGet("{*url}", Order = int.MaxValue)]
        public IActionResult NoPath()
        {
            if (_memoryCache.TryGetValue("admin", out byte[] obj))
            {
                return File(obj, "text/html");
            }

            var webHostEnvironment = _serviceProvider.Get<IWebHostEnvironment>();
            var configuration = _serviceProvider.Get<IConfiguration>();
            var file = System.IO.File.ReadAllText(Path.Combine(webHostEnvironment.WebRootPath,"index.html"));
            file = file.Replace("window.__env.apiUrl = '';",
                @$"window.__env.apiUrl = '{configuration.GetSection("ApplicationSettings:ResourceServerURL").Value}';");
            var bytes = Encoding.ASCII.GetBytes(file);
            _memoryCache.Set("admin", bytes);

            return File(bytes, "text/html");
        }
            
    }
}
