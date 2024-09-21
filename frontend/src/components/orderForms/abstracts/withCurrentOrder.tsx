import { FC, useEffect, useState, useContext } from "react";
import { getOrder } from "../../../api/ordersApi";
import { Order } from "../../../types/Order";
import { CurrentOrderContext } from "../../OrderContext/CurrentOrderProvider";
import { BaseOrderFormProps } from "./BaseOrderForm/BaseOrderForm";

const withCurrentOrder = (Component: FC<BaseOrderFormProps & { loading: boolean }>) => {
  return (props: Partial<BaseOrderFormProps>) => {
    const { orderId } = useContext(CurrentOrderContext);
    const [order, setOrder] = useState<Order | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      const loadOrder = async () => {
        try {
          const fetchedOrder = await getOrder(orderId);
          setOrder(fetchedOrder);
        } finally {
          setLoading(false);
        }
      };

      if (orderId) {
        loadOrder();
      }
    }, [orderId]);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!order) {
      return <div>Order not found</div>;
    }

    return <Component {...order} {...props} loading={loading} />;
  };
};

export default withCurrentOrder;
