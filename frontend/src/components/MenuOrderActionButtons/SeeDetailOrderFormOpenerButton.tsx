import { FC } from "react";
import { useNavigateToUrl} from "../../utils/orderUtils";
import BaseOrderButton from "../UI/orderActoinButton/BaseOrderButton";
import { OrderId } from "../../types/Order";

const SeeDetailOrderFormOpenerButton: FC<OrderId> = ({ id }) => {
  const navigateToUrl = useNavigateToUrl();

  const handleClick = () => {
    navigateToUrl(`/see-order-detail/${id}`);
  };

  return (
    <BaseOrderButton color="blue" onClick={handleClick}>
      See details
    </BaseOrderButton>
  );
};

export default SeeDetailOrderFormOpenerButton;



