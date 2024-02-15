import { createSlice } from "@reduxjs/toolkit";
import {
  getDataFromLocalStorage,
  removeFromLocalStorage,
  storeInLocalStorage,
} from "../../../helpers/Functions";
import { RootState } from "../../Store";

interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: getDataFromLocalStorage("isAuth") || false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      storeInLocalStorage("isAuth", true);
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      removeFromLocalStorage("isAuth");
    },
  },
});

export const { login, logOut } = authSlice.actions;
export const authSelector = ({ auth }: RootState) => auth;

export default authSlice.reducer;
