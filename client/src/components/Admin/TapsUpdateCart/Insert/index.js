import React, { useState } from 'react'
import './insert.css'
import { useNavigate } from 'react-router-dom'

export default function Insert({}) {
  const [input, setInput] = useState({ category: '' })
  const navegate = useNavigate()

  const handleSumit = async (e) => {
    e.preventDefault()
    const result = await fetch('http://www.localhost:4000/categorys', {
      method: 'POST',
      body: JSON.stringify(input),
      headers: { 'content-type': 'application/json' },
    })
    const data = await result.json()
    navegate('/')

    console.log('input', input)
    console.log(data)
  }

  const handleChange = (e) => {
    setInput({ category: e.target.value })
    console.log(input)
  }

  return (
    <form onSubmit={handleSumit}>
      <input
        placeholder="Inserte una nueva Categoría"
        onChange={handleChange}
      />

      <input type="submit" value="Insertar" />
    </form>
  )
}
