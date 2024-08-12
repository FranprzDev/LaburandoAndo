import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../api/api";

const initialState = {
  post: null,
  posts: [],
  status: "idle",
  createPostStatus: "idle",
  error: null,
};

export const createPost = createAsyncThunk(
  "work/createPost",
  async (formData) => {
    const sanitizedPost = {
        title: formData.post.title,
        description: formData.post.description,
        categoryId: formData.post.categoryId,
        location: formData.post.location ? formData.post.location : "Remoto",
        price: Number(formData.post.price),
    };

    try {
        const res = await instance.post(`/work/${formData.id}`, sanitizedPost);

        return res.data.data;
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'An error occurred while creating the post');
    }
  }
);

export const getPosts = createAsyncThunk("work/Posts", async () => {
  const res = await instance.get("/work/");
  return res.data.data;
});

export const getPost = createAsyncThunk("work/Post", async (id) => {
  const res = await instance.get(`/work/${id}`);
  console.log(res.data.data);
  return res.data.data;
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
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

export default postSlice.reducer;
