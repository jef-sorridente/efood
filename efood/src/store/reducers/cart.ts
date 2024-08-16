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
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { add, remove, open, close } = cartSlice.actions;

export default cartSlice.reducer;
