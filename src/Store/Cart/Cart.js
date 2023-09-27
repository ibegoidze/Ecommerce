import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isLoading: [],
  error: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    },
    removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
    },
    // Add more actions like updateQuantity, clearCart, etc. as needed
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
