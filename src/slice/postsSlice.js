import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../api/api";

const initialState = {
    post: null,
    posts: [],
    status: null,
    error: null,
}

export const getPosts = createAsyncThunk('work/Posts', async () => {
    const res = await instance.get('/work/')
    return res.data.data
})

export const getPost = createAsyncThunk('work/Post',async (id) => {
    const res = await instance.get(`/work/${id}`)
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
            .addCase(getPost.pending,(state) => {
                state.status = 'Cargando';
            })
            .addCase(getPost.fulfilled,(state,action) => {
                state.status= 'Exitoso'
                state.post = action.payload;
            })
            .addCase(getPost.rejected,(state,action) => {
                state.status = 'Denegado',
                state.error = action.error.message
            })
    }
})

export default postSlice.reducer