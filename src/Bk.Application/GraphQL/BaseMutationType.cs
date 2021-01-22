using Bk.Application.GraphQL.MutationTypes;
using Bk.Common.GraphQL;
using HotChocolate.Types;

namespace Bk.Application.GraphQL
{
    // ReSharper disable once ClassNeverInstantiated.Global
    public class Mutation { }
    public class MutationConfiguration
        : ObjectType<Mutation>,IGraphQLType
    {
        protected override void Configure(IObjectTypeDescriptor<Mutation> descriptor)
        {
            descriptor.Field("businesses").Resolve(x => new BusinessMutationType());
            descriptor.Field("users").Resolve(x => new UserMutationType());
        }
    }
}
