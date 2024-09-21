import { FC } from "react";
import { useNavigateToUrl } from "../../utils/orderUtils";
import BaseOrderButton from "../UI/orderActoinButton/BaseOrderButton";
import { OrderId } from "../../types/Order";

const EditOrderFormOpenerButton: FC<OrderId> = ({ id }) => {
  const navigateToUrl = useNavigateToUrl();

  const handleClick = () => {
    navigateToUrl(`/edit-order${id}`);
  };

  return (
    <BaseOrderButton color="orange" onClick={handleClick}>
      Edit
    </BaseOrderButton>
  );
};

export default EditOrderFormOpenerButton;
