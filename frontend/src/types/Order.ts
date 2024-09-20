export interface PersonOrderEntity {
    city: string;
    address: string;
}

export interface Order {
    sender: PersonOrderEntity;
    recipient: PersonOrderEntity;
    cargoWeight: number;
    orderNumber: string;
    cargoPickupDate: Date;
}