"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ICart } from "../../types";

const useCartState = () =>
  useState<ICart>({
    products: [],
  });

export const CartContext = createContext<ReturnType<
  typeof useCartState
> | null>(null);

export const useCart = () => {
  const cart = useContext(CartContext);
  if (!cart) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return cart;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useCartState();

  useEffect(() => {
    let storage = window.localStorage.getItem("cartProducts");
    if (storage != null) {
      let storageParsed = JSON.parse(storage);
      setCart(storageParsed);
    }
  }, [setCart]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};
