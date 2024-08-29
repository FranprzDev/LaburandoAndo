import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./actions/usersActions";


const initialState = {
    users: [],
    status: "idle",
    error: null,
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getUsers.pending,(state) => {
            state.status = "idle"
        })
        .addCase(getUsers.fulfilled,(state, action) => {
            state.status= "Exitoso"
            state.users= action.payload
        })
        .addCase(getUsers.rejected,(state, action) => {
            state.status= "Denegado"
            state.error = action.error.message
        })
    }
})

export default usersSlice.reducer