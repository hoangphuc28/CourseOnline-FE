import { configureStore } from '@reduxjs/toolkit'
import courseReducer from './reducer/courseReducer.tsx'

export default configureStore({
  reducer: {
    courses: courseReducer
  }
})