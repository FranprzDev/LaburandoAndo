import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../api/api";

const initialState = {
    user: null,
    stateSync: "iddle",
    state: "iddle",
    error: null
};

export const loginUser = createAsyncThunk('auth', async(usuario) => {
  try {
    const response = await instance.post('/auth/local/login', usuario);
    
    return response.data.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
})

const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        reset: (state) => {
          state.stateSync = "iddle";
          state.error = null;
        },
        pending: (state) => {
          state.stateSync = "cargando";
        },
        success: (state) => {
          state.stateSync = "exitoso";
        },
        error: (state, action) => {
          state.stateSync = "error";
          state.error = action.payload;
        },
        logout: (state) => {
          state.stateSync = "iddle";
          sessionStorage.removeItem("usuarioLogeado");
        },
    },
    extraReducers: (builder) =>{
        builder
        .addCase(loginUser.pending, (state) => {
          state.stateSync = 'cargando';
          state.status = 'cargando';
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.stateSync = 'exitoso';
          state.status = 'exitoso';
          state.user = action.payload;
          sessionStorage.setItem("usuarioLogeado", JSON.stringify(action.payload))
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.stateSync = 'error';
          state.status = 'iddle';
          state.error = action.payload ? action.payload.message : action.error.message;
        });
    }
})

export const { reset, pending, success, error, logout } = authSlice.actions;

export default authSlice.reducer;