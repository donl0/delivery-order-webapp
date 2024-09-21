import { FC, useEffect, useState } from "react"
import OrdersTable from "../OrdersTable/OrdersTable"
import { Order } from "../../types/Order"
import { getOrders } from "../../api/ordersApi";
import CreateOrderFormOpenerButton from "../MenuOrderActionButtons/CreateOrderFormOpenerButton";
import SeeDetailOrderFormOpenerButton from "../MenuOrderActionButtons/SeeDetailOrderFormOpenerButton";
import EditOrderFormOpenerButton from "../MenuOrderActionButtons/EditOrderFormOpenerButton";
import DeleteOrderButton from "../MenuOrderActionButtons/DeleteOrderButtons";

const Orders: FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const renderButtons = (id: number) => [
        <SeeDetailOrderFormOpenerButton key={`see-${id}`} id={id} />,
        <EditOrderFormOpenerButton key={`edit-${id}`} id={id} />,
        <DeleteOrderButton key={`delete-${id}`} id={id} />,
      ];

    useEffect(() => {
        const loadOrders = async () => {
            try {
                const orders: Order[] = await getOrders();

                setOrders(orders);
            }
            catch {
                setLoading(true);
            }
            finally {
                setLoading(false);
            }
        }

        loadOrders();
    })

    if (loading) {
        return <div>Loading...</div>;
    }
    
    return (
        <div>
            <OrdersTable orders={orders} renderActionButtons={renderButtons}></OrdersTable>
            <CreateOrderFormOpenerButton/>
        </div>
    )
}

export default Orders;