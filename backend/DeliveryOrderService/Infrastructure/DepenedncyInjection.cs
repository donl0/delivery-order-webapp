using Application.Interfaces;
using Infrastructure.Db;
using Infrastructure.Interfaces;
using Infrastructure.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure
{
    public static class DepenedncyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            var connectionString = configuration["DbConnection"];

            services.AddDbContext<IDbContext, OrderDbContext>(options =>
            {
                options.UseNpgsql(connectionString);
            });

            services.AddTransient<IOrderService, OrderService>();

            return services;
        }
    }
}
