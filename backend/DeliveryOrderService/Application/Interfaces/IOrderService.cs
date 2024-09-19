using Application.DTOs;
using Domain.Models;

namespace Application.Interfaces
{
    public interface IOrderService
    {
        public Task<Order> TakeOrderAsync(long id);
        public Task<IEnumerable<Order>> TakeAllOrdersAsync();
        public Task<long> CreateOrderAsync(OrderRequestDTO order, CancellationToken token);
    }
}
