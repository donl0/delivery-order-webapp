import { FC } from "react";
import BaseOrderForm from "../abstracts/BaseOrderForm/BaseOrderForm";
import withCurrentOrder from "../abstracts/withCurrentOrder";

const ViewOrderDetailsForm: FC = () => {
  const OrderFormWithCurrentOrder = withCurrentOrder(BaseOrderForm);

  return <form>
    <OrderFormWithCurrentOrder isReadOnly={true} />
  </form> ;
};

export default ViewOrderDetailsForm;
