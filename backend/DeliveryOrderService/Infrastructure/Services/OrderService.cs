using Application.DTOs;
using Application.Interfaces;
using Domain.Models;
using Infrastructure.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Services
{
    public class OrderService : IOrderService
    {
        private readonly IDbContext _orderContext;

        public OrderService(IDbContext orderContext)
        {
            _orderContext = orderContext;
        }

        public async Task<long> CreateOrderAsync(OrderRequestDTO order)
        {
            Order createObject = new Order
            {
                SenderAddress = order.SenderAddress,
                SenderCity = order.SenderCity,
                RecipientAddress = order.RecipientAddress,
                RecipientCity = order.RecipientCity,
                CargoPickupDate = order.CargoPickupDate,
                CargoWeight = order.CargoWeight
            };

            await _orderContext.Orders.AddAsync(createObject);

            return createObject.Id;
        }

        public async Task<IEnumerable<Order>> TakeAllOrdersAsync()
        {
            IEnumerable<Order> orders = await _orderContext.Orders.ToListAsync();

            return orders;
        }

        public async Task<Order> TakeOrderAsync(long id)
        {
            Order order = await _orderContext.Orders.FirstOrDefaultAsync(o => o.Id == id);

            if (order == null)
            {
                throw new NotFoundException($"Order with ID {id} not found.");
            }

            return order;
        }
    }
}
