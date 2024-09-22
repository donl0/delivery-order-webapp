using Domain.Models;
using MediatR;

namespace Application.CQRS.Orders.Queries.GetOrder
{
    public class GetOrderQuery : IRequest<Order>
    {
        public long Id { get; set; }
    }
}
