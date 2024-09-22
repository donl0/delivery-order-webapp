using Application.DTOs;
using Domain.Models;

namespace Application.Interfaces
{
    public interface IMapper
    {
        public Order Map(OrderUpdateDto dto);
        public Order Map(OrderCreateRequestDTO dto);
    }
}