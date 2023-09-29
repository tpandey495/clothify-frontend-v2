// userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAndProcessData } from "utils/apiaxios"; // Import your global API function

const initialState = {
  products: [],
  data: null,
  error: null,
  loading: false,
};

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct", // Use the correct slice name
  async (payload, { rejectWithValue }) => {
    try {
      const responseData = await fetchAndProcessData(`/product?type=${payload}`, "GET",null);
      return responseData;
    } catch (error) {
      throw rejectWithValue(
        error.message || "An error occurred while making the request."
      );
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProduct.pending]: (state) => {
      state.loading = true;
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.products.push(action.payload);
    },
    [fetchProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { reducer: productReducer } = productSlice; // Use the correct export name
export default productReducer;
