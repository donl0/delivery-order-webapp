import { FC } from "react";
import { useForm } from "react-hook-form";
import BaseOrderForm from "../BaseOrderForm/BaseOrderForm";
import OrderViewForm from "../../../types/OrderViewForm";

const CreateOrderForm: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<OrderViewForm>();

  const onSubmit = (data: OrderViewForm) => {
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
