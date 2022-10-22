import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './cart.css'

export default function Cart() {
  const [productsSelect, setProductsSelect] = useState({})
  const navegate = useNavigate()

  const getProductsSelections = async () => {
    const response = await fetch(`http://www.localhost:4000/cart`)
    const result = await response.json()
    setProductsSelect(result)
  }

  const insertHistorycart = async () => {
    const response = await fetch('http://www.localhost:4000/history', {
      method: 'Post',
    })
  }

  const deleteCart = async () => {
    const response = await fetch('http://www.localhost:4000/cart', {
      method: 'Delete',
    })
    // const result = await response.json()
    if (response.ok) {
      setProductsSelect([])
    }
  }

  const handleSumit = (e) => {
    e.preventDefault()
    insertHistorycart()
    deleteCart()
    navegate('/')
  }
  useEffect(() => {
    getProductsSelections()
  }, [])

  return (
    <div className="list">
      <div className="titelButton">
        <h2>Lista de Compras </h2>
        <form onSubmit={handleSumit}>
          <input type="submit" value="Vaciar Lista" />
        </form>
      </div>

      {Object.entries(productsSelect).map((categorys) => (
        <>
          <h3>{categorys[0]}</h3>
          {categorys[1].map((product) => (
            <h4>{product.name_product}</h4>
          ))}
        </>
      ))}
      {/* {Object.entries(productsSelect).map((categorys, index) => (
        <>
          <h3>{categorys[0]}</h3>
          {categorys[1].map((product) => (
            <h6>{product.name_product}</h6>
          ))}
        </>
      ))} */}
    </div>
  )
}
