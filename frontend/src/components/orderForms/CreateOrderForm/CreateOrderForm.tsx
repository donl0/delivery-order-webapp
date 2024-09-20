import { FC } from "react";
import { useForm } from "react-hook-form";
import BaseOrderForm from "../BaseOrderForm/BaseOrderForm";
import { Order } from "../../../types/Order";

const CreateOrderForm: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Order>();

  const onSubmit = (data: Order) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BaseOrderForm register={register} errors={errors} />
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateOrderForm;
