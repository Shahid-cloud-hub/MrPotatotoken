import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  googleUser: null,
  userConnect: false,
};

const googleConnectSlice = createSlice({
  name: "googleConnect",
  initialState,
  reducers: {
    setGoogleUser: (state, action) => {
      state.googleUser = action.payload;
      state.userConnect = !!action.payload; // will be true if the payload is not null or undefined
    },
    clearGoogleUser: (state) => {
      state.googleUser = null;
      state.userConnect = false;
    },
  },
});

export const { setGoogleUser, clearGoogleUser } = googleConnectSlice.actions;

export default googleConnectSlice.reducer;
