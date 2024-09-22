import { FC } from "react";
import { useNavigateToUrl } from "../../../utils/orderUtils";
import BaseOrderButton from "../orderActoinButton/BaseOrderButton";
import { Urls } from "../../../types/Urls";

interface NavigationButtonProps {
  path: Urls,
  children: string;
}

const NavigationButton: FC<NavigationButtonProps> = ({ path, children }) => {
  const navigateToUrl = useNavigateToUrl();

  const handleClick = () => {
    navigateToUrl(path);
  };

  return (
    <BaseOrderButton color="blue" onClick={handleClick}>
      {children}
    </BaseOrderButton>
  );
};

export default NavigationButton;
