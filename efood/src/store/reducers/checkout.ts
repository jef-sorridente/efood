import { createSlice } from "@reduxjs/toolkit";

type CheckoutState = {
  isOpen: boolean;
};

const initialState: CheckoutState = {
  isOpen: false,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = checkoutSlice.actions;

export default checkoutSlice.reducer;
