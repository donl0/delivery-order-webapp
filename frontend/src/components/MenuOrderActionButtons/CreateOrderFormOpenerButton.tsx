import { FC } from "react";
import { useNavigateToUrl} from "../../utils/orderUtils";
import BaseOrderButton from "../UI/orderActoinButton/BaseOrderButton";
import { Urls } from "../../types/Urls";

interface CreateOrderFormOpenerButtonProps {
}

const CreateOrderFormOpenerButton: FC<CreateOrderFormOpenerButtonProps> = () => {
  const navigateToUrl = useNavigateToUrl();

  const handleClick = () => {
    
    navigateToUrl(Urls.CreateOrder);
  };

  return (
    <BaseOrderButton color="green" size="large" onClick={handleClick}>
      Create Order
    </BaseOrderButton>
  );
};

export default CreateOrderFormOpenerButton;
