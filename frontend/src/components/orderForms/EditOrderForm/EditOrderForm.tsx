import { FC } from "react";
import BaseOrderForm from "../abstracts/BaseOrderForm/BaseOrderForm";
import withCurrentOrder from "../abstracts/withCurrentOrder";
import withFormValidation from "../abstracts/withFormValidation";
import { Order } from "../../../types/Order";

const EditOrderForm: FC = () => {
    const onSubmit = (data: Order) => {
        console.log("Order edited", data);
    };

    const OrderFormWithCurrentOrder = withCurrentOrder(BaseOrderForm);
    const OrderFormWithValidationAndOrderData = withFormValidation(OrderFormWithCurrentOrder);

    return <OrderFormWithValidationAndOrderData isReadOnly={false} onSubmit={onSubmit} />;
};

export default EditOrderForm;
