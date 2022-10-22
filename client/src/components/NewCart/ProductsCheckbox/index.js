import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  addSelectProducts,
  updateSelectProducts,
} from '../../../features/seletedProducts/productsSeletedSlice'
import './productCheckbox.css'

export default function ProductsCheckbox() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { categoryId } = useSelector((state) => state.categorySelect)
  const stateSelectedProducts = useSelector(
    (state) => state.selectedProducts.selectedProducts,
  )

  useEffect(() => {
    categoryId && getProducts()
  }, [categoryId])

  const getProducts = async () => {
    const response = await fetch(
      `http://www.localhost:4000/products/category/${categoryId}`,
    )
    const result = await response.json()
    const checkedProducts = result.map((product) => {
      product.checked = false
      return product
    })

    dispatch(addSelectProducts(checkedProducts))
  }

  const handleChange = (e) => {
    dispatch(updateSelectProducts(Number(e.target.id)))
  }

  const insertCart = async () => {
    const response = await fetch('http://www.localhost:4000/cart', {
      method: 'Post',
      body: JSON.stringify(stateSelectedProducts),
      headers: { 'content-type': 'application/json' },
    })
    const result = await response.json()
    
  }

  const handleSumit = (e) => {
    e.preventDefault()
    insertCart()
    navigate('/cart')
  }

  return (
    <form className="formProductCheckbox" onSubmit={handleSumit}>
      <input className="buttonEnviar" type="submit" value="Enviar" />

      {stateSelectedProducts.map((product) => (
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
