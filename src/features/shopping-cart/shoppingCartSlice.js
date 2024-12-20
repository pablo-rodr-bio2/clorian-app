import { createSlice } from "@reduxjs/toolkit"
import { getItem, removeItem } from "../../utils/local-storage";

const defaultInitialValues = {
  products: [],
  total: 0,
};

const loadCartFromLocalStorage = () => {
  const savedCart = getItem('shoppingCart');
  if(!savedCart) {
    return defaultInitialValues
  }

  const parsedCart = JSON.parse(savedCart);
  return {
    products: parsedCart.products || [],
    total: parsedCart.total || 0,
  }
};

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: loadCartFromLocalStorage(),
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload
      const existingProduct = state.products.find(p => p.product.id === product.id)
      if (existingProduct) {
        const newQuantity = existingProduct.quantity + product.quantity;
        if (newQuantity > 10) {
         existingProduct.quantity = 10;
        } else {
         existingProduct.quantity = newQuantity;
        }
        existingProduct.subtotal = existingProduct.quantity * existingProduct.product.cost
      } else {
        state.products.push({
          product: product,
          quantity: product.quantity,
          subtotal: product.cost * product.quantity,
        })
      }
      state.total = state.products.reduce((acc, p) => acc + p.subtotal, 0)
    },
    removeProduct: (state, action) => {
      const productId = action.payload
      const existingProduct = state.products.find(p => p.product.id === productId)
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity--
          existingProduct.subtotal = existingProduct.quantity * existingProduct.product.price
        } else {
          state.products = state.products.filter(p => p.product.id !== productId)
        }
        state.total = state.products.reduce((acc, p) => acc + p.subtotal, 0)
      }
    },
    clearCart: (state) => {
      state.products = []
      state.total = 0
      removeItem('shoppingCart');
    },
  },
})

export const { addProduct, removeProduct, clearCart } = shoppingCartSlice.actions

export const shoppingCartReducer = shoppingCartSlice.reducer