using System.Linq;
using Bk.Common.ArrayUtils;
using HotChocolate.AspNetCore;
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
        public static string Path { get; private set; }
        // ReSharper disable once InconsistentNaming
        public static IServiceCollection AddCustomGraphQL(this IServiceCollection services, string path = "/graphql")
        {
            Path = path;
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
                    var bearerAuth = ctx.Request.Headers["Authorization"].FirstOrDefault()?.StartsWith("Bearer ") ?? false;
                    if (bearerAuth)
                    {
                        var authenticateResult =
                            await ctx.AuthenticateAsync("Bearer");
                        if (authenticateResult.Succeeded)
                            ctx.User = authenticateResult.Principal;
                    }
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
                QueryPath = Path
            });
        }
        public static void MapCustomGraphql(this IEndpointRouteBuilder endpoints)
        {
            endpoints.MapGraphQL(Path);
        }
    }
}
