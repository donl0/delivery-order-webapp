import styles from "./BaseOrderForm.module.css";
import { FC } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import OrderViewForm from "../../../types/OrderViewForm";

interface BaseOrderFormProps extends Partial<OrderViewForm> {
  isReadOnly?: boolean;
  register?: UseFormRegister<OrderViewForm>;
  errors?: FieldErrors<OrderViewForm>;
}

const BaseOrderForm: FC<BaseOrderFormProps> = ({
  senderCity = "",
  recipientCity = "",
  cargoWeight = 1,
  cargoPickupDate = new Date(),
  number = "",
  isReadOnly = false,
  register,
  errors,
}) => {
  return (
    <div>
      <form>
      {number && (
          <div>
            <label>Order number</label>
            <input
              type="text"
              defaultValue={number}
              readOnly={true}
              className={styles.readOnly}
            />
          </div>
        )}
        <div>
          <label>Sender's city</label>
          <input
            type="text"
            defaultValue={senderCity}
            readOnly={isReadOnly}
            className={isReadOnly ? styles.readOnly : ""}
            {...(register ? register("senderCity", { required: "Sender city is required" }) : {})}
          />
          {errors?.senderCity && <span className={styles.error}>{errors.senderCity.message}</span>}
        </div>
        <div>
          <label>Recipient's city</label>
          <input
            type="text"
            defaultValue={recipientCity}
            readOnly={isReadOnly}
            className={isReadOnly ? styles.readOnly : ""}
            {...(register ? register("recipientCity", { required: "Recipient city is required" }) : {})}
          />
          {errors?.recipientCity && (
            <span className={styles.error}>{errors.recipientCity.message}</span>
          )}
        </div>
        <div>
          <label>Cargo's weight</label>
          <input
            type="number"
            defaultValue={cargoWeight}
            readOnly={isReadOnly}
            className={isReadOnly ? styles.readOnly : ""}
            {...(register ? register("cargoWeight", { required: "Weight is required", min: { value: 1, message: "Weight must be greater than 0" } }) : {})}
          />
          {errors?.cargoWeight && <span className={styles.error}>{errors.cargoWeight.message}</span>}
        </div>
        <div>
          <label>Cargo pickup date</label>
          <input
            type="date"
            defaultValue={cargoPickupDate.toISOString().split("T")[0]}
            readOnly={isReadOnly}
            className={isReadOnly ? styles.readOnly : ""}
            {...(register ? register("cargoPickupDate", { required: "Cargo pickup date is required" }) : {})}
          />
          {errors?.cargoPickupDate && (
            <span className={styles.error}>{errors.cargoPickupDate.message}</span>
          )}
        </div>
      </form>
    </div>
  );
};

export default BaseOrderForm;
