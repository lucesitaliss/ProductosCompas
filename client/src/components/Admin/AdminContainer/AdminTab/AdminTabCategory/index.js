import React, { useEffect } from 'react'
import { BiEditAlt } from 'react-icons/bi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Swal from 'sweetalert2'
import './adminTabCategory.css'
import { useSelector, useDispatch } from 'react-redux'
import { addCategories } from '../../../../../features/listCategory/listCategorySlice'
import Insert from '../../Insert'

export default function AdminTabCategory() {
  const dispatch = useDispatch()

  const { categories } = useSelector((state) => state.listCategory)

  useEffect(() => {
    allCategories()
  }, [])

  const allCategories = async () => {
    const result = await fetch('http://www.localhost:4000/categories')
    const categories = await result.json()
    dispatch(addCategories(categories))
  }

  const handleOnCLickDeleteCategorie = async (idCategory) => {
    const result = await fetch(
      `http://www.localhost:4000/categories/delete/${idCategory}`,
      {
        method: 'PUT',
      },
    )
    allCategories()
  }

  const confirmationDeleteWindow = (categoryId) => {
    Swal.fire({
      title: 'Delete',
      text: 'Are you sure you want to delete the category?',
      icon: 'info',
      buttons: ['Cancel', 'Acept'],
    }).then((response) => {
      if (response) {
        handleOnCLickDeleteCategorie(categoryId)
        Swal.fire({
          text: ' The category has been deleted successfully',
          icon: 'success',
        })
      }
    })
  }

  const handleOnClickEditCategory = async (bodyEditCategory) => {
    console.log('bodyEditCategory', bodyEditCategory)
    const result = await fetch('http://www.localhost:4000/categories', {
      method: 'PUT',
      body: JSON.stringify(bodyEditCategory),
      headers: { 'content-type': 'application/json' },
    })
    const editCategory = await result.json()
    allCategories()
  }

  const modalEditCategory = async (currentCategory, id) => {
    const { value: editedCategory } = await Swal.fire({
      title: 'Edit Category',
      input: 'text',
      inputLabel: 'Insert Category',
      inputValue: currentCategory,
      showCancelButton: true,
    })

    if (editedCategory) {
      const bodyEditCategory = {
        id,
        category: editedCategory,
      }
      handleOnClickEditCategory(bodyEditCategory)
      // Swal.fire({
      //   text: 'The category has been successfully modified',
      //   icon: 'success',
      // })
    }
  }

  return (
    <div>
      <Insert name="category" />
      {categories.map((category) => (
        <div className="listCategories" key={category.id_category}>
          <BiEditAlt
            className="iconEdit"
            onClick={() => {
              modalEditCategory(category.name_category, category.id_category)
            }}
          />
          <RiDeleteBin6Line
            className="iconDelete"
            onClick={() => {
              confirmationDeleteWindow(category.id_category)
            }}
          />
          {category.name_category}
        </div>
      ))}
    </div>
  )
}
