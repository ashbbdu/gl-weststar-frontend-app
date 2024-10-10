import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingData: [],
};

const shippingSlice = createSlice({
  name: "shipping",
  initialState: initialState,
  reducers: {
    setShippingData(state, value) {
      state.shippingData = value.payload;
    },

  },
});

export const {
    setShippingData
} = shippingSlice.actions;

export default shippingSlice.reducer;