import { FC, useEffect, useState, } from "react";
import { getOrder } from "../../../api/ordersApi";
import { Order } from "../../../types/Order";
import { BaseOrderFormProps } from "./BaseOrderForm/BaseOrderForm";
import { useParams } from "react-router-dom";

const withCurrentOrder = (Component: FC<BaseOrderFormProps & { loading: boolean }>) => {
  return (props: Partial<BaseOrderFormProps>) => {
    const { orderId } = useParams<{ orderId: string }>();
    const [order, setOrder] = useState<Order | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      const loadOrder = async () => {
        try {
          const fetchedOrder = await getOrder(Number(orderId));
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
