using MediatR;

namespace Application.CQRS.Orders.Commands.DeleteOrder
{
    public class DeleteOrderCommand : IRequest<long>
    {
        public long Id { get; set; }
    }
}
