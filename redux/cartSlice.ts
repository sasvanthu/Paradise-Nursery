
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { CartItem, Plant } from '../types';

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Plant>) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else if (item && item.quantity === 1) {
        state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload);
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectCartTotalItems = (state: RootState) => 
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotalAmount = (state: RootState) =>
  state.cart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
export const selectIsInCart = (id: number) => (state: RootState) => 
  state.cart.cartItems.some(item => item.id === id);


export default cartSlice.reducer;
