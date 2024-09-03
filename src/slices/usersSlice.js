import { createSlice } from "@reduxjs/toolkit";
import { deleteUser, getUsers } from "./actions/usersActions";

const initialState = {
  users: [],
  status: "idle",
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "cargando";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "exitoso";
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "denegado";
        state.error = action.error.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.status = "cargando";
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = "exitoso";
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.status = "denegado";
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
