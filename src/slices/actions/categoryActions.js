import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../api/api";

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
    const response = await instance.get("/category/");
    return response.data.data;
  }
);

export const createCategory = createAsyncThunk("categories/createCategory", async (FormData) => {
    const sanitizedPost = {
      name: FormData.data.name
    }

    try {
      const res = await instance.post('/category/create',sanitizedPost)
      return res.data.data
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'An error occurred while creating the post');
    }
})