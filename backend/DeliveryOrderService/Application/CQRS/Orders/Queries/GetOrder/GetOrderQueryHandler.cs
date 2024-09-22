using Application.Exceptions;
using Application.Interfaces;
using Domain.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.CQRS.Orders.Queries.GetOrder
{
    public class GetOrderQueryHandler : IRequestHandler<GetOrderQuery, Order>
    {
        private readonly IDbContext _context;

        public GetOrderQueryHandler(IDbContext context)
        {
            _context = context;
        }

        public async Task<Order> Handle(GetOrderQuery request, CancellationToken cancellationToken)
        {
            Order order = await _context.Orders.FirstOrDefaultAsync(o => o.Id == request.Id);

            if (order == null)
            {
                throw new NotFoundException($"Order with ID {request.Id} not found.");
            }

            return order;
        }
    }
}
