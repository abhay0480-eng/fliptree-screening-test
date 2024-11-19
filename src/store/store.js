import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import authStoreReducer from './authStoreSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authStoreReducer,
  },
})