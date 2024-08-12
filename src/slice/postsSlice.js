import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../api/api";

const initialState = {
    post: null,
    posts: [],
    status: "idle",
    error: null,
}

export const createPost = createAsyncThunk('work/createPost', async (id, post) => {
    console.log(post)
    try {
    const res = await instance.post(`/work/${id}`, post);
    console.log(res.data.data)
    return res.data.data;
} catch (error) {
    console.log(error)
  }
})

export const getPosts = createAsyncThunk('work/Posts', async () => {
    const res = await instance.get('/work/')
    return res.data.data;
})

export const getPost = createAsyncThunk('work/Post',async (id) => {
    const res = await instance.get(`/work/${id}`)
    return res.data.data;
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
                state.status= 'Exitoso';
                state.posts = action.payload;
            })
            .addCase(getPosts.rejected,(state,action) => {
                state.status = 'Denegado';
                state.error = action.error.message;
            })
            .addCase(getPost.pending,(state) => {
                state.status = 'Cargando';
            })
            .addCase(getPost.fulfilled,(state,action) => {
                state.status= 'Exitoso';
                state.post = action.payload;
            })
            .addCase(getPost.rejected,(state,action) => {
                state.status = 'Denegado';
                state.error = action.error.message;
            })
            .addCase(createPost.pending,(state) => {
                state.status = 'cargando';
            })
            .addCase(createPost.fulfilled,(state,action) => {
                state.status= 'exitoso';
                state.post = action.payload;
            })
            .addCase(createPost.rejected,(state,action) => {
                state.status = 'denegado';
                state.error = action.error.message;
            })
            
    }
})

export default postSlice.reducer;