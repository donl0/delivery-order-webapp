using Application.Exceptions;
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
                context = await DoAcceptableErrorLogic(context, ex);
            }
            catch (ApplicationLayerException ex) {
                context = await DoAcceptableErrorLogic(context, ex);
            }
            catch (Exception ex)
            {
                 context.Response.StatusCode = StatusCodes.Status500InternalServerError;
            }
        }

        private async Task<HttpContext> DoAcceptableErrorLogic(HttpContext context, Exception exception) {
            _logger.LogError(exception, exception.Message);

            var problem = new ObjectResult(new { Error = exception.Message })
            {
                StatusCode = StatusCodes.Status400BadRequest
            };

            context.Response.StatusCode = StatusCodes.Status400BadRequest;

            await context.Response.WriteAsJsonAsync(problem);

            return context;
        }
    }
}
