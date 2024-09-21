import { FC, useContext, useEffect, useState } from "react";
import BaseOrderForm from "../BaseOrderForm/BaseOrderForm";
import { Order } from "../../../types/Order";
import { getOrder } from "../../../api/ordersApi";
import { CurrentOrderContext } from "../../OrderContext/CurrentOrderProvider";


const ViewOrderDetailsForm : FC  = () => {
    const { orderId, setOrderId } = useContext(CurrentOrderContext);

    const [order, setOrder] = useState<Order>();
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        const loadOrders = async () => {
            try {
                const order: Order = await getOrder(orderId);

                setOrder(order);
            }
            catch {
                setLoading(true);
            }
            finally {
                setLoading(false);
            }
        }

        loadOrders();
    }, [orderId])

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <BaseOrderForm {...order} isReadOnly={true}></BaseOrderForm>
    )
}

export default ViewOrderDetailsForm;