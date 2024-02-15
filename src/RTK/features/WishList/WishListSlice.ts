import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../interfaces";
import {
  addItemToWishList,
  getDataFromLocalStorage,
  storeInLocalStorage,
} from "../../../helpers/Functions";
import { RootState } from "../../Store";

interface wishListState {
  wishListItems: IProduct[];
}

const initialState: wishListState = {
  wishListItems: getDataFromLocalStorage("wishList") || [],
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<IProduct>) => {
      state.wishListItems = addItemToWishList(
        state.wishListItems,
        action.payload
      );
      storeInLocalStorage("wishList", state.wishListItems);
    },
    removeFromWishList: (state, action: PayloadAction<number>) => {
      state.wishListItems = state.wishListItems.filter((item) => {
        return item.id !== action.payload;
      });
      storeInLocalStorage("wishList", state.wishListItems);
    },
    clearWishList: (state) => {
      state.wishListItems = [];
      storeInLocalStorage("wishList", state.wishListItems);
    },
  },
});

export const { addToWishList, clearWishList, removeFromWishList } =
  wishListSlice.actions;
export const wishListSelector = ({ wishList }: RootState) => wishList;

export default wishListSlice.reducer;
