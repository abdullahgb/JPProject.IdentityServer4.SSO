using HotChocolate.Types;
using Jp.UI.SSO.Graphql.Types;

namespace Jp.UI.SSO.Graphql.SessionExtension
{
    public static class BaseSessionConfiguration
    {
        public static IObjectTypeDescriptor<Session> ConfigureAuthSession(
            this IObjectTypeDescriptor<Session> descriptor)
        {
            
            descriptor.Field<BusinessQueryType>(resolver => resolver.GetOwnedBusinesses(default))
                .Name("ownedBusinesses");
            descriptor.Field<BusinessQueryType>(resolver => resolver.GetAssociatedBusinesses(default))
                .Name("associatedBusinesses");

            descriptor.Field<WorkerQueryType>(resolver => resolver.GetPaginatedWorkers(default))
                .Name("paginatedWorkers");

            return descriptor;
        }
    }
}
