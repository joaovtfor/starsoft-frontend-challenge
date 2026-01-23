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
  },
});

export const { addToCart } = cartSlice.actions;

export const selectCartCount = (state: RootState) =>
  state.cart.items.reduce(
    (acc: number, item: ICartItem) => acc + item.quantity,
    0,
  );

export default cartSlice.reducer;
