using Application.DTOs;
using Domain.Models;
using MediatR;

namespace Application.CQRS.Orders.Commands.UpdateOrder
{
    public class UpdateOrderCommand : IRequest<long>
    {
        public OrderUpdateDto Order { get; set; }
    }
}
