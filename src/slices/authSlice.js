import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { loginUser } from "./actions/authActions";

const initialState = {
    user: JSON.parse(sessionStorage.getItem("usuarioLogeado")) || null,
    state: "idle",
    isAuth: !!sessionStorage.getItem("usuarioLogeado"),
    role: "Client",
    error: null
};

const authSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        reset: (state) => {
          state.state = "idle";
          state.error = null;
        },
        error: (state, action) => {
          state.error = action.payload;
        },
        logout: (state) => {
          state.state = "idle";
          state.user = null;
          state.role = "Client";
          state.isAuth = false;
          sessionStorage.removeItem("usuarioLogeado");
        },
    },
    extraReducers: (builder) =>{
        builder
        .addCase(loginUser.pending, (state) => {
          state.status = 'cargando';
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.status = 'exitoso';
          const decodedToken = jwtDecode(action.payload);
          state.isAuth = true;
          state.user = decodedToken.user;
          state.role = decodedToken.user.role;
          sessionStorage.setItem("usuarioLogeado", JSON.stringify(decodedToken.user));
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.status = 'error';
          state.isAuth = false;
          state.error = action.payload ? action.payload.message : action.error.message;
        });
    }
})

export const { reset, error, logout } = authSlice.actions;

export default authSlice.reducer;