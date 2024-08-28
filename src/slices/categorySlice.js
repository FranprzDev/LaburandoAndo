import { createSlice } from "@reduxjs/toolkit";
import { createCategory, fetchCategories } from "./actions/categoryActions";

const initialState = {
  categories: [],
  category: null,
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
      })
      .addCase(createCategory.pending, (state) => {
        state.status = "cargando"
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.status = "exitoso"
        state.post = action.payload
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.status = "denegado"
        state.error = action.error.message
      })
  },
});

export default categoriesSlice.reducer;
