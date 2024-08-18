import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./actions/categoryActions";

const initialState = {
  categories: [],
  status: "idle",
  error: null,
};

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
