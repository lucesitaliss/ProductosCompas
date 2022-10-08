import React from 'react'
import CategorySelect from './CategorySelect'

export default function NewCart() {
  return (
    <div>
      NewCart
      <ul>
        <li>CategorySelect</li>
        <CategorySelect/>
        <li>ProductCheckbox</li>
      </ul>
    </div>
  )
}
