import { configureStore } from '@reduxjs/toolkit'
import CourseReducer from './reducer/courseReducer.tsx'
import UserReducer from './reducer/userReducer.tsx'
import loaderReducer from './reducer/loaderReducer.tsx'
import authReducer from './reducer/authReducer.tsx'
import categoryReducer from './reducer/categoryReducer.tsx'

export default configureStore({
  reducer: {
    courses: CourseReducer,
    user: UserReducer,
    loader: loaderReducer,
    auth: authReducer,
    categories: categoryReducer
  }
})