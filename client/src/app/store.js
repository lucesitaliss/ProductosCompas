import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../features/category/categorySlice'

export const store = configureStore({
  reducer: {
    categorySelect: categoryReducer,
  },
})
