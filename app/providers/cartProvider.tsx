"use client";
import { Toast } from '@/lib/toast';
import { createContext, useState, useContext } from 'react';

type CartContextType = {
  cartTotal: number;
  addToCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export  function CartProvider({ children }: {children: React.ReactNode}){
  const [cartTotal, setCartTotal] = useState(0);
  function addToCart() { 
    setCartTotal((prev) => prev + 1);
    Toast.default("Added to cart");
  }

  return (
    <CartContext.Provider value={{ cartTotal, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used in the CartProvider");
  return context;
}