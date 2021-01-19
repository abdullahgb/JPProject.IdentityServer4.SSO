using Microsoft.AspNetCore.Http;

namespace Bk.Application
{
    // ReSharper disable once ClassNeverInstantiated.Global
    public class Query
    {
        public string Version { get; set; } = "1.0";
    }

    //[ExtendObjectType(Name = nameof(Query))]
    public class BaseQueryType : SessionType
    {
        public BaseQueryType(IHttpContextAccessor httpContextAccessor):base(httpContextAccessor) { }
    }
}
