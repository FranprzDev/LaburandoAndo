import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../api/api";

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
    const response = await instance.get("/category/");
    return response.data.data;
  }
);