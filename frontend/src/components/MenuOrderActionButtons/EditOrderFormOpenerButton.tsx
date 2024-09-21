import { FC } from "react";
import { useNavigateToUrl, useSetOrderId } from "../../utils/orderUtils";
import BaseOrderButton from "../UI/orderActoinButton/BaseOrderButton";
import { OrderId } from "../../types/Order";

const EditOrderFormOpenerButton: FC<OrderId> = ({ id }) => {
  const setOrderId = useSetOrderId();
  const navigateToUrl = useNavigateToUrl();

  const handleClick = () => {
    setOrderId(id);
    navigateToUrl(`/edit-order`);
  };

  return (
    <BaseOrderButton color="orange" onClick={handleClick}>
      Edit
    </BaseOrderButton>
  );
};

export default EditOrderFormOpenerButton;
