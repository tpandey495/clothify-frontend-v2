// userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAndProcessData } from "utils/apiaxios"; // Import your global API function

export const createUser = createAsyncThunk(
  "user/createUser",
  async (payload, { rejectWithValue }) => {
    try {
      // Use your global API function here
      const responseData = await fetchAndProcessData("/user/signup", "POST", payload);
      // Return the response data
      return responseData;
    } catch (error) {
      // If an error occurs, reject the promise with an error message
      throw rejectWithValue(error.message || "An error occurred while making the request.");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    data: null,
    error: null,
    loading: false,
  },
  reducers: {}, // Your other reducers if needed
  extraReducers:{
      [createUser.pending]: (state) => {
        state.loading = true;
      },
      [createUser.fulfilled]: (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      },
      [createUser.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
  },
});

export const {reducer}=userSlice;
export default reducer;
