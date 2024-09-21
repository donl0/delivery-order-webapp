import { FC } from "react";
import { useNavigateToUrl, useSetOrderId } from "../../utils/orderUtils";
import BaseOrderButton from "../UI/orderActoinButton/BaseOrderButton";
import { OrderId } from "../../types/Order";

const SeeDetailOrderFormOpenerButton: FC<OrderId> = ({ id }) => {
  const setOrderId = useSetOrderId();
  const navigateToUrl = useNavigateToUrl();

  const handleClick = () => {
    setOrderId(id);
    navigateToUrl(`/see-order-detail`);
  };

  return (
    <BaseOrderButton color="blue" onClick={handleClick}>
      See details
    </BaseOrderButton>
  );
};

export default SeeDetailOrderFormOpenerButton;



