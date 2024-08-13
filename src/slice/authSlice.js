import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../api/api";
import { jwtDecode } from "jwt-decode";

const initialState = {
    user: JSON.parse(sessionStorage.getItem("usuarioLogeado")) || null,
    stateSync: "idle",
    state: "idle",
    role: "Client",
    error: null
};

export const loginUser = createAsyncThunk('auth', async(usuario) => {
  try {
    const response = await instance.post('/auth/jwt/login', usuario);

    return response.data.data.token
  } catch (error) {
    console.log(error)
  }
})

const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        reset: (state) => {
          state.stateSync = "idle";
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
          state.state = "idle";
          state.stateSync = "idle";
          state.user = null;
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
          const decodedToken = jwtDecode(action.payload);

          state.user = decodedToken.user;
          state.role = decodedToken.user.role;
          console.log(decodedToken.user);
          sessionStorage.setItem("usuarioLogeado", JSON.stringify(decodedToken.user));
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.stateSync = 'error';
          state.status = 'error';
          state.error = action.payload ? action.payload.message : action.error.message;
        });
    }
})

export const { reset, pending, success, error, logout } = authSlice.actions;

export default authSlice.reducer;