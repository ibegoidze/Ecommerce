import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const categoriesData = createAsyncThunk(
  "categories/categoriesData",
  async () => {
    return fetch(
      "https://amazon-digital-prod.azurewebsites.net/api/product/categories")
      .then((res) => res.json()).catch((e) => console.log(e));
  }
);

const initialState = {
  categories: [],
  isLoading: [],
  error: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: {
    [categoriesData.pending]: (state) => {
      state.isLoading = true;
      state.error = [];
    },
    [categoriesData.fulfilled]: (state, data) => {
      state.categories = data.payload;
      state.isLoading = false;
      state.error = [];
    },
    [categoriesData.rejected]: (state) => {
      state.isLoading = false;
      state.error = []; 
    },
  },
});

export default categoriesSlice.reducer;
