import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../api/api";

const initialState = {
    user: null,
    state: "iddle",
    error: null
};

export const loginUser = createAsyncThunk('auth', async(usuario) => {
    console.log(usuario)
    const response = await instance.post('/auth/local/login', usuario);
    console.log(response.data)
    return response.data;
})

const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
    },
    extraReducers: (builder) =>{
        builder
        .addCase(loginUser.pending, (state) => {
          state.status = 'cargando';
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.status = 'exitoso';
          state.user = action.payload;
          
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.status = 'denegado';
          state.error = action.error.message;
        });
    }
})

export default authSlice.reducer;