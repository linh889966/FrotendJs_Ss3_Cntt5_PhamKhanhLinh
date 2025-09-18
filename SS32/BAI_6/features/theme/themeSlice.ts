import { createSlice } from "@reduxjs/toolkit"

type ThemeState = { dark: boolean }
const initialState: ThemeState = { dark: false }

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: state => {
      state.dark = !state.dark
      localStorage.setItem("darkMode", String(state.dark))
    },
    setTheme: (state, action) => {
      state.dark = action.payload
    }
  }
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer
