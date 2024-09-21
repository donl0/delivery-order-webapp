import { useContext } from "react";
import { CurrentOrderContext } from "../components/OrderContext/CurrentOrderProvider";
import { useNavigate } from "react-router-dom";

export const useSetOrderId = () => {
  const { setOrderId } = useContext(CurrentOrderContext);
  return (orderId: number) => setOrderId(orderId);
};

export const useNavigateToUrl = () => {
  const navigate = useNavigate();
  return (url: string) => {
    navigate(url);
  };
};