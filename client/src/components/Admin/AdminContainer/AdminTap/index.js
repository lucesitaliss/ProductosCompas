import React, { useState, useEffect } from 'react'
import '../AdminTap/adminTap.css'

export default function AdminTap(props) {
  const [element, setElement] = useState([])

  useEffect(() => {
    allCategories()
  }, [props])

  const allCategories = async () => {
    if (props.name === 'category') {
      const result = await fetch('http://www.localhost:4000/categories')
      const data = await result.json()
      setElement(data)
    } else {
      if (props.name === 'product') {
        const result = await fetch('http://www.localhost:4000/products')
        const data = await result.json()
        setElement(data)
      }
    }
  }
  console.log(element)

  return (
    <div className="tap">
      {element.map((element) =>
        element.name_category ? (
          <div>{element.name_category}</div>
        ) : (
          <div>{element.name_product}</div>
        ),
      )}
    </div>
  )
}
