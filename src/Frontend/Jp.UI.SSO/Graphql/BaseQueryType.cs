using System;
using HotChocolate.Types;
using Jp.UI.SSO.Graphql.SessionExtension;
using Microsoft.AspNetCore.Http;

namespace Jp.UI.SSO.Graphql
{
    // ReSharper disable once ClassNeverInstantiated.Global
    public class Query
    {
        public string Version { get; set; } = "1.0";
    }

    //[ExtendObjectType(Name = nameof(Query))]
    public class BaseQueryType
    {
        public string Version { get; set; } = "1.0";
        protected readonly IHttpContextAccessor HttpContextAccessor;
        private OAuthSession _session;

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
        public BaseQueryType(IHttpContextAccessor httpContextAccessor)
        {
            HttpContextAccessor = httpContextAccessor;
        }
        protected BaseQueryType() { }

    }
}
