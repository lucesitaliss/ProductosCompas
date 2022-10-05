import React, { useState, useEffect } from 'react'

export default function CategorySelect() {
  const [categorys, setCategorys] = useState([])

  const GetCategorys = async () => {
    const response = await fetch('http://www.localhost:4000/categorys')
    const result = await response.json()
    setCategorys(result)
  }

  useEffect(() => {
    GetCategorys()
  }, [])

  //setCategorys(GetCategorys)
  // console.log(GetCategorys())
  // const prueba = categorys.filter(
  //   (category) => category.name_category == 'Aseo',
  // )
  return (
    <div>
  
      <select >
        {categorys.map((category) =>(

          <option>{category.name_category}</option>
        ))}
        
      
      </select>
    </div>
  )
}
