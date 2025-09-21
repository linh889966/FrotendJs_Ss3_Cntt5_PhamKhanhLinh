import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "./productReducer";

export interface CartItem extends Product { quantity: number }
interface State { items: CartItem[] }
const initialState: State = { items: [] };

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (s, a: PayloadAction<CartItem>) => { s.items.push(a.payload); },
    removeFromCart: (s, a: PayloadAction<number>) => { s.items = s.items.filter(i => i.id !== a.payload); },
    clearCart: (s) => { s.items = []; },
  },
});

export const { addToCart, removeFromCart, clearCart } = slice.actions;
export default slice.reducer;
