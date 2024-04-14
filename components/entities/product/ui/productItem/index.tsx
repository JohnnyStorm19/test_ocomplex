"use client";

import React, { useState } from "react";
import Image from "next/image";

import { IProduct } from "@/components/shared/types";
import { MyButton, MyCounter } from "@/components/shared/ui";
import { useCart } from "@/components/shared/providers";
import {
  findProductInCart,
  deleteProductFromCart,
  handleProductCount,
} from "../../lib/";
import toast from "react-hot-toast";

interface ProductProps {
  productData: IProduct;
  innerRef?: (node?: Element | null | undefined) => void;
}

export const Product = ({ productData, innerRef }: ProductProps) => {
  const { image_url, title, description, price } = productData;
  const [cart, setCart] = useCart();
  const productInCart = findProductInCart(cart, productData.id);

  const [inCart, setIncart] = useState(productInCart || false);
  const [quantity, setQuantity] = useState(productInCart?.quantity || 0);

  const addToCart = () => {
    setIncart(!inCart);
    setQuantity((prev) => (prev += 1));

    handleProductCount({
      cartProducts: cart,
      action: "addToCart",
      productData,
      productInCart,
      setCart,
    });

    toast.success('Товар добавлен в корзину!')
  };

  const handleCounter = (type: "increment" | "decrement") => {
    if (type === "decrement" && quantity === 1) {
      setQuantity((prev) => (prev -= 1));
      setIncart(!inCart);

      setCart(deleteProductFromCart(cart, productData.id));
      return;
    } else if (type === "decrement") {
      setQuantity((prev) => (prev -= 1));

      handleProductCount({
        cartProducts: cart,
        action: "decrement",
        productData,
        productInCart,
        setCart,
      });
      return;
    }
    setQuantity((prev) => (prev += 1));

    handleProductCount({
      cartProducts: cart,
      action: "increment",
      productData,
      productInCart,
      setCart,
    });
  };

  return (
    <div
      className="p-3 flex flex-col gap-4 items-center justify-between bg-items-bg rounded-2xl"
      ref={innerRef}
    >
      <Image
        src={image_url}
        alt={title}
        width={500}
        height={300}
        className="rounded-2xl w-full h-auto"
      />
      <h3 className="font-bold text-center text-2xl break-all">{title}</h3>
      <p className="text-sm lg:text-basis">{description}</p>

      <div className="w-full">
        <span className="text-center mx-auto mb-4 text-xl lg:text-3xl">
          цена: {price}₽
        </span>

        {inCart ? (
          <MyCounter
            count={quantity}
            handler={handleCounter}
            setCounter={setQuantity}
          />
        ) : (
          <MyButton handler={addToCart}>купить</MyButton>
        )}
      </div>
    </div>
  );
};
