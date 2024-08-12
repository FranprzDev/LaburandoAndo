import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../api/api";

const initialState = {
  categories: [],
  status: "idle",
  error: null,
};

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
    const response = await instance.get("/category/");
    return response.data.data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "cargando";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "exitoso";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "denegado";
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
