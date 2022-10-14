import React from 'react'

export default function Cart() {
  const insertHistorycart = async () => {
    const response = await fetch('http://www.localhost:4000/history', {
      method: 'Post',
    })
    const result = await response.json()
  }
  const deleteCart = async () => {
    const response = await fetch('http://www.localhost:4000/cart', {
      method: 'Delete',
    })
    const result = await response.json()
  }

  const handleSumit = (e) => {
    e.preventDefault()
    insertHistorycart()
    deleteCart()
  }

  return (
    <div>
      Lista de compras
      <form onSubmit={handleSumit}>
        <input type="submit" value="Vaciar Lista" />
      </form>
    </div>
  )
}
