using HotChocolate.Types;
using Jp.UI.SSO.Graphql.Types;

namespace Jp.UI.SSO.Graphql.SessionExtension
{
    public static class BaseSessionConfiguration
    {
        public static IObjectTypeDescriptor<Session> ConfigureAuthSession(
            this IObjectTypeDescriptor<Session> descriptor)
        {
            descriptor.Field<BusinessQueryType>(resolver => resolver.GetMyBusinesses(default))
                .Name("myBusinesses");
            descriptor.Field<BusinessQueryType>(resolver => resolver.GetAssociatedBusinesses(default))
                .Name("associatedBusinesses");

            descriptor.Field<WorkerQueryType>(resolver => resolver.GetPaginatedWorkers())
                .Name("paginatedWorkers");

            return descriptor;
        }
    }
}
