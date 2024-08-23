import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../api/api";

export const loginUser = createAsyncThunk('auth', async(usuario) => {
    try {
      const response = await instance.post('/auth/jwt/login', usuario);
  
      return response.data.data.token;
    } catch (error) {
      return error.response.error;
    }
  })