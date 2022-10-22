import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  userEmail: null,
  userUID: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserActive: (state, action) => {
      state.userEmail = action.payload.userEmail;
      state.userName = action.payload.userName;
      state.userUID = action.payload.UID;
    },
    setLogoutUser: (state) => {
      state.userEmail = null;
      state.userName = null;
      state.userUID = null;
      sessionStorage.clear();
      window.location.reload();
    },
    setLoader: (state, action) => {
      state.loading = action.payload.loading;
    },
  },
});

export const { setUserActive, setLogoutUser, setLoader } = userSlice.actions;

export const selectUserName = (state) => state.user.userName;
export const selectUserEmail = (state) => state.user.userEmail;
export const loading = (state) => state.user.loading;
export const uid = (state) => state.user.userUID;
export default userSlice.reducer;
