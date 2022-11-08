import React from 'react'
import { CategorySelect } from './CategorySelect'
import ProductsCheckbox from './ProductsCheckbox/index'
import CleanChecked from '../NewCart/CleanChecked/index'
import './newCart.css'

export default function NewCart() {
  return (
    <div className="newCart">
      <div className='selectAndClear'>
        <CategorySelect />
        <CleanChecked />
      </div>
      <ProductsCheckbox />
    </div>
  )
}
