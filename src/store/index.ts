import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';

export const rootReducer = {
  cart: cartReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
