import { toast } from "react-toastify";
import { ICartProduct, IProduct } from "../interfaces";

export const notify = (status: string, massage: string) => {
  switch (status) {
    case "success":
      toast.success(massage);
      break;
    case "warning":
      toast.warning(massage);
      break;
    case "error":
      toast.error(massage);
      break;
  }
};

export const storeInLocalStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getDataFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  if (item) return JSON.parse(item);
  else return false;
};

export const addItemToCart = (
  cartItems: ICartProduct[],
  product: ICartProduct | IProduct
): ICartProduct[] => {
  const exits = cartItems.find((item: ICartProduct) => item.id === product.id);
  // console.log("exits", exits);

  if (exits) {
    console.log("exits", exits);
    return cartItems.map((item: ICartProduct) =>
      item.id === product.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
  }

  return [...cartItems, { ...(product as IProduct), quantity: 1 }];
};

export const findCartItemById = (
  cartItems: ICartProduct[],
  itemId: number
): ICartProduct | undefined => {
  return cartItems.find((item) => item.id === itemId);
};
