import React from 'react'
import { CategorySelect } from './CategorySelect'
import ProductsCheckbox from './PrductsCheckbox/indes'

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
