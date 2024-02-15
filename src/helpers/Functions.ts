import { toast } from "react-toastify";
import { ICartProduct, IProduct } from "../interfaces";

//========== Notification Handlers ===========//

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

//========== LocalStorage Handlers ===========//

export const storeInLocalStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getDataFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  if (item) return JSON.parse(item);
};

export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

//========== Cart Handlers ===========//

export const addItemToCart = (
  cartItems: ICartProduct[],
  product: ICartProduct | IProduct
): ICartProduct[] => {
  const exits = cartItems.find((item: ICartProduct) => item.id === product.id);
  if (exits) {
    console.log("exits", exits);
    notify("success", "increment quantity successfully");
    return cartItems.map((item: ICartProduct) =>
      item.id === product.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
  }
  notify("success", "added to cart successfully");
  return [...cartItems, { ...(product as IProduct), quantity: 1 }];
};

export const addItemToCartFromWishList = (
  cartItems: ICartProduct[],
  product: ICartProduct | IProduct
): ICartProduct[] => {
  const exits = cartItems.find((item: ICartProduct) => item.id === product.id);
  if (exits) {
    notify("error", "this item already exists in cart");
    return cartItems;
  }
  notify("success", "added to cart successfully");
  
  return [...cartItems, { ...(product as IProduct), quantity: 1 }];
};

export const findCartItemById = (
  cartItems: ICartProduct[],
  itemId: number
): ICartProduct | undefined => {
  return cartItems.find((item) => item.id === itemId);
};

export const calculateCartTotal = (cartItems: ICartProduct[]): number => {
  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });
  return +totalPrice.toFixed(2);
};

//========== WishList Handlers ===========//

export const findWishListItemById = (
  wishListItems: IProduct[],
  itemId: number
): IProduct | undefined => {
  return wishListItems.find((item) => item.id === itemId);
};

export const addItemToWishList = (
  wishListItems: IProduct[],
  product: IProduct
): IProduct[] => {
  const exits = wishListItems.find((item: IProduct) => item.id === product.id);
  if (exits) {
    notify("error", "this product already exists in wish list");
    return wishListItems;
  } else {
    notify("success", "added to wish list successfully");
  }
  return [...wishListItems, { ...(product as IProduct) }];
};
