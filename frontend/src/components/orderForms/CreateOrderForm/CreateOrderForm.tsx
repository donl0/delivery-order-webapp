import { Order } from "../../../types/Order";
import BaseOrderForm from "../abstracts/BaseOrderForm/BaseOrderForm";
import withFormValidation from "../abstracts/withFormValidation";

const CreateOrderForm = () => {
  const onSubmit = (data: Order) => {
    console.log("Order created", data);
  };

  const OrderFormWithValidation = withFormValidation(BaseOrderForm);

  return <OrderFormWithValidation onSubmit={onSubmit} />;
};

export default CreateOrderForm;