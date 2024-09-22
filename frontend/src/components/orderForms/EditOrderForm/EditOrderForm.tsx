import { FC } from "react";
import BaseOrderForm from "../abstracts/BaseOrderForm/BaseOrderForm";
import withCurrentOrder from "../abstracts/withCurrentOrder";
import withFormValidation from "../abstracts/withFormValidation";
import { Order } from "../../../types/Order";
import { updateOrder } from "../../../api/ordersApi";

const EditOrderForm: FC = () => {
    const onSubmit = (data: Order) => {
        const update = async () => {
            await updateOrder(data);
        }

        update();
    };

    const OrderFormWithCurrentOrder = withCurrentOrder(BaseOrderForm);
    const OrderFormWithValidationAndOrderData = withFormValidation(OrderFormWithCurrentOrder);

    return <OrderFormWithValidationAndOrderData isReadOnly={false} onSubmit={onSubmit} />;
};

export default EditOrderForm;
