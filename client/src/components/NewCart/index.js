import React from 'react'
import { CategorySelect } from './CategorySelect'
import ProductsCheckbox from './ProductsCheckbox/indes'

export default function NewCart() {
  return (
    <div>
      NewCart
      <ul>
        <li>CategorySelect</li>
        <CategorySelect />
        <li>ProductCheckbox</li>
        <ProductsCheckbox></ProductsCheckbox>
      </ul>
    </div>
  )
}
