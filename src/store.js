import { configureStore } from "@reduxjs/toolkit";
import { shoppingCartReducer } from "./features/shopping-cart/shoppingCartSlice";

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer
  }
})