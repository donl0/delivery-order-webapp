import { FC } from "react";
import BaseOrderForm from "../BaseOrderForm/BaseOrderForm";
import OrderViewForm from "../../../types/OrderViewForm";

const ViewOrderDetailsForm : FC <OrderViewForm> = (props) => {
    return (
        <BaseOrderForm {...props} isReadOnly={true}></BaseOrderForm>
    )
}

export default ViewOrderDetailsForm;