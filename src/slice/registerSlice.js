import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../api/api";

const initialState = {
    form: {
      mail: "",
      password: "",
      img: "",
      adress: "",
      photo: "",
      authMethod: "Local",
      type: "Client",
    },
    stateSync: "idle",
    state: "idle",
    error: null
};

export const createProfessional = createAsyncThunk('register', async(_, { getState }) => {
  try {
    if (getState().register.form.type === 'Client') {
      throw new Error('No se puede crear un cliente con este método');
    }

    
    const { img, ...rest } = getState().register.form;

    const response = await instance.post('/auth/jwt/register/Worker', 
      !getState().register.form.img ? rest : getState().register.form
    );

    return response.data.data;
  } catch(error){
    console.log(error);
  }
});

export const createClient = createAsyncThunk('client', async(_, { getState }) => {
  try {
    const form = getState().register.form;

    const { fullname, mail, password } = form

    const response = await instance.post('/auth/jwt/register/', {
      fullname,
      mail,
      password,
    });
    return response.data.data;
  } catch(error){
    console.log(error);
  }
});

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers:{
      changeType: (state, action) => {
            state.form.type = action.payload;
      },
      changePhoto: (state, action) => {
         state.form.img = action.payload;
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
          state.status = 'idle';
          state.error = action.payload ? action.payload.message : action.error.message;
        })
        .addCase(createClient.pending, (state) => {
          state.stateSync = 'cargando';
          state.status = 'cargando';
        })
        .addCase(createClient.fulfilled, (state, action) => {
          state.stateSync = 'exitoso';
          state.status = 'exitoso';
          state.user = action.payload;
        })
        .addCase(createClient.rejected, (state, action) => {
          state.stateSync = 'error';
          state.status = 'idle';
          state.error = action.payload ? action.payload.message : action.error.message;
        })
    }
})

export const { changeType, setValues, setAditionalValues, getProfessional, changePhoto } = registerSlice.actions;

export default registerSlice.reducer;