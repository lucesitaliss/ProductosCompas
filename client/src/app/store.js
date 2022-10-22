import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../features/category/categorySlice'
import seletedProductsReducer from '../features/seletedProducts/productsSeletedSlice'

export const store = configureStore({
  reducer: {
    categorySelect: categoryReducer,
    selectedProducts: seletedProductsReducer,
  },
})
