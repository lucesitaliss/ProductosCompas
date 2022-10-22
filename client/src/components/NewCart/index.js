import React from 'react'
import { CategorySelect } from './CategorySelect'
import ProductsCheckbox from './ProductsCheckbox/index'

export default function NewCart() {
  return (
    <div>
      <CategorySelect />
      <ProductsCheckbox />
    </div>
  )
}
