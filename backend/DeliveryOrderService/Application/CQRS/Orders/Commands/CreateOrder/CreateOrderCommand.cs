using Application.DTOs;
using MediatR;

namespace Application.CQRS.Orders.Commands.CreateOrder
{
    public class CreateOrderCommand : IRequest<long>
    {
        public OrderCreateRequestDTO Order { get; set; }
    }
}
