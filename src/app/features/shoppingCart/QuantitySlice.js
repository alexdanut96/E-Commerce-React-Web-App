import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantity: 0,
};

const quantitySlice = createSlice({
  name: "quantity",
  initialState,
  reducers: {
    increase(state) {
      state.quantity += 1;
    },
    decrease(state) {
      state.quantity -= 1;
    },
    reset(state) {
      state.quantity = 0;
    },
  },
});

export default quantitySlice.reducer;
export const { increase, decrease, reset } = quantitySlice.actions;
