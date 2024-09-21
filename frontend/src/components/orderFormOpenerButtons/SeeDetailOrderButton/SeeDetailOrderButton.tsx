import { FC, useEffect, useState } from "react";
import { ISetCurrentId } from "../../OrderContext/CurrentOrderProvider";
import { useNavigate } from "react-router-dom";

interface SeeDetailOrderButtonProps {
    setCurrentOrder: Function
}

const SeeDetailOrderButton: FC<SeeDetailOrderButtonProps> = ({ setCurrentOrder }) => {
    const navigate = useNavigate();

    const seeOrderDetail = () => {
        setCurrentOrder();
        navigate("/see-order-detail");
    }

    return (
        <div>
            <button onClick={() => { seeOrderDetail() }} >Details</button>
        </div>
    )
}

export default SeeDetailOrderButton;