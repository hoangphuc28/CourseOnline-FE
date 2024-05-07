import { PayloadAction, createSlice } from "@reduxjs/toolkit";

  export const loaderSlice = createSlice({
    name: 'user',
    initialState : {
        value: false
    },
    reducers: {
      updateLoader(state, action) {
          state.value = action.payload;
        },
     
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { updateLoader} = loaderSlice.actions
  
  export default loaderSlice.reducer