import { FC } from "react";
import BaseOrderForm from "../abstracts/BaseOrderForm/BaseOrderForm";
import withCurrentOrder from "../abstracts/withCurrentOrder";
import withFormValidation from "../abstracts/withFormValidation";
import { Order } from "../../../types/Order";
import { updateOrder } from "../../../api/ordersApi";
import { useTryNavigateIfSuccess  } from "../../../utils/orderUtils";
import { Urls } from "../../../types/Urls";

const EditOrderForm: FC = () => {
    const tryNavigateIfSuccess = useTryNavigateIfSuccess();

    const onSubmit = (data: Order) => {
        const update = async () => {
            await updateOrder(data);
        }

        tryNavigateIfSuccess(update, Urls.HomePage);
    };

    const OrderFormWithCurrentOrder = withCurrentOrder(BaseOrderForm);
    const OrderFormWithValidationAndOrderData = withFormValidation(OrderFormWithCurrentOrder);

    return <OrderFormWithValidationAndOrderData isReadOnly={false} onSubmit={onSubmit} />;
};

export default EditOrderForm;
