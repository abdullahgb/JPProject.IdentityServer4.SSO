using Bk.Common.ArrayUtils;
using HotChocolate.AspNetCore.Voyager;
using Jp.UI.SSO.Graphql.SessionExtension;
using Jp.UI.SSO.Graphql.Types;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;

namespace Jp.UI.SSO.Graphql
{
    public static class GraphQlServiceExtension
    {
        private static string _path;
        // ReSharper disable once InconsistentNaming
        public static IServiceCollection AddCustomGraphQL(this IServiceCollection services, string path = "/graphql")
        {
            _path = path;
            var types = new[] {typeof(BusinessQueryType), typeof(WorkerQueryType),};
            var graphqlServer = services
                .AddGraphQLServer()
                .AddType<SessionRootQuery>()
                .AddType<SessionConfiguration>()
                .AddType<Session>()
                .AddFiltering()
                .AddSorting()
                .AddProjections()
                .AddAuthorization()
                .AddHttpRequestInterceptor(async (ctx, executor, builder, token) =>
                {
                    var authenticateResult =
                        await ctx.AuthenticateAsync("Bearer");
                    if (authenticateResult.Succeeded)
                        ctx.User = authenticateResult.Principal;
                })
                .AddQueryType<Query>();
            types.ForEach(x=> graphqlServer.AddType(x));
            services.AddErrorFilter<GraphQlErrorFilter>();
            return services;
        }

        // ReSharper disable once InconsistentNaming
        public static void UseCustomVoyager(this IApplicationBuilder app)
        {
            app.UseVoyager(new VoyagerOptions
            {
                Path = "/voyager",
                QueryPath = _path
            });
        }
        public static void MapCustomGraphql(this IEndpointRouteBuilder endpoints)
        {
            endpoints.MapGraphQL(_path);
        }
    }
}
