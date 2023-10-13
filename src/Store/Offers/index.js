import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const offersData = createAsyncThunk("offers/offersData", async () => {
  return fetch("https://amazon-digital-prod.azurewebsites.net/api/product/offers")
    .then((res) => res.json())
    .catch((e) => console.log(e));
});

const initialState = {
  offers: [],
  isLoading: [],
  error: [],
};

const offersSlice = createSlice({
  name: "offers",
  initialState,
  extraReducers: {
    [offersData.pending]: (state) => {
      state.isLoading = true;
      state.error = [];
    },
    [offersData.fulfilled]: (state, data) => {
      state.offers = data.payload;
      state.isLoading = false;
      state.error = [];
    },
    [offersData.rejected]: (state) => {
      state.isLoading = false;
      state.error = []; 
    },
  },
});

export default offersSlice.reducer;
