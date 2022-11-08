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
          <input
            className="ButtonEmptyList"
            type="submit"
            value="Vaciar Lista"
          />
        </form>
      </div>

      {Object.entries(productsSelect).map((categories) => (
        <>
          <h3>{categories[0]}</h3>
          {categories[1].map((product) => (
            <h5>{product.name_product}</h5>
          ))}
        </>
      ))}
    </div>
  )
}
