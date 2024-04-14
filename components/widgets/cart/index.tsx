"use client";

import React from "react";
import { useCart } from "@/components/shared/providers";
import { CheckoutForm } from "@/components/features";

export const Cart = () => {
  const [cart] = useCart();

  return (
    <div className="w-full lg:w-1/2 mx-auto p-4 bg-items-bg rounded-2xl">
      <h3 className="font-bold text-left text-xl lg:text-2xl break-word">
        Добавленные товары
      </h3>
      {cart.products.length === 0 && <span>Корзина пуста</span>}

      <div className="flex flex-col gap-4">
        {cart.products.map((product) => {
          return (
            <div key={product.id} className="flex gap-2 items-center">
              <h4 className="italic text-sm lg:text-lg break-all">
                {product.title}
              </h4>
              <span className="font-bold">X{product.quantity}</span>
              <span className="font-bold">{product.price * product.quantity}₽</span>
            </div>
          );
        })}
      </div>

      {cart.products.length > 0 && <CheckoutForm />}
    </div>
  );
};
