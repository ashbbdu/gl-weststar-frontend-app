import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import authReducer from "./redux/slices/authSlice";
import shippingSlice from "./redux/slices/shippingSlice";
import themeReducer from "./redux/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    shipping: shippingSlice,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
