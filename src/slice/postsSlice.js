import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../api/api";

const initialState = {
    posts: null,
    status: null,
    error: null,
}

export const getPosts = createAsyncThunk('work/Posts', async () => {
    const res = await instance.get('/work/')
    console.log(res.data.data)
    return res.data.data
})


const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending,(state) => {
                state.status = 'Cargando';
            })
            .addCase(getPosts.fulfilled,(state,action) => {
                state.status= 'Exitoso'
                state.posts = action.payload;
            })
            .addCase(getPosts.rejected,(state,action) => {
                state.status = 'Denegado',
                state.error = action.error.message
            })
    }
})

export default postSlice.reducer