import styles from "./BaseOrderForm.module.css";
import { FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import OrderViewForm from "../../../types/OrderViewForm";

interface BaseOrderFormProps extends Partial<OrderViewForm> {
    isReadOnly?: boolean;
    register?: UseFormRegister<FieldValues>;
}

const BaseOrderForm: FC<BaseOrderFormProps> = ({
    senderCity = "",
    recipientCity = "",
    cargoWeight = 1,
    cargoPickupDate = new Date(),
    isReadOnly = false,
    register,
}) => {
    return (
        <div>
            <form>
                <div>
                    <label>Sender's city</label>
                    <input
                        type="text"
                        defaultValue={senderCity}
                        readOnly={isReadOnly}
                        className={isReadOnly ? styles.readOnly : ''}
                        {...(register ? register('senderCity', { required: true }) : {})}
                    />
                </div>
                <div>
                    <label>Recipient's city</label>
                    <input
                        type="text"
                        defaultValue={recipientCity}
                        readOnly={isReadOnly}
                        className={isReadOnly ? styles.readOnly : ''}
                        {...(register ? register('recipientCity', { required: true }) : {})}
                    />
                </div>
                <div>
                    <label>Cargo's weight</label>
                    <input
                        type="number"
                        defaultValue={cargoWeight}
                        readOnly={isReadOnly}
                        className={isReadOnly ? styles.readOnly : ''}
                        {...(register ? register('cargoWeight', { required: true, min: 1 }) : {})}
                    />
                </div>
                <div>
                    <label>Cargo pickup date</label>
                    <input
                        type="date"
                        defaultValue={cargoPickupDate.toISOString().split('T')[0]}
                        readOnly={isReadOnly}
                        className={isReadOnly ? styles.readOnly : ''}
                        {...(register ? register('cargoPickupDate', { required: true }) : {})}
                    />
                </div>
            </form>
        </div>
    )
}

export default BaseOrderForm;