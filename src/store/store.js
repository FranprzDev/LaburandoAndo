import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slice/authSlice";
import workersSlice from "../slice/workersSlice";

export const store = configureStore({
    reducer:{
        auth: authSlice,
        workers: workersSlice
    }
})