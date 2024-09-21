import { FC, useContext, useEffect, useState } from "react"
import OrdersTable from "../OrdersTable/OrdersTable"
import { Order } from "../../types/Order"
import { getOrders } from "../../api/ordersApi";
import { useNavigate } from "react-router-dom";
import CreateOrderFormOpenerButton from "../MenuOrderActionButtons/CreateOrderFormOpenerButton";

const Orders: FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const navigate = useNavigate();

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
            <OrdersTable orders={orders}></OrdersTable>
            <CreateOrderFormOpenerButton/>
        </div>
    )
}

export default Orders;