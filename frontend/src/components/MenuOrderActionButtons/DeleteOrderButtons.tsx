import { deleteOrder } from "../../api/ordersApi";
import BaseOrderButton from "../UI/orderActoinButton/BaseOrderButton";
import { FC } from "react";

interface DeleteOrderButtonProps {
  id: number,
  onSuccess: Function
}

const DeleteOrderButton: FC<DeleteOrderButtonProps> = ({ id, onSuccess }) => {
  const handleClick = () => {
    const update = async (orderId: number) => {
      await deleteOrder(orderId);
      onSuccess();
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