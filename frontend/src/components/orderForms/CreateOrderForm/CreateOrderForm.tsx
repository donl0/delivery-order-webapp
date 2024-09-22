import { createOrder } from "../../../api/ordersApi";
import { Order } from "../../../types/Order";
import BaseOrderForm from "../abstracts/BaseOrderForm/BaseOrderForm";
import withFormValidation from "../abstracts/withFormValidation";

const CreateOrderForm = () => {
  const onSubmit = (data: Order) => {
    const create = async () => {
      await createOrder(data);
    }

    create();
  };


  const OrderFormWithValidation = withFormValidation(BaseOrderForm);

  return <OrderFormWithValidation onSubmit={onSubmit} />;
};

export default CreateOrderForm;