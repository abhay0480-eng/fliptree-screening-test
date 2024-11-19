import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import authStoreReducer from './authStoreSlice'
import productsReducer from './productsSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authStoreReducer,
    products: productsReducer,
  },
})