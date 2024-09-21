import { FC, ReactElement } from 'react';
import { Order, OrderId } from '../../types/Order';

interface OrdersTableProps {
  orders: Order[],
  renderActionButtons: (id: number) => ReactElement<OrderId>[];
}

const OrdersTable: FC<OrdersTableProps> = ({ orders, renderActionButtons }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Sender City</th>
            <th>Recipient City</th>
            <th>Cargo Weight</th>
            <th>Cargo Pickup Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderNumber}>
              <td>{order.orderNumber}</td>
              <td>{order.sender.city}</td>
              <td>{order.recipient.city}</td>
              <td>{order.cargoWeight}</td>
              <td>{order.cargoPickupDate.toLocaleDateString()}</td>
              <td>
                {renderActionButtons(order.id)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

export default OrdersTable;