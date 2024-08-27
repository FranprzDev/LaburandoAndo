import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import postsSlice from "../slices/postsSlice";
import workersSlice from "../slices/workersSlice";
import categorySlice from "../slices/categorySlice";
import registerSlice from "../slices/registerSlice";
import reviewsSlice from "../slices/reviewsSlice";

export const store = configureStore({
    reducer:{
        auth: authSlice,
        posts: postsSlice,
        workers: workersSlice,
        register: registerSlice,
        categories: categorySlice,
        reviews: reviewsSlice
    }
})