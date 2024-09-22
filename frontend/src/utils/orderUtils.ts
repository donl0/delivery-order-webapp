import { useNavigate } from "react-router-dom";
import { Order } from "../types/Order";

export const useNavigateToUrl = () => {
  const navigate = useNavigate();
  return (url: string) => {
    navigate(url);
  };
};

export const mapOrderToDto = (order: Order) => {
  const cargoPickupDate = typeof order.cargoPickupDate === 'string'
      ? new Date(order.cargoPickupDate)
      : order.cargoPickupDate;

  return {
      id: order.id,
      senderCity: order.sender.city,
      senderAddress: order.sender.address,
      recipientCity: order.recipient.city,
      recipientAddress: order.recipient.address,
      cargoWeight: order.cargoWeight,
      cargoPickupDate: cargoPickupDate.toISOString(),
  };
};