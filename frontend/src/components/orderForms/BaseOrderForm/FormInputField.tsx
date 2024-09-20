import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./BaseOrderForm.module.css";

interface FormInputFieldProps {
  label: string;
  type: string;
  defaultValue: string | number;
  isReadOnly?: boolean;
  register?: UseFormRegisterReturn;
  errorMessage?: string;
}

const FormInputField: FC<FormInputFieldProps> = ({
  label,
  type,
  defaultValue,
  isReadOnly = false,
  register,
  errorMessage,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        defaultValue={defaultValue}
        readOnly={isReadOnly}
        className={isReadOnly ? styles.readOnly : ""}
        {...(register || {})}
      />
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
};

export default FormInputField;
