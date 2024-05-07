import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import User from "../../type/User.tsx"

interface UserState {
    information: User | null;
    accessToken: string;
    loading: boolean;
    error: string | null;
  }
  const initialState : UserState = {
    information: null,
    accessToken: '',
    loading: false,
    error: null
  }
  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      updateUser(state, action: PayloadAction<User>) {
          state.information = action.payload;
        },
      updateAccessToken(state, action) {
        state.accessToken = action.payload
      },
      deleteUser(state, action) {
        state.information = null
        state.accessToken = ''
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { updateUser, updateAccessToken, deleteUser} = userSlice.actions
  
  export default userSlice.reducer