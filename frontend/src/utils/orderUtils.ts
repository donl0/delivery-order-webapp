import { useNavigate } from "react-router-dom";
import { Order } from "../types/Order";
import { Urls } from "../types/Urls";

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

export const useTryNavigateIfSuccess = () => {
  const navigate = useNavigate();

  const tryNavigateIfSuccess = async (action: Function, url: string) => {
    try {
      await action();
      
      navigate(url);
    } catch (e) {
      console.log(e);
    }
  };

  return tryNavigateIfSuccess;
};