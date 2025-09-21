import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/productReducer";
import cartReducer from "../reducers/cartReducer";
import notificationReducer from "../reducers/notificationReducer";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    notifications: notificationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
