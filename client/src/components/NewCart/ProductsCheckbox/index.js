import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './productCheckbox.css'

export default function ProductsCheckbox() {
  const navigate = useNavigate()

  const { categoryId } = useSelector((state) => state.categorySelect)
  const [products, setProducts] = useState([])

  useEffect(() => {
    categoryId && getProducts()
  }, [categoryId])

  const getProducts = async () => {
    if (categoryId > 0) {
      const response = await fetch(
        `http://www.localhost:4000/products/category/${categoryId}`,
      )
      const result = await response.json()
      setProducts(result)
    }
  }
  console.log(products)

  const handleChange = async (e) => {
    console.log('e.targetonchange', e.target)
    const oldValueChecked = await fetch(
      `http://www.localhost:4000/product/checked/id/${e.target.id}`,
    )
    const objectchecked = await oldValueChecked.json()
    const checked = objectchecked.checked

    const invertChecked = (checked) => {
      if (checked) {
        checked = false
        return checked
      }
      checked = true
      return checked
    }
    const dataBody = {
      valueChecked: invertChecked(checked),
      idProduct: e.target.id,
    }

    const updateChecked = await fetch(
      'http://www.localhost:4000/product/checked',
      {
        method: 'put',
        body: JSON.stringify(dataBody),
        headers: { 'content-type': 'application/json' },
      },
    )
    getProducts()
  }

  const insertCart = async () => {
    const getProducts = await fetch('http://www.localhost:4000/products')
    const allProducts = await getProducts.json()
    const selectProducts = allProducts.filter(
      (products) => products.checked === true,
    )

    const response = await fetch('http://www.localhost:4000/cart', {
      method: 'Post',
      body: JSON.stringify(selectProducts),
      headers: { 'content-type': 'application/json' },
    })
  }

  const handleSumit = async (e) => {
    e.preventDefault()
    await insertCart()
    navigate('/cart')
  }

  return (
    <form className="formProductCheckbox" onSubmit={handleSumit}>
      <input className="sendButton" type="submit" value="Enviar" name="send" />

      {products.map((product) => (
        <label className="productSelect" key={product.id_product}>
          <input
            id={product.id_product}
            type="checkbox"
            onChange={handleChange}
            checked={product.checked}
          />
          {product.name_product}
        </label>
      ))}
    </form>
  )
}
