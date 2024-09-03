import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../api/api";

export const loginUser = createAsyncThunk('login', async(usuario) => {
    const response = await instance.post('/auth/jwt/login', usuario);
    return response.data.data.token;
})