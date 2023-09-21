import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice';
import productSlice from './productSlice';

const store=configureStore({
    reducer:{
        auth:userSlice,
        product:productSlice
    },
    devTools:true
});

export default store;