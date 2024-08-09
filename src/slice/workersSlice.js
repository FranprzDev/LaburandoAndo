import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../api/api";

const initialState = {
    workers: [],
    status: "idle",
    error: null
};

export const fetchWorkers = createAsyncThunk("workers/fetchWorkers", async () =>{
    const response = await instance.get(`${import.meta.env.VITE_API_WORKERS}`);
    return response.data.data;
});

const workersSlice = createSlice({
    name: 'workers',
    initialState,
    reducers:{

    },
    extraReducers: (builder) =>{
        builder.addCase(fetchWorkers.pending, (state) => {
            state.status = "cargando";            
        })
        .addCase(fetchWorkers.fulfilled, (state,action) => {
            state.status = "exitoso";
            state.workers = action.payload;
        })
        .addCase(fetchWorkers.rejected, (state, action) => {
            state.status = "denegado";
            state.error = action.error.message;
        })
    }
})

export default workersSlice.reducer;