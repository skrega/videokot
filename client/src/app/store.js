import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import filterReducer from './filterReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
});

export default store;