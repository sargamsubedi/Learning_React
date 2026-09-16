import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
const store = configureStore({
    cart:cartReducer
})

export default store;