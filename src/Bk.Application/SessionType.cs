using System;
using Bk.Application.SessionExtension;
using Microsoft.AspNetCore.Http;

namespace Bk.Application
{
    public class SessionType
    {
        public string Version { get; set; } = "1.0";
        protected readonly IHttpContextAccessor HttpContextAccessor;
        private OAuthSession _session;
        private HttpRequest _request;
        protected HttpRequest Request
        {
            get
            {
                if (_request != null) return _request;
                if (HttpContextAccessor == null) throw new Exception("HttpContext not passed to Query Type");
                _request = HttpContextAccessor.HttpContext.Request;
                return _request;
            }
        }
        protected OAuthSession Session
        {
            get
            {
                if (_session != null) return _session;
                if (HttpContextAccessor == null) throw new Exception("HttpContext not passed to Query Type");
                _session = new OAuthSession(HttpContextAccessor.HttpContext.User);
                return _session;
            }
        }
        public SessionType(IHttpContextAccessor httpContextAccessor)
        {
            HttpContextAccessor = httpContextAccessor;
        }
        protected SessionType() { }
    }
}
