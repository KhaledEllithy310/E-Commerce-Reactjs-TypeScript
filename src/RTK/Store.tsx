import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import CartSlice from "./features/Cart/CartSlice";
import orderSlice from "./features/Order/OrderSlice";
import authSlice from "./features/Auth/Auth";
import wishListSlice from "./features/WishList/WishListSlice";
// ...
const store = configureStore({
  reducer: {
    cart: CartSlice,
    order: orderSlice,
    auth: authSlice,
    wishList: wishListSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
