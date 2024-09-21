import { FC } from "react";
import { useNavigateToUrl} from "../../utils/orderUtils";
import BaseOrderButton from "../UI/orderActoinButton/BaseOrderButton";

interface CreateOrderFormOpenerButtonProps {
}

const CreateOrderFormOpenerButton: FC<CreateOrderFormOpenerButtonProps> = () => {
  const navigateToUrl = useNavigateToUrl();

  const handleClick = () => {
    navigateToUrl(`/create-order/`);
  };

  return (
    <BaseOrderButton color="green" size="large" onClick={handleClick}>
      Create Order
    </BaseOrderButton>
  );
};

export default CreateOrderFormOpenerButton;
