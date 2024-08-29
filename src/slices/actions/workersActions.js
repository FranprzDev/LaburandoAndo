import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../api/api";

export const fetchWorkerForID = createAsyncThunk("workers/fetchWorker", async (id) =>{
    const response = await instance.get(`/worker/${id}`);
    return response.data.data;
});

export const fetchWorkers = createAsyncThunk("workers/fetchWorkers", async () =>{
    const response = await instance.get(`${import.meta.env.VITE_API_WORKERS}`);
    return response.data.data;
});

export const getWorkers = createAsyncThunk("workers/getWorkers", async () => {
    const response = await instance.get('/worker/')
    return response.data.data
})

export const deleteWorker = createAsyncThunk("workers/deleteWorker", async (id) => {
    const response = await instance.delete(`/worker/delete/${id}`)
    return id
})