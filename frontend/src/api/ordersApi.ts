import { Order } from '../types/Order';

export const getOrder = async (id: number) : Promise<Order> => {
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
    let data: Order[] = [
        {
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
        },
        {
            id: 2,
            sender: {
                city: "Saint-Petersburg",
                address: "Nevsky",
            },
            recipient: {
                city: "Saint-Petersburg",
                address: "Nevsky",
            },
            cargoWeight: 10,
            orderNumber: "asdasd32-23234",
            cargoPickupDate: new Date()
        },
        {
            id: 3,
            sender: {
                city: "Saint-Petersburg",
                address: "Nevsky",
            },
            recipient: {
                city: "Saint-Petersburg",
                address: "Nevsky",
            },
            cargoWeight: 10,
            orderNumber: "asdasd32-2323qweqwe5",
            cargoPickupDate: new Date()
        }]

    //   const response = await fetch('/api/orders');
    //   if (!response.ok) {
    //     throw new Error('Ошибка загрузки заказов');
    //   }
    //   const data: Order[] = await response.json();
    return data;
};
