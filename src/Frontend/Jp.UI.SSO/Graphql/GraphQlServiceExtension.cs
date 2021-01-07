using System;
using Bk.Common.ArrayUtils;
using Jp.UI.SSO.Graphql.SessionExtension;
using Jp.UI.SSO.Graphql.Types;
using Microsoft.Extensions.DependencyInjection;

namespace Jp.UI.SSO.Graphql
{
    public static class GraphQlServiceExtension
    {
      
       
        // ReSharper disable once InconsistentNaming
        public static IServiceCollection AddCustomGraphQL(this IServiceCollection services)
        {
            var types = new[] {typeof(BusinessQueryType), typeof(WorkerQueryType),};
            var graphqlServer = services
                .AddGraphQLServer()
                .AddType<SessionRootQuery>()
                .AddType<SessionConfiguration>()
                .AddType<Session>()
                .AddFiltering()
                .AddSorting()
                .AddProjections()
                .AddAuthorizeDirectiveType()
                .AddQueryType<Query>();
            types.ForEach(x=> graphqlServer.AddType(x));
            services.AddErrorFilter<GraphQlErrorFilter>();
            return services;
        }
    }
}
