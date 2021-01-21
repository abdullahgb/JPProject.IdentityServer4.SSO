using Bk.Application.QueryTypes;
using Bk.Application.SessionExtension;
using HotChocolate;
using HotChocolate.Types;

namespace Bk.Application
{
    // ReSharper disable once ClassNeverInstantiated.Global
    public class Query { }

    public class Session
    {
        public string Version => "1.0";
    }
    public class UserQueryConfiguration
        : ObjectType<Query>
    {
        protected override void Configure(IObjectTypeDescriptor<Query> descriptor)
        {
            descriptor.Field("session").Resolve(x => new Session());
            descriptor.Field("businesses").Resolve(x => new BusinessQueryType());
            descriptor.Field("usersQuery").Resolve(x => new UserQueryType());
        }
    }
    public class GraphQLSession : GlobalStateAttribute
    {
        public GraphQLSession() : base("session")
        {
        }
    }
}
