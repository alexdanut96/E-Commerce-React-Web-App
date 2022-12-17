import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./features/posts/PostsSlice";
import usersSlice from "./features/users/UsersSlice";
import shoppingCartSlice from "./features/shoppingCart/ShoppingCartSlice";
import toggleCartSlice from "./features/shoppingCart/cartToggleSlice";
import fetchedDataSlice from "./features/fetched data/FetchedDataSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    users: usersSlice,
    shoppingCart: shoppingCartSlice,
    toggleCart: toggleCartSlice,
    products: fetchedDataSlice,
  },
});
