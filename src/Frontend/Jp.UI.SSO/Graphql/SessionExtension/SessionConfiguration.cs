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
                .Name("businesses");

            descriptor.Field<WorkerQueryType>(resolver => resolver.GetPaginatedWorkers())
                .Name("paginatedWorkers");

            return descriptor;
        }
    }
}
