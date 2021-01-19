using Jp.Database.Context;
using Microsoft.AspNetCore.Http;

namespace Bk.Application.QueryTypes
{
    public class IndustryQueryType:BaseQueryType
    {
        private readonly SsoQueryContext _context;

        public IndustryQueryType(IHttpContextAccessor httpContextAccessor, SsoQueryContext context)
            : base(httpContextAccessor)
        {
            _context = context;
        }

        //[UseFiltering]
        //[UseProjection]
        //public IQueryable<IndustryVm> Industries(IResolverContext context)
        //{
        //    return _industryQueryService.GetIndustries();
        //}
    }
}
