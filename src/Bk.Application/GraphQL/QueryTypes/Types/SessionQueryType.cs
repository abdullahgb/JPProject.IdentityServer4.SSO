﻿using Bk.Common.GraphQL;
using HotChocolate.Types;

namespace Bk.Application.GraphQL.QueryTypes.Types
{
    public class SessionQueryType { }
    public class QueryConfiguration
        : ObjectType<SessionQueryType>, IGraphQLType
    {
        protected override void Configure(IObjectTypeDescriptor<SessionQueryType> descriptor)
        {
            descriptor.Field<BusinessQueryType>(resolver =>
                resolver.GetAssociatedBusinesses(default, default));
        }
    }
}
