import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shoppingCart: localStorage.getItem("shoppingCart")
    ? JSON.parse(localStorage.getItem("shoppingCart"))
    : [],
  quantity: localStorage.getItem("quantity")
    ? JSON.parse(localStorage.getItem("quantity"))
    : 0,
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    incrementProductList(state, action) {
      const itemIndex = state.shoppingCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.shoppingCart[itemIndex].quantity += 1;
      } else {
        const tempVar = { ...action.payload, quantity: 1 };
        state.shoppingCart.push(tempVar);
      }
      state.quantity = state.shoppingCart.reduce(
        (quantity, item) => item.quantity + quantity,
        0
      );
      localStorage.setItem("shoppingCart", JSON.stringify(state.shoppingCart));
      localStorage.setItem("quantity", JSON.stringify(state.quantity));
    },
    decrementProductList(state, action) {
      const itemIndex = state.shoppingCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.shoppingCart[itemIndex].quantity === 1) {
        const tempVar = state.shoppingCart.filter(
          (item) => item.id !== action.payload.id
        );
        state.shoppingCart = [...tempVar];
      } else {
        state.shoppingCart[itemIndex].quantity -= 1;
      }
      state.quantity = state.shoppingCart.reduce(
        (quantity, item) => item.quantity + quantity,
        0
      );
      localStorage.setItem("shoppingCart", JSON.stringify(state.shoppingCart));
      localStorage.setItem("quantity", JSON.stringify(state.quantity));
    },
    removeItem(state, action) {
      const tempVar = state.shoppingCart.filter(
        (item) => item.id !== action.payload.id
      );
      state.shoppingCart = [...tempVar];
      state.quantity = state.shoppingCart.reduce(
        (quantity, item) => item.quantity + quantity,
        0
      );
      localStorage.setItem("shoppingCart", JSON.stringify(state.shoppingCart));
      localStorage.setItem("quantity", JSON.stringify(state.quantity));
    },
  },
});

export default shoppingCartSlice.reducer;
export const { incrementProductList, decrementProductList, removeItem } =
  shoppingCartSlice.actions;
