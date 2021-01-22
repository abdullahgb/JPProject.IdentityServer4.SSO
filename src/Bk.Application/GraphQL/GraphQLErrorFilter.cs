using System;
using Bk.Common.Environments;
using Bk.Common.Exceptions;
using Bk.Common.ObjectUtils;
using HotChocolate;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace Bk.Application.GraphQL
{
    public class GraphQlErrorFilter : IErrorFilter
    {
        private readonly ILogger<GraphQlErrorFilter> _logger;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private const string ServerErrorMessage = "Internal Server Error";
        private const int ServerErrorCode = 500;

        public GraphQlErrorFilter(ILogger<GraphQlErrorFilter> logger, IHttpContextAccessor httpContextAccessor)
        {
            _logger = logger;
            _httpContextAccessor = httpContextAccessor;
        }

        public IError OnError(IError error)
        {
            HandleException(error);
            return error;
        }
        private void HandleException(IError error)
        {
            error.SetExtension("TraceId", _httpContextAccessor?.HttpContext?.TraceIdentifier);
            error.SetExtension("RequestId", _httpContextAccessor?.HttpContext?.Request.Headers["CorrelationId"].ToString());
            var code = error.Exception switch
            {
                QuickException qxException => HandleException(error, qxException),
                ValidationException validationException => HandleException(error,
                    new UnprocessableException(validationException.Message)),
                _ => HandleException(error, error.Exception)
            };

            _logger.LogError(error.Exception, code.Item2, error, code);
        }

        private static (int, string) HandleException(IError error, QuickException exception)
        {
            error.WithCode(exception.Code.ToString());
            error.WithMessage(exception.Description);
            return (exception.Code, exception.Description);
        }
        private static (int, string) HandleException(IError error, Exception exception)
        {
            string message = ServerErrorMessage;
            if (ApplicationEnvironment.IsProd)
            {
                error.WithCode(ServerErrorCode.ToString());
                error.WithMessage(ServerErrorMessage);
            }
            else
            {
                if (!exception.IsObjNull())
                {
                    error.WithMessage(exception.Message);
                    message = exception.Message;
                }

                error.WithCode(ServerErrorCode.ToString());
            }

            return (500, message);
        }
    }
}
