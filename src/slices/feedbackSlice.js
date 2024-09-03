import { createSlice } from "@reduxjs/toolkit";
import { createFeedback, getFeedbacks } from "./actions/feedbackActions";

const initialState = {
    feedbacks: [],
    feedback: null,
    status: "idle",
    error: null,
}

const feedbackSlice = createSlice({
    name: "feedbacks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getFeedbacks.pending, (state) => {
            state.status = "Cargando";
          })
          .addCase(getFeedbacks.fulfilled, (state, action) => {
            state.status = "Exitoso";
            state.feedbacks = action.payload;
          })
          .addCase(getFeedbacks.rejected, (state, action) => {
            state.status = "Denegado";
            state.error = action.error.message;
          })
        .addCase(createFeedback.pending,(state) => {
            state.status = "idle"
        })
        .addCase(createFeedback.fulfilled,(state, action) => {
            state.status= "Exitoso"
            state.feedbacks= action.payload
        })
        .addCase(createFeedback.rejected,(state, action) => {
            state.status= "Denegado"
            state.error = action.error.message
        })
    }
})

export default feedbackSlice.reducer