using Bk.Application.GraphQL.QueryTypes;
using Bk.Common.GraphQL;
using HotChocolate;
using HotChocolate.Types;

namespace Bk.Application.GraphQL
{
    // ReSharper disable once ClassNeverInstantiated.Global
    public class Query { }

    public class Session
    {
        public string Version => "1.0";
    }
    public class QueryConfiguration
        : ObjectType<Query>,IGraphQLType
    {
        protected override void Configure(IObjectTypeDescriptor<Query> descriptor)
        {
            descriptor.Field("session").Resolve(x => new Session());
            descriptor.Field("businesses").Resolve(x => new BusinessQueryType());
            descriptor.Field("users").Resolve(x => new UserQueryType());
        }
    }
    public class GraphQLSession : GlobalStateAttribute
    {
        public GraphQLSession() : base("session")
        {
        }
    }
}
