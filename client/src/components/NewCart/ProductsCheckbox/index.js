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
  const [products, setProducts] = useState([])

  useEffect(() => {
    categoryId && getProducts()
  }, [categoryId])

  const getProducts = async () => {
    const response = await fetch(
      `http://www.localhost:4000/products/category/${categoryId}`,
    )
    const result = await response.json()
    setProducts(result)

    // const checkedProducts = result.map((product) => {
    //   product.checked = product.checked ?? false //si es undefiine  o null le asigno false
    //   return product
    // })

    //dispatch(addSelectProducts(checkedProducts))
  }

  const handleChange = async (e) => {
    //dispatch(updateSelectProducts(Number(e.target.id)))
    const oldValueChecked = await fetch(
      `http://www.localhost:4000/product/checked/id/${e.target.id}`,
    )
    const checked = await oldValueChecked.json()

    const invertChecked = (checked) => {
      if (checked) {
        checked = false
      }
      checked = true
      return checked
    }
    var dataBody = {
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
      console.log(dataBody),
    )
    const updated = await updateChecked.json()

    getProducts()
  }

  const insertCart = async () => {
    console.log(stateSelectedProducts)
    const selectProducts = stateSelectedProducts.filter(
      (products) => products.checked === true,
    )
    console.log(selectProducts)
    const response = await fetch('http://www.localhost:4000/cart', {
      method: 'Post',
      body: JSON.stringify(selectProducts),
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
