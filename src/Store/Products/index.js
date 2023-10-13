import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const productsData = createAsyncThunk(
  "products/productsData",
  async () => {
    return fetch(
      "https://amazon-digital-prod.azurewebsites.net/api/product/products"
    ).then((res) => res.json().catch((e) => console.log(e)));
  }
);

const initialState = {
  products: [],
  isLoading: [],
  error: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearProducts: (state) => {
      state.items = [];
    },
    removeProducts: (state, action) => {
      state.items = state.items.fillter((item) => item.id !== action.payload);
    },
  },
  extraReducers: {
    [productsData.pending]: (state) => {
      state.isLoading = true;
      state.error = [];
    },
    [productsData.fulfilled]: (state, data) => {
      state.products = data.payload;
      state.isLoading = false;
      state.error = [];
    },
    [productsData.rejected]: (state, data) => {
      state.isLoading = false;
      state.error = data.payload;
    },
  },
});


export const { clearProducts, removeProducts } = productsSlice.actions;

export default productsSlice.reducer;
