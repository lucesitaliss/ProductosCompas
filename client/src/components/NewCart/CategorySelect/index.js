import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addCategorySelect } from '../../../features/category/categorySlice'

export function CategorySelect() {
  const [categorys, setCategorys] = useState([])

  const dispatch = useDispatch()

  const handleChange = (e) => {
    if (e.target.value > 0) {
      dispatch(addCategorySelect(Number(e.target.value)))
    }
  }

  const getCategorys = async () => {
    const response = await fetch('http://www.localhost:4000/categorys')
    const result = await response.json()
    setCategorys(result)
  }

  useEffect(() => {
    getCategorys()
  }, [])

  return (
    <div>
      <select onChange={handleChange}>
        <option value="">Seleccione una categoria</option>
        {categorys.map((category) => (
          <option key={category.id_category} value={category.id_category}>
            {category.name_category}
          </option>
        ))}
      </select>
    </div>
  )
}
