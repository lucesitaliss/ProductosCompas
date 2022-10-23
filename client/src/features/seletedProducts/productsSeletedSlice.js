import { createSlice } from '@reduxjs/toolkit'

export const seletedProductsSlice = createSlice({
  name: 'selectedProducts',
  initialState: {
    selectedProducts: [],
  },
  reducers: {
    addSelectProducts: (state, action) => {
      state.selectedProducts = action.payload
    },
    updateSelectProducts: (state, action) => {
      state.selectedProducts.find((product) => {
        if (action.payload == product.id_product) {
          if (product.checked == false) {
            return (product.checked = true)
          } else {
            return (product.checked = false)
          }
        }
      })
    },
  },
})

export const { addSelectProducts, updateSelectProducts } =
  seletedProductsSlice.actions
export default seletedProductsSlice.reducer
