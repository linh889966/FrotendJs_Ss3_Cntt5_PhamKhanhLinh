import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product { id: number; name: string; price: number }
interface State { products: Product[] }
const initialState: State = { products: [] };

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (s, a: PayloadAction<Product[]>) => { s.products = a.payload; },
    addProduct: (s, a: PayloadAction<Product>) => { s.products.push(a.payload); },
    removeProduct: (s, a: PayloadAction<number>) => { s.products = s.products.filter(p => p.id !== a.payload); },
  },
});

export const { setProducts, addProduct, removeProduct } = slice.actions;
export default slice.reducer;
