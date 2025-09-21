import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Notification {
  type: "success" | "error" | "info";
  message: string;
}

interface NotificationState {
  notifications: Notification[];
}

const initialState: NotificationState = {
  notifications: [],
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications.push(action.payload);
    },
    clearNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const { addNotification, clearNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;
