using Application.DTOs;
using Application.Interfaces;
using Domain.Models;

namespace Application.Mapper
{
    public class OrderDtoMapper : IMapper
    {
        public Order Map(OrderUpdateDto dto)
        {
            Order order = new Order(
                dto.SenderCity, 
                dto.SenderAddress, 
                dto.RecipientCity, 
                dto.RecipientAddress, 
                dto.CargoWeight, 
                dto.CargoPickupDate);

            return order;
        }

        public Order Map(OrderCreateRequestDTO dto) 
        {
            Order order = new Order(
                dto.SenderCity,
                dto.SenderAddress,
                dto.RecipientCity,
                dto.RecipientAddress,
                dto.CargoWeight,
                dto.CargoPickupDate);

            return order;
        }
    }
}
