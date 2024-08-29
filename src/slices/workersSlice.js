import { createSlice } from "@reduxjs/toolkit";
import { deleteWorker, fetchWorkerForID, fetchWorkers, getWorkers } from "./actions/workersActions";

const initialState = {
    workers: [],
    worker: null,
    status: "idle",
    error: null
};

const workersSlice = createSlice({
    name: 'workers',
    initialState,
    reducers:{
        clearWorker(state) { // Nueva acción para limpiar el estado del worker
            state.worker = null;
        }
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
        .addCase(fetchWorkerForID.fulfilled, (state,action) => {
            state.status = "exitoso";
            state.worker = action.payload;
        })
        .addCase(getWorkers.pending, (state) => {
            state.status= "cargando"
        })
        .addCase(getWorkers.fulfilled, (state, action) => {
            state.status = "exitoso"
            state.workers = action.payload
        })
        .addCase(getWorkers.rejected, (state,action) => {
            state.status = "denegado"
            state.error = action.error.message
        })
        .addCase(deleteWorker.pending, (state) => {
            state.status = "cargando"
        })
        .addCase(deleteWorker.rejected, (state, action) => {
            state.status = "exitoso"
            state.workers = state.workers.filter((worker) => worker.id !== action.payload)
        })
        .addCase(deleteWorker.rejected, (state, action) => {
            state.status = "denegado"
            state.error = action.error.message
        })
    }
})

export const { clearWorker } = workersSlice.actions; // Exporta la acción clearWorker

export default workersSlice.reducer;
