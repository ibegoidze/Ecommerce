import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const latestProductsData = createAsyncThunk(
  "latestProducts/latestProductsData",
  async () => {
    return fetch(
      "http://digital-amazon-test.somee.com/api/product/latestproducts")
      .then((res) => res.json()).catch((e) => console.log(e));
  }
);

const initialState = {
  latestProducts: [],
  isLoading: [],
  error: [],
};

const latestProductsSlice = createSlice({
  name: "latestProducts",
  initialState,
  extraReducers: {
    [latestProductsData.pending]: (state) => {
      state.isLoading = true;
      state.error = [];
    },
    [latestProductsData.fulfilled]: (state, data) => {
      state.latestProducts = data.payload;
      state.isLoading = false;
      state.error = [];
    },
    [latestProductsData.rejected]: (state) => {
      state.isLoading = false;
      state.error = []; // აქ გავნსაზღვრავთ შემდეგ errorს data.payload.error
    },
  },
});

export default latestProductsSlice.reducer;