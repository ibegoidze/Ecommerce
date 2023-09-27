import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const productsData = createAsyncThunk(
  "products/productsData",
  async () => {
    return fetch(
      "http://digital-amazon-test.somee.com/api/product/products"
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
    // actionები 
    clearProducts: (state) => {
      state.items = [];
    },
    removeProducts: (state, action) => {
      state.items = state.items.fillter((item) => item.id !== action.payload); // idის მიხედვით ვშლით თითო პროდუქტს
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
      state.error = data.payload; // აქ გავნსაზღვრავთ შემდეგ errorს data.payload.error
    },
  },
});

export const { clearProducts, removeProducts } = productsSlice.actions;

export default productsSlice.reducer;
