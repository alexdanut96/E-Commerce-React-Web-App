import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./features/posts/PostsSlice";
import counterSlice from "./features/counter/CounterSlice";
import usersSlice from "./features/users/UsersSlice";
import shoppingCartSlice from "./features/shoppingCart/ShoppingCartSlice";
import quantitySlice from "./features/shoppingCart/QuantitySlice";
import toggleCartSlice from "./features/shoppingCart/cartToggleSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    counter: counterSlice,
    users: usersSlice,
    shoppingCart: shoppingCartSlice,
    quantity: quantitySlice,
    toggleCart: toggleCartSlice,
  },
});
