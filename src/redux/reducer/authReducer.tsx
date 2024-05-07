import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import User from "../../type/User.tsx"


  export const authSlice = createSlice({
    name: 'user',
    initialState : {
        error: null,
        success: null,
        signinError: null
    },
    reducers: {
      registerError(state, action) {
        state.error = action.payload
      },
      registerSuccess(state, action) {
        state.success = action.payload
      },
      signInError(state, action) {
        console.log(action.payload)
        state.signinError = action.payload
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { registerError, registerSuccess, signInError } = authSlice.actions
  
  export default authSlice.reducer