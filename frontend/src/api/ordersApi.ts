import { Order } from '../types/Order';

export const deleteOrder = async (id: number): Promise<number> => {
    const url = `https://localhost:7292/api/Orders?id=${id}`;

    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'accept': 'text/plain',
        },
    });

    if (!response.ok) {
        throw new Error('Error deleting order');
    }

    const deletedOrderId: number = await response.json();
    return deletedOrderId;
};

export const createOrder = async (order: Order): Promise<number> => {
    const url = 'https://localhost:7292/api/Orders';

    const cargoPickupDate = typeof order.cargoPickupDate === 'string'
    ? new Date(order.cargoPickupDate)
    : order.cargoPickupDate;

    const orderCreateDto = {
        senderCity: order.sender.city,
        senderAddress: order.sender.address,
        recipientCity: order.recipient.city,
        recipientAddress: order.recipient.address,
        cargoWeight: order.cargoWeight,
        cargoPickupDate: cargoPickupDate.toISOString(),
    };

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'text/plain',
        },
        body: JSON.stringify(orderCreateDto),
    });

    if (!response.ok) {
        throw new Error('Error creating order');
    }

    const createdOrderId: number = await response.json();
    return createdOrderId;
};

export const updateOrder = async (order: Order): Promise<void> => {
    const url = 'https://localhost:7292/api/Orders';

    const cargoPickupDate = typeof order.cargoPickupDate === 'string'
        ? new Date(order.cargoPickupDate)
        : order.cargoPickupDate;

    const orderUpdateDto = {
        id: order.id,
        senderCity: order.sender.city,
        senderAddress: order.sender.address,
        recipientCity: order.recipient.city,
        recipientAddress: order.recipient.address,
        cargoWeight: order.cargoWeight,
        cargoPickupDate: cargoPickupDate.toISOString()
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'text/plain',
        },
        body: JSON.stringify(orderUpdateDto),
    });

    if (!response.ok) {
        throw new Error('Update error');
    }
};

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

