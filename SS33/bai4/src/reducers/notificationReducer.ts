import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Notice { type: "success" | "error" | "info"; message: string }
interface State { notifications: Notice[] }
const initialState: State = { notifications: [] };

const slice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (s, a: PayloadAction<Notice>) => { s.notifications.push(a.payload); },
    clearNotifications: (s) => { s.notifications = []; },
  },
});

export const { addNotification, clearNotifications } = slice.actions;
export default slice.reducer;
