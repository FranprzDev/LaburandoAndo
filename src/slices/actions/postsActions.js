import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../api/api";

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
    return res.data.data;
  });

  export const deletePost = createAsyncThunk("work/Delete", async(id) => {
    const res = await instance.delete(`/work/${id}`)
    return id
  })

export const updatePost = createAsyncThunk("work/Update", async ({data, id}) => {

  const sanitizedPost = {
    title: data.title,
    description: data.description,
    categoryId: data.categoryId,
    location: data.location ? data.location : "Remoto",
    pricePerHour: Number(data.price),
  };

  const res = await instance.patch(`/work/${id}`, sanitizedPost);
  return res.data.data;
});

