import { configureStore } from "@reduxjs/toolkit"
import company from "./features/company/companySlice"

export const store = configureStore({
  reducer: { company }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
