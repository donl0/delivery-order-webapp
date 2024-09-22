import { Order } from '../types/Order';

export const getOrder = async (id: number): Promise<Order> => {
    const response = await fetch(`https://localhost:7292/api/Orders/${id}`);

    if (!response.ok) {
        throw new Error('Loading error');
    }

    const order: Order = await response.json();
    order.cargoPickupDate = new Date(order.cargoPickupDate)
    
    return order;
}

export const getOrders = async (): Promise<Order[]> => {
    const response = await fetch('https://localhost:7292/api/Orders');

    if (!response.ok) {
        throw new Error('Loading error');
    }

    const data: Order[] = await response.json();

    const parsedData = data.map(order => ({
        ...order,
        cargoPickupDate: new Date(order.cargoPickupDate)
    }));

    return parsedData;
};

