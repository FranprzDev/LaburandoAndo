import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../api/api";

export const getUsers = createAsyncThunk('users/getUsers', async () => {
    const res = await instance.get('/user/')
    return res.data.data
})