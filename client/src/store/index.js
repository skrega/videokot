import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './filterSlice';
import cartSlice from "./cartSlice";

export default configureStore({
    reducer: {
        filter: filterReducer,
        cart: cartSlice
    }
})