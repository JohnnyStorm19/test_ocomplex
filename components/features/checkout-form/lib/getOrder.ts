import { ICart } from "@/components/shared/types";

export const getOrder = (tel: string, cart: ICart) => {
  return {
    phone: tel.replace(/\D/g, ''),
    cart: cart.products.map((product) => {
      return { id: product.id, quantity: product.quantity };
    }),
  };
};
