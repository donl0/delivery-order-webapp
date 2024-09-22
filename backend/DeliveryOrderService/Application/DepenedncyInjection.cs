using Application.CQRS.Orders.Queries.GetAllOrders;
using Application.Interfaces;
using Application.Mapper;
using Microsoft.Extensions.DependencyInjection;

namespace Application
{
    public static class DepenedncyInjection
    {
        public static IServiceCollection AddApplication(this IServiceCollection services) {
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(GetAllOrdersQuery).Assembly));
            services.AddTransient<IMapper, OrderDtoMapper>();

            return services;
        }

    }
}
