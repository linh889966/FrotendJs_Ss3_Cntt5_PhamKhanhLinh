import { createSlice } from "@reduxjs/toolkit";

type MenuState = { collapsed: boolean };

const initialState: MenuState = { collapsed: false };

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu(state) { state.collapsed = !state.collapsed; },
    setCollapsed(state, action: { payload: boolean }) {
      state.collapsed = action.payload;
    },
  },
});

export const { toggleMenu, setCollapsed } = menuSlice.actions;
export default menuSlice.reducer;
