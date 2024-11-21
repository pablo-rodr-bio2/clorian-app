import { createSlice } from "@reduxjs/toolkit"

const initialValue = {
  products: [
    {
      product: {
        id: 1,
        name: 'Product 1',
        price: 10,
      },
      quantity: 2,
      subtotal: 20,
    }
  ],
  total: 20,
}

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: initialValue,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload
      const existingProduct = state.products.find(p => p.product.id === product.id)
      if (existingProduct) {
        existingProduct.quantity++
        existingProduct.subtotal = existingProduct.quantity * existingProduct.product.price
      } else {
        state.products.push({
          product: product,
          quantity: 1,
          subtotal: product.price,
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
    },
  },
})

export const { addProduct, removeProduct, clearCart } = shoppingCartSlice.actions

export const shoppingCartReducer = shoppingCartSlice.reducer