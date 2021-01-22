using System;
using System.Linq;
using Bk.Application.GraphQL;
using Bk.Application.Managers;
using Bk.Common.ArrayUtils;
using Bk.Common.Commands;
using Bk.Common.Configurations;
using Bk.Common.EventBus;
using Bk.Common.Repositories;
using Bk.Rebus.EventBus;
using Bk.Rebus.EventBus.Configurations;
using Jp.Database.Context;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Bk.Application
{
    public static class BkApplicationServicesExtension
    {
        public static IServiceCollection RegisterBkApplicationServices(this IServiceCollection services,IConfiguration configuration)
        {
            var section = configuration.GetSection("AppSettings");
            services.Configure<BlobSettings>(section.GetSection("Blob"));
            services.Configure<AppSettings>(section);

            var types = typeof(Query).Assembly.GetTypes();

            services.RegisterEventBus(configuration);
            services.RegiserGraphQL(types);
            services.RegisterRepositories(types);
            services.RegisterCommands(types);
            services.AddScoped<IBlobStorageManager,BlobStorageManager>();
            return services;
        }

        public static void RegisterEventBus(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddRebusEventBus(new SqlServerBusConfig(configuration.GetValue<string>("EventBusConfiguration:ConnectionString"), "AuthQueue"));
            services.AddScoped<IEventBus, EventBus>();
        }
        public static void RegisterCommands(this IServiceCollection services, Type[] types)
        {
            types
                .Where(type => typeof(ICommandService).IsAssignableFrom(type) && !type.IsInterface)
                .ForEach(type => services.AddScoped(type.GetInterface($"I{type.Name}")!, type));
        }
        public static void RegisterRepositories(this IServiceCollection services, Type[] types)
        {
            types
                .Where(type => typeof(IRepository).IsAssignableFrom(type) && !type.IsInterface)
                .ForEach(type => services.AddScoped(type.GetInterface($"I{type.Name}")!, type));
        }
    }
}
