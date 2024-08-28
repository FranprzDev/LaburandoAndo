import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../api/api";

export const createFeedback = createAsyncThunk(
  "work/createFeedback",
  async (FormData) => {
    const sanitizedFeedback = {
      subject: FormData.data.affair,
      message: FormData.data.message,
    };

    try {
      console.log(FormData);
      const res = await instance.post(
        `/feedback/${FormData.id}`,
        sanitizedFeedback
      );
      console.log(res);
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          "An error occurred while creating the post"
      );
    }
  }
);
