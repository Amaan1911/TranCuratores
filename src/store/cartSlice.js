import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },

  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...item, qty: 1 });
      }
    },

    updateQty: (state, action) => {
      const { id, qty } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) item.qty = qty > 0 ? qty : 1;
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },

    clearCart: state => {
      state.items = [];
    },
  },
});

export const { addItem, updateQty, removeItem, clearCart } = cartSlice.actions;


export const selectCartItems = state => state.cart.items;
export const selectCartCount = state =>
  state.cart.items.reduce((total, i) => total + i.qty, 0);
export const selectCartTotal = state =>
  state.cart.items.reduce((total, i) => total + i.qty * i.price, 0);

export default cartSlice.reducer;
