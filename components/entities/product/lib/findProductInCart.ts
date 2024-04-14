import { ICart } from "@/components/shared/types";

export const findProductInCart = (cart: ICart, id: number) => {
    return cart.products.find(product => product.id === id);
}