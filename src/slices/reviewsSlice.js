import { createSlice } from "@reduxjs/toolkit";
import { createReview } from "./actions/reviewsActions";

const initialState = {
  review: null,
  reviews: [],
  status: "idle",
  error: null,
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(createReview.pending, (state) => {
        state.status = "cargando";
      })
      .addCase(createReview.fulfilled, (state, action) => {
        state.status = "exitoso";
        state.review = action.payload;
      })
      .addCase(createReview.rejected, (state, action) => {
        state.status = "denegado";
        state.error = action.error.message;
      })
  },
});

export default reviewSlice.reducer;
