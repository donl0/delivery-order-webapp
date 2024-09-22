using Domain.Models;
using MediatR;

namespace Application.CQRS.Orders.Queries.GetAllOrders
{
    public class GetAllOrdersQuery : IRequest<IEnumerable<Order>>
    {
    }
}
