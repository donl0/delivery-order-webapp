import { FC } from "react";
import { useNavigateToUrl} from "../../utils/orderUtils";
import BaseOrderButton from "../UI/orderActoinButton/BaseOrderButton";
import { OrderId } from "../../types/Order";
import { Urls } from "../../types/Urls";

const SeeDetailOrderFormOpenerButton: FC<OrderId> = ({ id }) => {
  const navigateToUrl = useNavigateToUrl();

  const handleClick = () => {
    navigateToUrl(`${Urls.SeeDetail}/${id}`);
  };

  return (
    <BaseOrderButton color="blue" onClick={handleClick}>
      See details
    </BaseOrderButton>
  );
};

export default SeeDetailOrderFormOpenerButton;



