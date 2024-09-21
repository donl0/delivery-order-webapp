import { FC } from "react";
import BaseOrderForm from "../abstracts/BaseOrderForm/BaseOrderForm";
import withCurrentOrder from "../abstracts/withCurrentOrder";

const ViewOrderDetailsForm: FC = () => {
  const OrderFormWithCurrentOrder = withCurrentOrder(BaseOrderForm);

  return <OrderFormWithCurrentOrder isReadOnly={true} />;
};

export default ViewOrderDetailsForm;
