import { ICart } from "@/components/shared/types";
import toast from "react-hot-toast";

export const afterSuccessCheckout = (
  setCart: (value: React.SetStateAction<ICart>) => void
) => {
  localStorage.removeItem("tel");
  localStorage.removeItem("cartProducts");
  setCart({ products: [] });

  toast.success('Заказ успешно сформирован!')
};
