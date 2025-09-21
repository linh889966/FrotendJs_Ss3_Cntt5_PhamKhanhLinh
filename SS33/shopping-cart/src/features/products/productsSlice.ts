import { createSlice } from '@reduxjs/toolkit';
import type { Product } from '../../types';

type ProductsState = { items: Product[] };

const initialState: ProductsState = {
  items: [
    { id: 1, name: 'Pizza',      price: 30, img: 'https://picsum.photos/seed/pizza/80' },
    { id: 2, name: 'Hamburger',  price: 15, img: 'https://picsum.photos/seed/burger/80' },
    { id: 3, name: 'Bread',      price: 20, img: 'https://picsum.photos/seed/bread/80' },
    { id: 4, name: 'Cake',       price: 10, img: 'https://picsum.photos/seed/cake/80' },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
