import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './cart.css'

export default function Cart() {
  const [productsSelect, setProductsSelect] = useState({})
  const navegate = useNavigate()

  useEffect(() => {
    getProductsSelections()
  }, [])

  const getProductsSelections = async () => {
    try {
      const response = await fetch(`http://www.localhost:4000/cart`)
      const result = await response.json()
      if (response.ok) {
        setProductsSelect(result)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const insertHistorycart = async () => {
    try {
      const response = await fetch('http://www.localhost:4000/history', {
        method: 'POST',
      })
    } catch (error) {
      console.error(error)
    }
  }

  const deleteCart = async () => {
    const response = await fetch('http://www.localhost:4000/cart', {
      method: 'DELETE',
    })

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

  return (
    <div>
      <div className="titelButton">
        <h2>Lista de Compras </h2>
        <form onSubmit={handleSumit}>
          <input
            className="ButtonEmptyList"
            type="submit"
            value="Vaciar Lista"
          />
        </form>
      </div>

      {Object.entries(productsSelect).map((categories) => (
        <div className="title">
          <h3>{categories[0]}</h3>
          <div className="list">
            {categories[1].map((product) => (
              <h5>{product.name_product}</h5>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
