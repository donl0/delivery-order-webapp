import { FC } from "react";
import NavigationButton from "../NavigationButton/NavigationButton"
import { Urls } from "../../../types/Urls";

const GoMainMenuButton: FC = () => {
    return (
        <NavigationButton path={Urls.HomePage}>
            Go Home
        </NavigationButton>
    )
}
export default GoMainMenuButton;