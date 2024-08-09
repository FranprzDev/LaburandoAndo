import { createSlice } from "@reduxjs/toolkit";

const valorInicial=0;




const authSlice = createSlice({
    name: 'auth',
    initialState: valorInicial,
    reducers:{

    },
    extraReducers: (builder) =>{

    }
})

export default authSlice.reducer;