export interface OrderId {
    id: number;
}

export interface PersonOrderEntity {
    city: string;
    address: string;
}

export interface Order extends OrderId {
    sender: PersonOrderEntity;
    recipient: PersonOrderEntity;
    cargoWeight: number;
    orderNumber: string;
    cargoPickupDate: Date;
}