using System;
using System.Linq;
using Bk.Application.Common;
using Bk.Application.GraphQL.MutationTypes;
using Bk.Application.GraphQL.QueryTypes;
using Bk.Common.ArrayUtils;
using Bk.Common.GraphQL;
using HotChocolate.AspNetCore.Voyager;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;

namespace Bk.Application.GraphQL
{
    public static class GraphQlServiceExtension
    {
        public static string Path { get; private set; }
        // ReSharper disable once InconsistentNaming
        public static IServiceCollection RegisterGraphQL(this IServiceCollection services, Type[] types, string path = "/graphql")
        {
            Path = path;
            var graphqlServer = services
                .AddGraphQLServer().BindRuntimeType<Guid, GuidTypeConverter>()
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
                        {
                            ctx.User = authenticateResult.Principal;
                            builder.SetProperty("session", new OAuthSession(ctx.User));
                        }
                            
                    }
                })
                .AddQueryType<Query>()
                .IgnoreRootTypes()
                .AddMutationType<Mutation>();
            types
                .Where(type => typeof(IGraphQLType).IsAssignableFrom(type) && !type.IsInterface)
                .ForEach(type => graphqlServer.AddType(type));
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
