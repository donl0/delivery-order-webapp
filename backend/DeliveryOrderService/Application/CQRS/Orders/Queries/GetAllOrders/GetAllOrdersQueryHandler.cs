using Application.Interfaces;
using Domain.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.CQRS.Orders.Queries.GetAllOrders
{
    public class GetAllOrdersQueryHandler : IRequestHandler<GetAllOrdersQuery, IEnumerable<Order>>
    {
        private readonly IDbContext _context;

        public GetAllOrdersQueryHandler(IDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Order>> Handle(GetAllOrdersQuery request, CancellationToken cancellationToken)
        {
            IEnumerable<Order> orders = await _context.Orders.ToListAsync();

            return orders;
        }
    }
}
