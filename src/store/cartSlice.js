// userSlice.js
import { createSlice} from "@reduxjs/toolkit";
const cartItem=JSON.parse(localStorage.getItem('cartItems'));

const initialState = {
  guestCart:cartItem?cartItem:[],
  userCart:cartItem?cartItem:[],
  cartsize:cartItem?cartItem.length:0,
  warning:"",
};

const cartSlice=createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state,action) { 
      if (!action.payload.isGuest) {
         if(state.guestCart.includes  (action.payload.item)){
          state.warning="Item is already added in the Cart";
         }else{
          state.guestCart.push(action.payload.item);
          localStorage.setItem("cartItems",JSON.stringify(state.guestCart));
          state.cartsize=state.guestCart.length;
          state.warning=""
        }
      } else {
        if(state.userCart.includes(action.payload.item)){
          state.warning="Item is already added in the Cart";
         }
        else{
          state.usercart.push(action.payload.item);
          state.cartsize=state.userCart.length;
          state.warning=""
        }
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    clearWarning(state) {
      state.warning = "";
    },
    }
});

export const {add,remove,clearWarning} = cartSlice.actions; 
export default cartSlice.reducer;
