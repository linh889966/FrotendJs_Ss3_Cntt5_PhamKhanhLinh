import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, Product } from "../../types";
import type { RootState } from "../../store";

type CartState = { items: CartItem[]; notice: string | null };

const initialState: CartState = { items: [], notice: null };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const p = action.payload;
      const found = state.items.find((i) => i.id === p.id);
      if (found) found.qty += 1;
      else state.items.push({ id: p.id, name: p.name, price: p.price, qty: 1 });
      state.notice = "Add to cart successfully";
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    updateQty(state, action: PayloadAction<{ id: number; qty: number }>) {
      const { id, qty } = action.payload;
      const it = state.items.find((i) => i.id === id);
      if (it) it.qty = Math.max(1, qty);
    },
    clearNotice(state) {
      state.notice = null;
    },
  },
});

export const { addToCart, removeItem, updateQty, clearNotice } = cartSlice.actions;

export const selectCart = (s: RootState) => s.cart.items;
export const selectSubtotal = (s: RootState) =>
  s.cart.items.reduce((sum, it) => sum + it.price * it.qty, 0);
export const selectNotice = (s: RootState) => s.cart.notice;

export default cartSlice.reducer;
