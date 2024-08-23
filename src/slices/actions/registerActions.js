import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../api/api";

export const createProfessional = createAsyncThunk('register', async(_, { getState }) => {
    try {
      if (getState().register.form.type === 'Client') {
        throw new Error('No se puede crear un cliente con este método');
      }
      
      let sanitizedWorker = {
        fullname: getState().register.form.fullname,
        mail: getState().register.form.mail,
        password: getState().register.form.password,
        phone: getState().register.form.phone,
        address: getState().register.form.adress,
        img: getState().register.form.img ? getState().register.form.img : "",
      }
  
      console.log(sanitizedWorker)
      
      const response = await instance.post('/auth/jwt/register/Worker', sanitizedWorker);
  
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