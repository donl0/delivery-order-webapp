import { OrderId } from "../../types/Order";
import BaseOrderButton from "../UI/orderActoinButton/BaseOrderButton";
import { FC } from "react";

const DeleteOrderButton : FC<OrderId> = ({id}) => {
    const handleClick = () => {
        console.log({id} + "deleted")
      };
    
      return (
        <BaseOrderButton color="red" onClick={handleClick}>
          Delete
        </BaseOrderButton>
      );
}

export default DeleteOrderButton;