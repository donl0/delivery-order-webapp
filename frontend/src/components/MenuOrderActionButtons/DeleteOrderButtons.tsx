import { deleteOrder } from "../../api/ordersApi";
import { OrderId } from "../../types/Order";
import BaseOrderButton from "../UI/orderActoinButton/BaseOrderButton";
import { FC } from "react";

const DeleteOrderButton: FC<OrderId> = ({ id }) => {
  const handleClick = () => {
    const update = async (orderId: number) => {
      await deleteOrder(orderId);
    }

    update(id);
  };

  return (
    <BaseOrderButton color="red" onClick={handleClick}>
      Delete
    </BaseOrderButton>
  );
}

export default DeleteOrderButton;