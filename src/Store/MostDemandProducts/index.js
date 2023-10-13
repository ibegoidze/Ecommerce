import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const mostDemandProductsData = createAsyncThunk(
  "mostDemandProducts/mostDemandProductsData",
  async () => {
    return fetch(
      "https://amazon-digital-prod.azurewebsites.net/api/product/mostdemandproducts")
      .then((res) => res.json()).catch((e) => console.log(e));
  }
);

const initialState = {
  mostDemandProducts: [],
  isLoading: [],
  error: [],
};

const mosdDemandProductsSlice = createSlice({
  name: "mostDemandProducts",
  initialState,
  extraReducers: {
    [mostDemandProductsData.pending]: (state) => {
      state.isLoading = true;
      state.error = [];
    },
    [mostDemandProductsData.fulfilled]: (state, data) => {
      state.mostDemandProducts = data.payload;
      state.isLoading = false;
      state.error = [];
    },
    [mostDemandProductsData.rejected]: (state) => {
      state.isLoading = false;
      state.error = []; 
    },
  },
});

export default mosdDemandProductsSlice.reducer;