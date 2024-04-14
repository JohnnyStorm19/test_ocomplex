import { ICart, ICartProduct, IProduct } from "@/components/shared/types";

interface IHandleProductCount {
  cartProducts: ICart;
  setCart: (value: React.SetStateAction<ICart>) => void;
  action: "decrement" | "increment" | "addToCart";
  productData: IProduct;
  productInCart: ICartProduct | undefined;
}

export const handleProductCount = ({
  cartProducts,
  setCart,
  action,
  productData,
  productInCart,
}: IHandleProductCount) => {
  if (action === "addToCart") {
    const newProducts = {
      products: [...cartProducts.products, { ...productData, quantity: 1 }],
    };
    localStorage.setItem("cartProducts", JSON.stringify(newProducts));
    setCart(newProducts);
  }
  if (action === "increment" && productInCart) {
    const newQuantity = (productInCart.quantity += 1);
    const newProducts = {
      products: cartProducts.products.map((product) =>
        product.id === productData.id
          ? { ...product, quantity: newQuantity }
          : product
      ),
    };
    localStorage.setItem("cartProducts", JSON.stringify(newProducts));
    setCart(newProducts);
  }
  if (action === "decrement" && productInCart) {
    const newQuantity = (productInCart.quantity -= 1);
    const newProducts = {
      products: cartProducts.products.map((product) =>
        product.id === productData.id
          ? { ...product, quantity: newQuantity }
          : product
      ),
    };
    localStorage.setItem("cartProducts", JSON.stringify(newProducts));
    setCart(newProducts);
  }
};
