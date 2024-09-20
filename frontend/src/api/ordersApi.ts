import { Order } from '../types/Order';

export const getOrders = async (): Promise<Order[]> => {
    let data: Order[] = [
        {
            sender: {
                city: "Saint-Petersburg",
                address: "Nevsky",
            },
            recipient: {
                city: "Saint-Petersburg",
                address: "Nevsky",
            },
            cargoWeight: 10,
            orderNumber: "asdasd32-2323",
            cargoPickupDate: "20.09.2024"
        },
        {
            sender: {
                city: "Saint-Petersburg",
                address: "Nevsky",
            },
            recipient: {
                city: "Saint-Petersburg",
                address: "Nevsky",
            },
            cargoWeight: 10,
            orderNumber: "asdasd32-2323",
            cargoPickupDate: "20.09.2024"
        },
        {
            sender: {
                city: "Saint-Petersburg",
                address: "Nevsky",
            },
            recipient: {
                city: "Saint-Petersburg",
                address: "Nevsky",
            },
            cargoWeight: 10,
            orderNumber: "asdasd32-2323qweqwe",
            cargoPickupDate: "20.09.2024"
        }]

    //   const response = await fetch('/api/orders');
    //   if (!response.ok) {
    //     throw new Error('Ошибка загрузки заказов');
    //   }
    //   const data: Order[] = await response.json();
    return data;
};
