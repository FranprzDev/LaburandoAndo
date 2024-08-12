import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/authSlice";
import postsSlice from "../slice/postsSlice";
import workersSlice from "../slice/workersSlice";
import registerSlice from "../slice/registerSlice";
import categorySlice from "../slice/categorySlice";

export const store = configureStore({
    reducer:{
        auth: authSlice,
        posts: postsSlice,
        workers: workersSlice,
        register: registerSlice,
        categories: categorySlice
    }
})