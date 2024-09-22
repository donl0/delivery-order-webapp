using Application.Exceptions;
using Application.Interfaces;
using Domain.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.CQRS.Orders.Commands.DeleteOrder
{
    public class DeleteOrderCommandHandler : IRequestHandler<DeleteOrderCommand, long>
    {
        private readonly IDbContext _context;

        public DeleteOrderCommandHandler(IDbContext context)
        {
            _context = context;
        }

        public async Task<long> Handle(DeleteOrderCommand request, CancellationToken cancellationToken)
        {
            Order order = await _context.Orders.FirstOrDefaultAsync(o => o.Id == request.Id);

            if (order == null)
            {
                throw new NotFoundException($"Order with id {request.Id}");
            }

            _context.Orders.Remove(order);

            _context.SaveChangesAsync(cancellationToken);

            return order.Id;
        }
    }
}
