import { ICart } from "@/components/shared/types";

export const deleteProductFromCart = (cart: ICart, productId: number) => {
  localStorage.setItem('cartProducts', JSON.stringify(cart.products.filter((product) => product.id != productId)))
  return {
    products: cart.products.filter((product) => product.id != productId),
  };
};
