import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const productsData = createAsyncThunk(
  "products/productsData",
  async (asyncParams) => {
    const { category, priceFrom, priceTo } = asyncParams;
    return fetch(
      `https://amazon-digital-prod.azurewebsites.net/api/product/products?CategoryId=${category ? category : ''}&PriceFrom=${priceFrom ? priceFrom : ''}&PriceTo=${priceTo ? priceTo : ''}`
    )
      .then((res) => res.json())
      .catch((e) => console.log(e));
  }
);

const initialState = {
  products: [],
  isLoading: false, // Changed to boolean
  error: null, // Changed to null
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearProducts: (state) => {
      state.products = []; // Updated to state.products
    },
    removeProducts: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload); // Updated to state.products and fixed filter typo
    },
  },
  extraReducers: {
    [productsData.pending]: (state) => {
      state.isLoading = true;
      state.error = null; // Updated to null
    },
    [productsData.fulfilled]: (state, action) => { // Updated to action
      state.products = action.payload // Updated to action.payload.data
      state.isLoading = false;
      state.error = null; // Updated to null
    },
    [productsData.rejected]: (state, action) => { // Updated to action
      state.isLoading = false;
      state.error = action.payload; // Updated to action.payload
    },
  },
});

export const { clearProducts, removeProducts } = productsSlice.actions;

export default productsSlice.reducer;
