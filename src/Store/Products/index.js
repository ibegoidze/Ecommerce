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
  isLoading: false,
  error: null, 
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearProducts: (state) => {
      state.products = []; 
    },
    removeProducts: (state, action) => {
      state.products = state.products.filter((item) => item.id !== action.payload); 
    },
  },
  extraReducers: {
    [productsData.pending]: (state) => {
      state.isLoading = true;
      state.error = null; 
    },
    [productsData.fulfilled]: (state, action) => { 
      state.products = action.payload 
      state.isLoading = false;
      state.error = null; 
    },
    [productsData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload; 
    },
  },
});

export const { clearProducts, removeProducts } = productsSlice.actions;

export default productsSlice.reducer;
