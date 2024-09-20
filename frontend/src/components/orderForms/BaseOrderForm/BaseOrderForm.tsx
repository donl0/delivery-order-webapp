import styles from "./BaseOrderForm.module.css";
import { FC } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Order } from "../../../types/Order";

interface BaseOrderFormProps extends Partial<Order> {
  isReadOnly?: boolean;
  register?: UseFormRegister<Order>;
  errors?: FieldErrors<Order>;
}

const BaseOrderForm: FC<BaseOrderFormProps> = ({
  sender = { city: "", address: "" },
  recipient = { city: "", address: "" },
  cargoWeight = 1,
  cargoPickupDate = new Date(),
  orderNumber = "",
  isReadOnly = false,
  register,
  errors,
}) => {
  return (
    <div>
      <form>
        {orderNumber && (
          <div>
            <label>Order number</label>
            <input
              type="text"
              defaultValue={orderNumber}
              readOnly={true}
              className={styles.readOnly}
            />
          </div>
        )}

        <div>
          <label>Sender's city</label>
          <input
            type="text"
            defaultValue={sender.city}
            readOnly={isReadOnly}
            className={isReadOnly ? styles.readOnly : ""}
            {...(register ? register("sender.city", { required: "Sender city is required" }) : {})}
          />
          {errors?.sender?.city && (
            <span className={styles.error}>{errors.sender.city.message}</span>
          )}
        </div>

        <div>
          <label>Sender's address</label>
          <input
            type="text"
            defaultValue={sender.address}
            readOnly={isReadOnly}
            className={isReadOnly ? styles.readOnly : ""}
            {...(register ? register("sender.address", { required: "Sender address is required" }) : {})}
          />
          {errors?.sender?.address && (
            <span className={styles.error}>{errors.sender.address.message}</span>
          )}
        </div>

        <div>
          <label>Recipient's city</label>
          <input
            type="text"
            defaultValue={recipient.city}
            readOnly={isReadOnly}
            className={isReadOnly ? styles.readOnly : ""}
            {...(register ? register("recipient.city", { required: "Recipient city is required" }) : {})}
          />
          {errors?.recipient?.city && (
            <span className={styles.error}>{errors.recipient.city.message}</span>
          )}
        </div>

        <div>
          <label>Recipient's address</label>
          <input
            type="text"
            defaultValue={recipient.address}
            readOnly={isReadOnly}
            className={isReadOnly ? styles.readOnly : ""}
            {...(register ? register("recipient.address", { required: "Recipient address is required" }) : {})}
          />
          {errors?.recipient?.address && (
            <span className={styles.error}>{errors.recipient.address.message}</span>
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
