import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isLoading: false,
  removeFromCartIsLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCartStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    addToCartSuccess: (state, action) => {
      state.isLoading = false;
    },
    addToCartFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    removeFromCartStart: (state) => {
      state.isLoading = true;
      state.error = null;
      state.removeFromCartIsLoading = true
    },
    removeFromCartSuccess: (state, action) => {
      state.isLoading = false;
      state.cartItems = state.cartItems.filter((item) => item.productId !== action.payload);
      state.removeFromCartIsLoading = false
    },
    removeFromCartFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.removeFromCartIsLoading = false
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    getCartProductsStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getCartProductsSuccess: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    getCartProductsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addToCartStart,
  addToCartSuccess,
  addToCartFailure,
  removeFromCartStart,
  removeFromCartSuccess,
  removeFromCartFailure,
  clearCart,
  getCartProductsStart,  
  getCartProductsSuccess,
  getCartProductsFailure,
} = cartSlice.actions;

export const addToCart = (product) => async (dispatch) => {
  dispatch(addToCartStart());
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await fetch(
      "https://amazon-digital-prod.azurewebsites.net/api/cart/addincart",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: product.id }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      dispatch(addToCartSuccess(product));
    } else {
      const errorData = await response.json();
      dispatch(addToCartFailure(errorData));
    }
  } catch (error) {
    dispatch(addToCartFailure("An error occurred while adding to cart."));
  }
};

export const removeFromCart = (productId) => async (dispatch) => {
  dispatch(removeFromCartStart());
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await fetch(
      "https://amazon-digital-prod.azurewebsites.net/api/cart/removefromcart",
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      }
    );
    if (response.ok) {
      dispatch(removeFromCartSuccess(productId));
    } else {
      const errorData = await response.json();
      dispatch(removeFromCartFailure(errorData));
    }
  } catch (error) {
    dispatch(
      removeFromCartFailure("An error occurred while removing from the cart.")
    );
  }
};

export const getCartProducts = () => async (dispatch) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const response = await fetch(
      "https://amazon-digital-prod.azurewebsites.net/api/cart/getmycartproducts",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      dispatch(getCartProductsSuccess(data));
    } else {
      const errorData = await response.json();
      dispatch(getCartProductsFailure(errorData));
    }
  } catch (error) {
    dispatch(getCartProductsFailure("An error occurred while fetching cart products."));
  }
};


export default cartSlice.reducer;
