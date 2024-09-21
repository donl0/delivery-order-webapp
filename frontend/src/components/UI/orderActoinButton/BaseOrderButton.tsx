import { FC} from "react";
import styles from "./BaseOrderButton.module.css"

interface BaseOrderButtonProps {
  color: "green" | "blue" | "orange" | "red";
  size?: "normal" | "large";
  onClick: () => void;
  children: string;
}

const BaseOrderButton: FC<BaseOrderButtonProps> = ({ color, size = "normal", onClick, children }) => {
  const buttonClass = `${styles.baseButton} ${styles[color + "Button"]} ${size === "large" ? styles.largeButton : ""}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default BaseOrderButton;
