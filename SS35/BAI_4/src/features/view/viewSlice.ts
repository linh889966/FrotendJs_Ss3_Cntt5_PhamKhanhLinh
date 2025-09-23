import { createSlice } from "@reduxjs/toolkit";

type ViewState = {
  mode: "list" | "grid";
  data: number[];
};

const initialState: ViewState = {
  mode: "list",
  data: [1, 2, 3, 4],
};

const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    toggleMode(state) {
      state.mode = state.mode === "list" ? "grid" : "list";
    },
    setMode(state, action: { payload: "list" | "grid" }) {
      state.mode = action.payload;
    },
  },
});

export const { toggleMode, setMode } = viewSlice.actions;
export default viewSlice.reducer;
