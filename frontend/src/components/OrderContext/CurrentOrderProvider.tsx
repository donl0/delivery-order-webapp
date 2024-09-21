import { createContext, FC, ReactNode, useState } from "react";

export interface ISetCurrentId {
  setOrderId: (id: number) => void
}

interface OrderContextType extends ISetCurrentId {
  orderId: number;
}

interface CurrentOrderProviderProps {
  children: ReactNode;
}

export const CurrentOrderContext = createContext<OrderContextType>({
  orderId: 0,
  setOrderId: () => { }
})

export const OrderProvider: FC<CurrentOrderProviderProps> = ({ children }) => {
  const [orderId, setOrderId] = useState<number>(0);

  return (
    <CurrentOrderContext.Provider value={{ orderId, setOrderId }}>
      {children}
    </CurrentOrderContext.Provider>
  );
};