import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../api/api";

export const createReview = createAsyncThunk(
    "review/createReview",
    async (data) => {
      
      try {
          const res = await instance.post(`/review/${data.idWork}`, {
            stars: data.stars,
            comment: data.comment,
            userId: data.idUser
        });
  
          return res.data.data;
      } catch (error) {
          return rejectWithValue(error.response?.data?.message || 'An error occurred while creating the post');
      }
      
    }
  );