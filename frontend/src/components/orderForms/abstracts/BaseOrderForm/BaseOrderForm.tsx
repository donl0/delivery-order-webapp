import styles from "./BaseOrderForm.module.css";
import { FC } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Order } from "../../../../types/Order";
import FormInputField from "./FormInputField";
import GoMainMenuButton from "../../../UI/GoMainMenuButton/GoMainMenuButton";

export interface BaseOrderFormProps extends Partial<Order> {
  isReadOnly?: boolean;
  register?: UseFormRegister<Order>;
  errors?: FieldErrors<Order>;
}

const BaseOrderForm: FC<BaseOrderFormProps> = ({
  id,
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
      <FormInputField
        label=""
        type="text"
        defaultValue={`${id}`}
        isReadOnly={true}
        register={register ? register("id") : undefined}
        isHide={true}
      />
    
      {orderNumber && (
        <FormInputField
          label="Order number"
          type="text"
          defaultValue={orderNumber}
          isReadOnly={true}
        />
      )}

      <FormInputField
        label="Sender's city"
        type="text"
        defaultValue={sender.city}
        isReadOnly={isReadOnly}
        register={register ? register("sender.city", { required: "Sender city is required" }) : undefined}
        errorMessage={errors?.sender?.city?.message}
      />

      <FormInputField
        label="Sender's address"
        type="text"
        defaultValue={sender.address}
        isReadOnly={isReadOnly}
        register={register ? register("sender.address", { required: "Sender address is required" }) : undefined}
        errorMessage={errors?.sender?.address?.message}
      />

      <FormInputField
        label="Recipient's city"
        type="text"
        defaultValue={recipient.city}
        isReadOnly={isReadOnly}
        register={register ? register("recipient.city", { required: "Recipient city is required" }) : undefined}
        errorMessage={errors?.recipient?.city?.message}
      />

      <FormInputField
        label="Recipient's address"
        type="text"
        defaultValue={recipient.address}
        isReadOnly={isReadOnly}
        register={register ? register("recipient.address", { required: "Recipient address is required" }) : undefined}
        errorMessage={errors?.recipient?.address?.message}
      />

      <FormInputField
        label="Cargo's weight"
        type="number"
        defaultValue={cargoWeight}
        isReadOnly={isReadOnly}
        register={register ? register("cargoWeight", { required: "Weight is required", min: { value: 1, message: "Weight must be greater than 0" } }) : undefined}
        errorMessage={errors?.cargoWeight?.message}
      />

      <FormInputField
        label="Cargo pickup date"
        type="date"
        defaultValue={cargoPickupDate.toISOString().split("T")[0]}
        isReadOnly={isReadOnly}
        register={register ? register("cargoPickupDate", { required: "Cargo pickup date is required" }) : undefined}
        errorMessage={errors?.cargoPickupDate?.message}
      />

      <GoMainMenuButton></GoMainMenuButton>
    </div>
  );
};

export default BaseOrderForm;
