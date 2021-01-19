using Microsoft.AspNetCore.Http;

namespace Bk.Application
{
    // ReSharper disable once ClassNeverInstantiated.Global
    public class Mutation { }
    public class BaseMutationType : SessionType
    {
        public BaseMutationType(IHttpContextAccessor httpContextAccessor) : base(httpContextAccessor) { }
    }
}
