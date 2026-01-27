import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct, ICartItem } from '@/types';
import { RootState } from '@/store';

interface CartState {
  items: ICartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; delta: number }>,
    ) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        const newQuantity = item.quantity + action.payload.delta;
        item.quantity = newQuantity < 1 ? 1 : newQuantity;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartCount = (state: RootState) =>
  state.cart.items.reduce(
    (acc: number, item: ICartItem) => acc + item.quantity,
    0,
  );

export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce(
    (acc: number, item: ICartItem) => acc + item.price * item.quantity,
    0,
  );

export default cartSlice.reducer;
