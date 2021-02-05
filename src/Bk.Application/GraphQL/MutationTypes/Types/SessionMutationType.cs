using Bk.Application.GraphQL.QueryTypes.Types;
using Bk.Common.GraphQL;
using HotChocolate.Types;

namespace Bk.Application.GraphQL.MutationTypes.Types
{
    public class SessionMutationType
    {
        public string Version => "1.0";
    }
    public class SessionMutationTypeConfiguration
        : ObjectType<SessionMutationType>, IGraphQLType
    {
        protected override void Configure(IObjectTypeDescriptor<SessionMutationType> descriptor)
        {
            descriptor.Field("me").Resolve(x => new ProfileMutationType());
        }
    }
}
