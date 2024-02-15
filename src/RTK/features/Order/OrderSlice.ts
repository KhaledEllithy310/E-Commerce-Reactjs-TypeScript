import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../Store";

interface OrderState {
  isFormShowed: boolean;
  isOrderDone: boolean;
}

const initialState: OrderState = {
  isFormShowed: false,
  isOrderDone: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    checkout: (state) => {
      state.isFormShowed = true;
    },
    confirmPayment: (state, action: PayloadAction<boolean>) => {
      state.isOrderDone = action.payload;
      state.isFormShowed = false;
    },
  },
});

export const { checkout, confirmPayment } = orderSlice.actions;
export const orderSelector = ({ order }: RootState) => order;

export default orderSlice.reducer;
