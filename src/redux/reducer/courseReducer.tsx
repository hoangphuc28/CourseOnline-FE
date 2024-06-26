import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Course from '../../type/Course.tsx'


interface CourseState {
  list: Course[];
  loading: boolean;
  error: string | null;
  length: number;
}
const initialState : CourseState = {
  list: [],
  loading: false,
  error: null,
  length: 0,
}
export const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    addCourse(state, action: PayloadAction<Course[]>) {
        state.list = action.payload;
      },
    updateCourseLength(state, action: PayloadAction<number>) {
      state.length = action.payload
    }
   
  }
})

// Action creators are generated for each case reducer function
export const { addCourse, updateCourseLength } = courseSlice.actions

export default courseSlice.reducer