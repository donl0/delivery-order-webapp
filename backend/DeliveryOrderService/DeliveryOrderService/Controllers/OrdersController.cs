using Application.DTOs;
using Application.Interfaces;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace DeliveryOrderService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrdersController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> GetOrderAsync(long id) {
            try {
                Order order = await _orderService.TakeOrderAsync(id);

                return Ok(order);
            }
            catch (NotFoundException ex) { 
                return NotFound();
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> GetAllOrders() { 
            IEnumerable<Order> orders = await _orderService.TakeAllOrdersAsync();

            return Ok(orders);
        }

        [HttpPost()]
        public async Task<ActionResult<long>> CreateOrder([FromBody] OrderRequestDTO createTemplate, CancellationToken token) { 
            long id = await _orderService.CreateOrderAsync(createTemplate, token);

            return Ok(id);
        }
    }
}
