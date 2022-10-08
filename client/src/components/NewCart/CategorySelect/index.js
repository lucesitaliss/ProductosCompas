import React, { useState, useEffect } from 'react'

export default function CategorySelect() {
  const [categorys, setCategorys] = useState([])

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
      <select>
        {categorys.map((category) => (
          <option key={category.id_category}>{category.name_category}</option>
        ))}
      </select>
    </div>
  )
}
