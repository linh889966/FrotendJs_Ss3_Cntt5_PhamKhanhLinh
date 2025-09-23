import { createSlice } from "@reduxjs/toolkit";

type LanguageState = {
  current: "en" | "vi";
};

const initialState: LanguageState = { current: "en" };

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage(state, action: { payload: "en" | "vi" }) {
      state.current = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
