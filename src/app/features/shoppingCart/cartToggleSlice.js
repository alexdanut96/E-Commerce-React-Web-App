import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartToggle: false,
  menuToggle: false,
  buttonToggle: false,
};

const toggleCartSlice = createSlice({
  name: "toggleCart",
  initialState,
  reducers: {
    openCart(state) {
      state.cartToggle = true;
    },
    openMenu(state) {
      state.menuToggle = true;
    },
    closeCart(state) {
      state.cartToggle = false;
    },
    closeMenu(state) {
      state.menuToggle = false;
    },
    toggleCart(state) {
      state.cartToggle = !state.cartToggle;
    },
    toggleMenu(state) {
      state.menuToggle = !state.menuToggle;
    },
    disableButton(state) {
      state.buttonToggle = true;
    },
    enableButton(state) {
      state.buttonToggle = false;
    },
  },
});

export default toggleCartSlice.reducer;
export const {
  openCart,
  openMenu,
  closeCart,
  closeMenu,
  toggleCart,
  toggleMenu,
  disableButton,
  enableButton,
} = toggleCartSlice.actions;
