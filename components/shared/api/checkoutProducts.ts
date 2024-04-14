import { ICheckoutOrder } from "../types";

export const checkoutProducts = async (checkoutOrder: ICheckoutOrder) => {
  const order = JSON.stringify(checkoutOrder);
  const res = await fetch(`http://o-complex.com:1337/order`, {
    method: "POST",
    body: order,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Error in checkout order");
  }
  return res.json();
};
