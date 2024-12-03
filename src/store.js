import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import { addProduct, clearCart, removeProduct, shoppingCartReducer } from "./features/shopping-cart/shoppingCartSlice";
import { setItem } from "./utils/local-storage";

const listenerMiddleWare = createListenerMiddleware();

listenerMiddleWare.startListening({
  matcher: (action) => 
    action.type === addProduct.type ||
    action.type === removeProduct.type ||
    action.type === clearCart.type,
    effect: (_, listenerApi) => {
      const state = listenerApi.getState();
      setItem('shoppingCart', JSON.stringify(state.shoppingCart));
    },
});

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(listenerMiddleWare.middleware)
})