import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    feedbacks: [],
    feedback: null,
    status: "idle",
    error: null,
}

const feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
    }
})