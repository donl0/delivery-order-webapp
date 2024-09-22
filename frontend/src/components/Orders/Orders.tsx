import { FC, useEffect, useState } from "react"
import OrdersTable from "../OrdersTable/OrdersTable"
import { Order } from "../../types/Order"
import { getOrders } from "../../api/ordersApi";
import CreateOrderFormOpenerButton from "../MenuOrderActionButtons/CreateOrderFormOpenerButton";
import SeeDetailOrderFormOpenerButton from "../MenuOrderActionButtons/SeeDetailOrderFormOpenerButton";
import EditOrderFormOpenerButton from "../MenuOrderActionButtons/EditOrderFormOpenerButton";
import DeleteOrderButton from "../MenuOrderActionButtons/DeleteOrderButtons";
import styles from "./Orders.module.css"

const Orders: FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    const renderButtons = (id: number) => [
        <SeeDetailOrderFormOpenerButton key={`see-${id}`} id={id} />,
        <EditOrderFormOpenerButton key={`edit-${id}`} id={id} />,
        <DeleteOrderButton key={`delete-${id}`} id={id} onSuccess={loadOrders} />,
    ];

    const loadOrders = async () => {
        const orders: Order[] = await getOrders();
        setOrders(orders);
    };

    useEffect(() => {
        loadOrders();
    }, []);

    return (
        <div className={styles.main_container}>
            <OrdersTable orders={orders} renderActionButtons={renderButtons}></OrdersTable>
            <CreateOrderFormOpenerButton />
        </div>
    )
}

export default Orders;