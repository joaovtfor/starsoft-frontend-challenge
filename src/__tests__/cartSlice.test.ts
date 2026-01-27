import cartReducer, {
  addToCart,
  removeFromCart,
  updateQuantity,
} from '@/store/slices/cartSlice';

const initialState = { items: [] };
const product = { id: 1, name: 'NFT', price: 10, image: '', description: '' };

describe('Cart Slice', () => {
  it('deve adicionar um item ao carrinho', () => {
    const state = cartReducer(initialState, addToCart(product));
    expect(state.items).toHaveLength(1);
    expect(state.items[0].quantity).toBe(1);
  });

  it('deve aumentar a quantidade se o item já existe', () => {
    const stateWithItem = { items: [{ ...product, quantity: 1 }] };
    const state = cartReducer(stateWithItem, addToCart(product));
    expect(state.items[0].quantity).toBe(2);
  });

  it('deve remover um item', () => {
    const stateWithItem = { items: [{ ...product, quantity: 1 }] };
    const state = cartReducer(stateWithItem, removeFromCart(1));
    expect(state.items).toHaveLength(0);
  });
});
