// userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAndProcessData } from "utils/apiaxios"; // Import your global API function
import jwtDecode from "jwt-decode";

let user=JSON.parse(localStorage.getItem("user"));
if(user)
  user=jwtDecode(user);

const initialState={
  users: [],
  user:user,
  islogdin:user?true:false,
  data: null,
  error: null,
  loading: false,
}

export const createUser = createAsyncThunk(
  "user/createUser",
  async (payload, { rejectWithValue }) => {
    try {
      //Use your global API function here
      const responseData = await fetchAndProcessData("/user/signup", "POST", payload);
      //Return the response data
      return responseData;
    } catch (error) {
      //If an error occurs, reject the promise with an error message
      throw rejectWithValue(error.message || "An error occurred while making the request.");
    }
  }
);

export const loginUser=createAsyncThunk(
   "user/login",async(payload,{rejectWithValue})=>{
      try{
      const responseData=await fetchAndProcessData("/user/login","POST",payload);
      localStorage.setItem("user", JSON.stringify(responseData?.token));
      return responseData;
      }catch(error){
       throw rejectWithValue(error.message||"An error occurred while making the request.")
      }
   }
)

const userSlice = createSlice({
  name: "user",
  initialState,
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
      [loginUser.pending]: (state) => {
        state.loading = true;
      },
      [loginUser.fulfilled]: (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      },
      [loginUser.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      } 
  },
});

export const {reducer}=userSlice;
export default reducer;
