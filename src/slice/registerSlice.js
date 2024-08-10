import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../api/api";

const initialState = {
    form: {
      mail: "",
      password: "",
      phone: "",
      adress: "",
      photo: "",
      authMethod: "Local",
      type: false,
    },
    stateSync: "idle",
    state: "idle",
    error: null
};

export const createProfessional = createAsyncThunk('register', async(_, { getState }) => {
  try {
    const response = await instance.post('/auth/local/register/worker', getState().register.form);
    return response.data.data;
  } catch(error){
    console.log(error);
  }
});

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers:{
      changeType: (state) => {
            state.form.type = !state.form.type;
      },
      setValues: (state, action) => {
        state.form.fullname = action.payload.fullname;
        state.form.mail = action.payload.mail;
        state.form.password = action.payload.password;
      },
      setAditionalValues : (state, action) => {
        state.form.phone = action.payload.phone;
        state.form.adress = action.payload.adress;
      },
    },
    extraReducers: (builder) =>{
        builder
        .addCase(createProfessional.pending, (state) => {
          state.stateSync = 'cargando';
          state.status = 'cargando';
        })
        .addCase(createProfessional.fulfilled, (state, action) => {
          state.stateSync = 'exitoso';
          state.status = 'exitoso';
          state.user = action.payload;
        })
        .addCase(createProfessional.rejected, (state, action) => {
          state.stateSync = 'error';
          state.status = 'iddle';
          state.error = action.payload ? action.payload.message : action.error.message;
        });
    }
})

export const { changeType, setValues, setAditionalValues, getProfessional } = registerSlice.actions;

export default registerSlice.reducer;