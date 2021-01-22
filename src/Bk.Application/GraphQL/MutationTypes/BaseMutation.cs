using System;
using System.Linq;
using System.Threading.Tasks;
using Bk.Common.StringUtils;

namespace Bk.Application.GraphQL.MutationTypes
{
    public class BaseMutation
    {
        protected string Ok(string value = null)
            => value.IsNullOrEmpty() ? "200" : value;
        protected Task<string> OkResult(string value = null)
            => Task.FromResult(value.IsNullOrEmpty() ? "200" : value);
        protected string Ok(Guid value)
            => value.ToString();
        protected Task<string> OkResult(Guid value)
            => Task.FromResult(value.ToString());
    }
}
