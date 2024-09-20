import { FC } from "react";
import OrderViewForm from "../../../types/OrderViewForm";
import { useForm } from "react-hook-form";
import BaseOrderForm from "../BaseOrderForm/BaseOrderForm";

const CreateOrderForm : FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BaseOrderForm register={register} />
      {errors.orderNumber && <span>The Order Number field is required</span>}
      {errors.cargoWeight && <span>Weight must be greater than 0</span>}
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateOrderForm;