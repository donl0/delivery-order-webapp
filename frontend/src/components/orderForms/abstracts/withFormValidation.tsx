import { FC } from "react";
import { useForm } from "react-hook-form";
import { Order } from "../../../types/Order";

const withFormValidation = (Component: FC<{ onSubmit: (data: Order) => void, register: any, errors: any }>) => {
  return (props: any) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Order>();
    const onSubmit = (data: Order) => props.onSubmit(data);

    return <form onSubmit={handleSubmit(onSubmit)}>
      <Component register={register} errors={errors} {...props} />
      <button type="submit">Submit</button>
    </form>;
  };
};

export default withFormValidation;
