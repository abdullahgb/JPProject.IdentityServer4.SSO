using Bk.Common.Environments;
using Bk.Common.ObjectUtils;
using HotChocolate;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace Bk.Application
{
    public class GraphQlErrorFilter: IErrorFilter
    {
        private readonly ILogger<GraphQlErrorFilter> _logger;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IWebHostEnvironment _hostEnvironment;

        public GraphQlErrorFilter(ILogger<GraphQlErrorFilter> logger, IHttpContextAccessor httpContextAccessor,IWebHostEnvironment hostEnvironment)
        {
            _logger = logger;
            _httpContextAccessor = httpContextAccessor;
            _hostEnvironment = hostEnvironment;
        }

        public IError OnError(IError error)
        {
            error = error.SetExtension("TraceId", _httpContextAccessor.HttpContext.TraceIdentifier);
            error = error.SetExtension("RequestId", _httpContextAccessor.HttpContext.Request.Headers["CorrelationId"].ToString());
            _logger.LogError(error.Exception, error.Message, error);
            if(_hostEnvironment.IsDev() && !error.Exception.IsObjNull()) throw error.Exception!;
            return error;
        }
    }
}
