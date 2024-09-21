import { FC } from 'react';
import { Order } from '../../types/Order';
import { ISetCurrentId } from '../OrderContext/CurrentOrderProvider';
import SeeDetailOrderButton from '../orderFormOpenerButtons/SeeDetailOrderButton/SeeDetailOrderButton';

interface OrdersTableProps extends ISetCurrentId {
    orders: Order[],
}

const OrdersTable: FC<OrdersTableProps> = ({ orders, setOrderId }) => {
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
              <td><SeeDetailOrderButton setCurrentOrder={()=>{setOrderId(order.id)}}></SeeDetailOrderButton></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

export default OrdersTable;