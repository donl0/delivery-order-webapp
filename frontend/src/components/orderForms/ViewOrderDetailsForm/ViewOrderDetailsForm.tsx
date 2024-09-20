import { FC } from "react";
import BaseOrderForm from "../BaseOrderForm/BaseOrderForm";
import { Order } from "../../../types/Order";

const ViewOrderDetailsForm : FC <Order> = (props) => {
    return (
        <BaseOrderForm {...props} isReadOnly={true}></BaseOrderForm>
    )
}

export default ViewOrderDetailsForm;