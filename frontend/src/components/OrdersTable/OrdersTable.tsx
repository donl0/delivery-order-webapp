import { FC } from 'react';
import { Order } from '../../types/Order';

interface OrdersTableProps {
    orders: Order[]
}

const OrdersTable: FC<OrdersTableProps> = ({ orders }) => {
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
              <td><button>Details</button></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

export default OrdersTable;