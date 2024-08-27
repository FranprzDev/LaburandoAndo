import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../api/api";
import { createClient, createProfessional } from "./actions/registerActions";

const initialState = {
  form: {
    mail: "",
    password: "",
    fullname: "",
    adress: "",
    img: "",
    authMethod: "Local",
    type: "Client",
  },
  status: "idle",
  statusProfessional: "idle",
  isCreated: false,
  error: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
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
    setAditionalValues: (state, action) => {
      state.form.phone = action.payload.phone;
      state.form.adress = action.payload.adress;
    },
    resetProfessional: (state) => {
      state.statusProfessional = initialState.statusProfessional;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProfessional.pending, (state) => {
        state.statusProfessional = "cargando";
      })
      .addCase(createProfessional.fulfilled, (state, action) => {
        state.statusProfessional = "exitoso";
        state.isCreated = true;
        state.user = action.payload;
      })
      .addCase(createProfessional.rejected, (state, action) => {
        state.statusProfessional = "error";
        state.isCreated = false;
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      })
      .addCase(createClient.pending, (state) => {
        state.status = "cargando";
      })
      .addCase(createClient.fulfilled, (state, action) => {
        state.status = "exitoso";
        state.user = action.payload;
        state.isCreated = true;
      })
      .addCase(createClient.rejected, (state, action) => {
        state.status = "error";
        state.isCreated = false;
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      });
  },
});

export const {
  changeType,
  setValues,
  setAditionalValues,
  getProfessional,
  changePhoto,
  resetProfessional,
} = registerSlice.actions;

export default registerSlice.reducer;
