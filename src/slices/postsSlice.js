import { createSlice } from "@reduxjs/toolkit";
import { createPost, getPost, getPosts } from "./actions/postsActions";

const initialState = {
  post: null,
  posts: [],
  status: "idle",
  createPostStatus: "idle",
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    resetPostStatus: (state) => {
      state.createPostStatus = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "Cargando";
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = "Exitoso";
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = "Denegado";
        state.error = action.error.message;
      })
      .addCase(getPost.pending, (state) => {
        state.status = "Cargando";
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.status = "Exitoso";
        state.post = action.payload;
      })
      .addCase(getPost.rejected, (state, action) => {
        state.status = "Denegado";
        state.error = action.error.message;
      })
      .addCase(createPost.pending, (state) => {
        state.createPostStatus = "cargando";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.createPostStatus = "exitoso";
        state.post = action.payload;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.createPostStatus = "denegado";
        state.error = action.error.message;
      });
  },
});

export const { resetPostStatus } = postSlice.actions;

export default postSlice.reducer;
