using Application.Exceptions;
using Application.Interfaces;
using Domain.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.CQRS.Orders.Commands.UpdateOrder
{
    public class UpdateCommandHandler : IRequestHandler<UpdateOrderCommand, long>
    {
        private readonly IDbContext _context;
        private readonly IMapper _mapper;

        public UpdateCommandHandler(IDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<long> Handle(UpdateOrderCommand request, CancellationToken cancellationToken)
        {
            Order order = await _context.Orders.FirstOrDefaultAsync(o => o.Id == request.Order.Id);

            if (order == null)
            {
                throw new NotFoundException($"Not found Order with id {request.Order.Id}");
            }

            Order updateWithEntity = _mapper.Map(request.Order);

            order.Update(updateWithEntity);

            await _context.SaveChangesAsync(cancellationToken);

            return order.Id;
        }
    }
}
