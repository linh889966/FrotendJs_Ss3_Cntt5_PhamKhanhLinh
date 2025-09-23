import { createSlice } from "@reduxjs/toolkit";

type NumbersState = {
  list: number[];
};

const initialState: NumbersState = {
  list: [],
};

const numbersSlice = createSlice({
  name: "numbers",
  initialState,
  reducers: {
    generateList(state) {
      // Tạo 4 số nguyên ngẫu nhiên 0..10
      const rand = Array.from({ length: 4 }, () => Math.floor(Math.random() * 11));
      state.list = rand;
    },
    clearList(state) {
      state.list = [];
    },
  },
});

export const { generateList, clearList } = numbersSlice.actions;
export default numbersSlice.reducer;
