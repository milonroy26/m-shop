"use client";
import { useState } from "react";
import { createContext } from "vm";

type CartContextType = {
  cartTotalQty: number;
};

export const CartContext = createContext({} as CartContextType);

export const CartContextprovider = () => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const value = {
    cartTotalQty,
  };
  return <CartContext.Provier value={value} />;
};
