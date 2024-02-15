import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartProduct, IProduct } from "../../../interfaces";
import {
  addItemToCart,
  addItemToCartFromWishList,
  findCartItemById,
  getDataFromLocalStorage,
  notify,
  storeInLocalStorage,
} from "../../../helpers/Functions";
import { RootState } from "../../Store";

interface CartState {
  cartItems: ICartProduct[];
}

const initialState: CartState = {
  cartItems: getDataFromLocalStorage("cart") || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartProduct | IProduct>) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
      storeInLocalStorage("cart", state.cartItems);
    },
    addToCartFromWish: (
      state,
      action: PayloadAction<ICartProduct | IProduct>
    ) => {
      state.cartItems = addItemToCartFromWishList(
        state.cartItems,
        action.payload
      );
      storeInLocalStorage("cart", state.cartItems);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload;
      });
      storeInLocalStorage("cart", state.cartItems);
      notify("success", "deleted successfully");
    },
    clearCart: (state) => {
      state.cartItems = [];
      storeInLocalStorage("cart", state.cartItems);
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const itemToIncrease = findCartItemById(state.cartItems, action.payload);
      if (itemToIncrease) itemToIncrease.quantity += 1;
      storeInLocalStorage("cart", state.cartItems);
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const itemToDecrease = findCartItemById(state.cartItems, action.payload);
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
      }
      storeInLocalStorage("cart", state.cartItems);
    },
  },
});

export const {
  addToCart,
  addToCartFromWish,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export const cartSelector = ({ cart }: RootState) => cart;

export default cartSlice.reducer;
