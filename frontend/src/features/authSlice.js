import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  status: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      state.userData = action.payload;
      state.status = true;
    },
    logout: (state) => {
      state.status = false;
      state.userData = {};
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
