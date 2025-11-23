import { configureStore, createSlice } from "@reduxjs/toolkit";
import Cart from "../cart";
import mySlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: mySlice,
  },
});
export default store;
