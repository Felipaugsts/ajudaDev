import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: null,
    userEmail: null
    
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
      setUserActive: (state, action) => { 
          state.userEmail = action.payload.userEmail
          state.userName = action.payload.userName
      },
      setLogoutUser: state => { 
        state.userEmail = null
        state.userName = null
      }
  }
});

export const {setUserActive, setLogoutUser} = userSlice.actions

export const selectUserName = state => state.user.userName
export const selectUserEmail = state => state.user.userEmail
export default userSlice.reducer