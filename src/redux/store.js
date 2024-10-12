import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/authSlice";
import shippingSlice from "../redux/slices/shippingSlice";
import themeReducer from "../redux/themeSlice";


export const store = configureStore({
    reducer: {
      theme: themeReducer,
      auth: authReducer,
      shipping: shippingSlice,
    },
  });