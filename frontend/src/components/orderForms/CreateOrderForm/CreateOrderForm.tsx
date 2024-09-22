import { createOrder } from "../../../api/ordersApi";
import { Order } from "../../../types/Order";
import { Urls } from "../../../types/Urls";
import { useTryNavigateIfSuccess } from "../../../utils/orderUtils";
import BaseOrderForm from "../abstracts/BaseOrderForm/BaseOrderForm";
import withFormValidation from "../abstracts/withFormValidation";

const CreateOrderForm = () => {
  const tryNavigateIfSuccess = useTryNavigateIfSuccess();

  const onSubmit = (data: Order) => {
    const create = async () => {
      await createOrder(data);
    }

    tryNavigateIfSuccess(create, Urls.HomePage);
  };

  const OrderFormWithValidation = withFormValidation(BaseOrderForm);

  return <OrderFormWithValidation onSubmit={onSubmit} />;
};

export default CreateOrderForm;