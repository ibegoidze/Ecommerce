import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const SingleProductData = createAsyncThunk(
  "SingleProduct/SingleProductData",
  async (id) => {
    return fetch(
      `https://amazon-digital-prod.azurewebsites.net/api/product/products/${id}`
    )
      .then((res) => res.json())
      .catch((e) => console.log(e));
  }
);

const initialState = {
  SingleProduct: {},
  isLoading: [],
  error: [],
  images: [],
};

const SingleProductSlice = createSlice({
  name: "SingleProduct",
  initialState,
  extraReducers: {
    [SingleProductData.pending]: (state) => {
      state.isLoading = true;
      state.error = [];
    },
    [SingleProductData.fulfilled]: (state, data) => {
      state.SingleProduct = data.payload;
      state.images = data.payload.images;
      state.isLoading = false;
      state.error = [];
    },
    [SingleProductData.rejected]: (state) => {
      state.isLoading = false;
      state.error = [];
    },
  },
});

export default SingleProductSlice.reducer;
