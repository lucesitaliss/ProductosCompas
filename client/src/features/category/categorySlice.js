import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
}

export const categorySlice = createSlice({
  name: 'categorySelect',
  initialState,
  reducers: {
    addCategorySelect: (state, action) => {
      state.categoryId = action.payload
    },
  },
})

export const { addCategorySelect } = categorySlice.actions
export default categorySlice.reducer
