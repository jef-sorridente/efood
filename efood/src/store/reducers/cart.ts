import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cardapio } from "../../Pages/Home";

type CartState = {
  items: Cardapio[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const pedido = state.items.find((item) => item.id === action.payload.id);

      if (!pedido) {
        state.items.push(action.payload);
      } else {
        alert("Este item já está no carrinho!");
      }
    },

    open: (state) => {
      state.isOpen = true;
    },

    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    close: (state) => {
      state.isOpen = false;
    },

    clear: (state) => {
      state.items = [];
    },
  },
});

export const { add, open, remove, close, clear } = cartSlice.actions;

export default cartSlice.reducer;
