import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addCategories } from '../../../../../features/listCategory/listCategorySlice'
import Insert from '../../Insert'
export default function AdminTabCategory() {
  const dispatch = useDispatch()

  const { categories } = useSelector((state) => state.listCategory)

  useEffect(() => {
    allCategories()
  }, [categories])

  const allCategories = async () => {
    const result = await fetch('http://www.localhost:4000/categories')
    const categories = await result.json()
    dispatch(addCategories(categories))
  }
  return (
    <div>
      <Insert name="category"/>
      {categories.map((category) => (
        <div>{category.name_category}</div>
      ))}
    </div>
  )
}
