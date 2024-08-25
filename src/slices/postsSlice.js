import { createSlice } from "@reduxjs/toolkit";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "./actions/postsActions";

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
      })
      .addCase(deletePost.pending, (state) => {
        state.createPostStatus = "cargando";
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = "exitoso";
        state.posts = state.posts.filter((item) => item.id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = "denegado";
        state.error = action.error.message;
      })
      .addCase(updatePost.pending, (state, action) => {
        state.status = "idle";
        state.error = action.error.message;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.status = "exitoso";
        const updatePost = action.payload;
        state.posts = state.posts.map(post => post._id === updatePost._id ? updatePost : post)
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.status = "denegado";
        state.error = action.error.message;
      });
  },
});

export const { resetPostStatus } = postSlice.actions;

export default postSlice.reducer;
