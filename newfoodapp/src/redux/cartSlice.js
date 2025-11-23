import { createSlice } from "@reduxjs/toolkit";
// import { IoNutrition } from "react-icons/io5";

const mySlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItme: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { AddItme } = mySlice.actions;
export default mySlice.reducer;
