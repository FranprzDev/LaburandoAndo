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
  filterPosts: [],
  selectCategory: "",
  status: "idle",
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    changeSelectedCategory: (state, action) => {
      state.selectCategory = action.payload;
    },
    filterPostByCategory: (state, action) => {
      state.filterPosts = state.posts;
      if(action.payload !== "") {
        state.filterPosts = state.posts.filter((post) =>
          post.category[0]?.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
    },
    filterPostByName: (state, action) => {
      state.filterPosts = state.posts;
      if(action.payload !== "") {
      state.filterPosts = state.posts.filter((post) =>
        post.worker.fullname.toLowerCase().includes(action.payload.toLowerCase())
      );
      }
    },
    filterPostByLocation: (state, action) => {
      state.filterPosts = state.posts;
      if(action.payload !== "") {
        state.filterPosts = state.posts.filter((post) =>
          post.worker.address.toLowerCase().includes(action.payload.toLowerCase())
        );
      }
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
        state.filterPosts = action.payload;
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
        state.status = "cargando";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = "exitoso";
        state.post = action.payload;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = "denegado";
        state.error = action.error.message;
      })
      .addCase(deletePost.pending, (state) => {
        state.status = "cargando";
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = "exitoso";
        state.posts = state.posts.filter((item) => item.id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = "denegado";
        state.error = action.error.message;
      })
      .addCase(updatePost.pending, (state) => {
        state.status = "cargando";
      }) 
      .addCase(updatePost.fulfilled, (state, action) => {
        state.post = action.payload;
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.status = "denegado";
        state.error = action.error.message;
      });
  },
});

export const { resetPostStatus, changeSelectedCategory, filterPostByCategory, filterPostByName, filterPostByLocation } = postSlice.actions;

export default postSlice.reducer;
