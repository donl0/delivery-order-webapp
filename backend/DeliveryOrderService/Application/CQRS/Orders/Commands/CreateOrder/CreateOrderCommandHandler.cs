using Application.Exceptions;
using Application.Interfaces;
using Domain.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.CQRS.Orders.Commands.CreateOrder
{
    public class CreateOrderCommandHandler : IRequestHandler<CreateOrderCommand, long>
    {
        private readonly IDbContext _context;
        private readonly IMapper _mapper;

        public CreateOrderCommandHandler(IDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<long> Handle(CreateOrderCommand request, CancellationToken cancellationToken)
        {
            Order createObject = _mapper.Map(request.Order);

            await _context.Orders.AddAsync(createObject);

            if (await IsOrderNumberUnique(createObject.OrderNumber) == false)
            {
                throw new NotUniqueNumberException(createObject.OrderNumber);
            }

            await _context.SaveChangesAsync(cancellationToken);

            return createObject.Id;
        }

        private async Task<bool> IsOrderNumberUnique(Guid number)
        {
            Order orders = await _context.Orders.FirstOrDefaultAsync(o => o.OrderNumber == number);

            if (orders == null)
            {
                return true;
            }

            return false;
        }
    }
}
