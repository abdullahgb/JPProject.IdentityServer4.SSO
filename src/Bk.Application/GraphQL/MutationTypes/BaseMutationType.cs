using System;
using System.Threading.Tasks;
using Bk.Application.GraphQL.MutationTypes.Types;
using Bk.Common.GraphQL;
using Bk.Common.StringUtils;
using HotChocolate.Types;

namespace Bk.Application.GraphQL.MutationTypes
{
    // ReSharper disable once ClassNeverInstantiated.Global
    public class Mutation { }
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
    public class MutationConfiguration
        : ObjectType<Mutation>,IGraphQLType
    {
        protected override void Configure(IObjectTypeDescriptor<Mutation> descriptor)
        {
            descriptor.Field("session").Resolve(x => new SessionMutationType());
            descriptor.Field("businesses").Resolve(x => new BusinessMutationType());
            descriptor.Field("users").Resolve(x => new UserMutationType());
        }
    }
}
