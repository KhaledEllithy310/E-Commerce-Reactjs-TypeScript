import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartProduct, IProduct } from "../../../interfaces";
import {
  addItemToCart,
  findCartItemById,
  notify,
} from "../../../helpers/Functions";
import { RootState } from "../../Store";

interface CartState {
  cartItems: ICartProduct[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartProduct | IProduct>) => {
      state.cartItems = addItemToCart(state.cartItems, action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload;
      });
      notify("success", "deleted successfully");
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const itemToIncrease = findCartItemById(state.cartItems, action.payload);
      if (itemToIncrease) itemToIncrease.quantity += 1;
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const itemToDecrease = findCartItemById(state.cartItems, action.payload);
      if (itemToDecrease && itemToDecrease.quantity > 1) {
        itemToDecrease.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export const cartSelector = ({ cart }: RootState) => cart;

export default cartSlice.reducer;
