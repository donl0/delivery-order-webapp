import { Order } from '../types/Order';

export const getOrder = async (id: number): Promise<Order> => {
    let order: Order = {
        id: 1,
        sender: {
            city: "Saint-Petersburg",
            address: "Nevsky",
        },
        recipient: {
            city: "Saint-Petersburg",
            address: "Nevsky",
        },
        cargoWeight: 10,
        orderNumber: "asdasd32-23233",
        cargoPickupDate: new Date()
    };

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

