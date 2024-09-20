using Domain.Exceptions;
using Microsoft.AspNetCore.Mvc;

namespace DeliveryOrderService.Middlewares
{
    public class GlobalExeptionMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<GlobalExeptionMiddleware> _logger;

        public GlobalExeptionMiddleware(RequestDelegate next, ILogger<GlobalExeptionMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (DomainException ex)
            {
                _logger.LogError(ex, ex.Message);

                var problem = new ObjectResult(new { Error = ex.Message })
                {
                    StatusCode = StatusCodes.Status400BadRequest
                };

                context.Response.StatusCode = StatusCodes.Status400BadRequest;

                await context.Response.WriteAsJsonAsync(problem);

            }
            catch (Exception ex)
            {
                context.Response.StatusCode = StatusCodes.Status500InternalServerError;
            }
        }

    }
}
