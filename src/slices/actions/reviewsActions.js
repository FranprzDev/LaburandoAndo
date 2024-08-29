import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../api/api";

export const createReview = createAsyncThunk(
  "review/createReview",
  async (data) => {
    const sanitizedReview = {
      stars: data.stars,
      comment: data.comment,
      userId: data.userId,
      idWork: data.idWork,
    };

    try {
      const res = await instance.put(`/review/${data.idWork}`, sanitizedReview);

      return res.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "An error occurred while creating the review"
      );
    }
  }
);

export const deleteReview = createAsyncThunk(
  "review/DeleteReview",
  async (id) => {
    try {
      const res = await instance.delete(`/review/delete/${id}`);
      return id;
    } catch (error) {
      return error;
    }
  }
);
