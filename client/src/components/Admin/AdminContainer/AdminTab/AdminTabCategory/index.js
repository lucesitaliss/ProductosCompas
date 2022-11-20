import React, { useState, useEffect } from 'react'
import { BiEditAlt } from 'react-icons/bi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import './adminTabCategory.css'

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

  const handleOnCLickDeleteCategorie = async (idCategory) => {
    console.log(idCategory)
    const result = await fetch(
      `http://www.localhost:4000/categories/delete/${idCategory}`,
      {
        method: 'PUT',
      },
    )
  }
  return (
    <div>
      <Insert name="category" />
      {categories.map((category) => (
        <div className="listCategories" key={category.id_category}>
          <BiEditAlt className="iconEdit" />
          <RiDeleteBin6Line
            className="iconDelete"
            onClick={() => {
              handleOnCLickDeleteCategorie(category.id_category)
            }}
          />
          {category.name_category}
        </div>
      ))}
    </div>
  )
}
