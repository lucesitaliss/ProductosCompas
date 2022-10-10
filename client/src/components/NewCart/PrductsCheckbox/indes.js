import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function ProductsCheckbox() {
  const [products, setProducts] = useState([])
  const { categoryId } = useSelector((state) => state.categorySelect)

  const getProducts = async () => {
    const response = await fetch(
      `http://www.localhost:4000/products/category/${categoryId}`,
    )
    const result = await response.json()
    setProducts(result)
  }

  useEffect(() => {
    getProducts()
  }, [categoryId])

  return (
    <div>
      {products.map((product) => (
        <div key={product.id_product}>{product.name_product}</div>
      ))}
    </div>
  )
}

