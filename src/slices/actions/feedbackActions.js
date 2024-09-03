import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../api/api";

export const createFeedback = createAsyncThunk(
  "worker/createFeedback",
  async (FormData) => {
    const sanitizedFeedback = {
      subject: FormData.data.affair,
      message: FormData.data.message,
    };

    try {
      
      const res = await instance.post(
        `/feedback/${FormData.id}`,
        sanitizedFeedback
      );
  
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "An error occurred while creating the post"
      );
    }
  }
);

export const getFeedbacks = createAsyncThunk("admin/Feedbacks", async (leido) => {
  const res = await instance.get(`/feedback/?read=${leido}`);
  return res.data.data;
});