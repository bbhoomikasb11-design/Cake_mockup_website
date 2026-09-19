import React, { createContext, useContext, useState } from 'react';
import { trackEvent } from '@/lib/analytics';

export interface OrderInitialData {
  cakeName?: string;
  flavour?: string;
  category?: string;
  image?: string;
}

interface OrderContextType {
  isOpen: boolean;
  initialData: OrderInitialData;
  openOrder: (data?: OrderInitialData) => void;
  closeOrder: () => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState<OrderInitialData>({});

  const openOrder = (data: OrderInitialData = {}) => {
    setInitialData(data);
    setIsOpen(true);
    trackEvent('order_modal_opened', {
      cake_name: data.cakeName || 'general',
      flavour: data.flavour || 'unspecified',
    });
  };

  const closeOrder = () => {
    setIsOpen(false);
    setInitialData({});
  };

  return (
    <OrderContext.Provider value={{ isOpen, initialData, openOrder, closeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
