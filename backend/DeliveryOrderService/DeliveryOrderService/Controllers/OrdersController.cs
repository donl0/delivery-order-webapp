using Application.CQRS.Orders.Commands.CreateOrder;
using Application.CQRS.Orders.Commands.DeleteOrder;
using Application.CQRS.Orders.Commands.UpdateOrder;
using Application.CQRS.Orders.Queries.GetAllOrders;
using Application.CQRS.Orders.Queries.GetOrder;
using Application.DTOs;
using Domain.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace DeliveryOrderService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IMediator _mediator;

        public OrdersController(IMediator mediator)
        {
            _mediator = mediator;
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrderAsync(long id)
        {
            GetOrderQuery query = new GetOrderQuery
            {
                Id = id
            };

            Order order = await _mediator.Send(query);

            return Ok(order);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetAllOrders()
        {
            GetAllOrdersQuery query = new GetAllOrdersQuery();

            IEnumerable<Order> orders = await _mediator.Send(query);

            return Ok(orders);
        }

        [HttpPut()]
        public async Task<ActionResult<long>> CreateOrder([FromBody] OrderCreateRequestDTO createTemplate, CancellationToken token)
        {
            CreateOrderCommand command = new CreateOrderCommand
            {
                Order = createTemplate
            };

            long id = await _mediator.Send(command);

            return Ok(id);
        }

        [HttpPost]
        public async Task<ActionResult<long>> UpdateOrder([FromBody] OrderUpdateDto order)
        {
            UpdateOrderCommand command = new UpdateOrderCommand
            {
                Order = order
            };

            long id = await _mediator.Send(command);

            return Ok(id);
        }

        [HttpDelete]
        public async Task<ActionResult<long>> DeleteOrder(long id)
        {
            DeleteOrderCommand command = new DeleteOrderCommand
            {
                Id = id
            };

            long resultId = await _mediator.Send(command);

            return Ok(resultId);
        }
    }
}
