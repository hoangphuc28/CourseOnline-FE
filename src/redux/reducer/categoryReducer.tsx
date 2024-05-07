import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Category from '../../pages/ListCourses/Category.tsx';


interface CategoryState {
  list: Category[];
  error: string | null;
  length: number;
}
const initialState : CategoryState = {
  list: [],
  error: null,
  length: 0,
}
export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    updateCategories(state, action: PayloadAction<Category[]>) {
        state.list = action.payload;
      },
  }
})

export const { updateCategories } = categorySlice.actions

export default categorySlice.reducer