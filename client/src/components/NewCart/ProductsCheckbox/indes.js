import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function ProductsCheckbox() {
  const [products, setProducts] = useState([])
  const [productSelect, setProductSelect] = useState([{ id: ' ' }])
  const { categoryId } = useSelector((state) => state.categorySelect)

  const getProducts = async () => {
    const response = await fetch(
      `http://www.localhost:4000/products/category/${categoryId}`,
    )
    const result = await response.json()
    setProducts(result)
  }

  const handleChange = (e) => {
    const id = Number(e.target.id)
    if (!e.target.checked) {
      const seleted = productSelect.filter((product) => product != id)
      setProductSelect({ id: seleted })
    } else {
      if (e.target.checked) {
        const selected = { id: id }
        setProductSelect([...productSelect, selected])
        console.log('selected:', selected, 'stateSelect:', productSelect)
      }
    }
  }

 
  const insertCart = async () => {
    const response = await fetch('http://www.localhost:4000/cart', {
      method: 'Post',
      body: JSON.stringify(productSelect),
      headers: { 'content-type': 'application/json' },
    })
    const result = await response.json()
    console.log('productSelect', productSelect)
    console.log(result)
  }

  const handleSumit = (e) => {
    insertCart()
  }

  useEffect(() => {
    getProducts()
  }, [categoryId])

  return (
    <form onSubmit={handleSumit}>
      {products.map((product) => (
        <label key={product.id_product}>
          <input
            id={product.id_product}
            type="checkbox"
            onChange={handleChange}
            value={product.id_product}
          />
          {product.name_product}
        </label>
      ))}
      <input type="submit" value="Crear Lista" />
    </form>
  )
}
