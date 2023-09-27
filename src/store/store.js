import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice';
import productSlice from './productSlice';
import cartSlice from './cartSlice';

const store=configureStore({
    reducer:{
        auth:userSlice,
        product:productSlice,
        cart:cartSlice
    },
    devTools:true
});

export default store;