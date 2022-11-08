import React, { useState } from 'react'
import './insert.css'
import { useNavigate } from 'react-router-dom'

export default function Insert(props) {
  const [input, setInput] = useState({ category: '' })
  const navegate = useNavigate()
  const { name } = props

  const handleSumit = async (e) => {
    e.preventDefault()
    const result = await fetch('http://www.localhost:4000/categories', {
      method: 'POST',
      body: JSON.stringify(input),
      headers: { 'content-type': 'application/json' },
    })
    const data = await result.json()
    navegate('/')
  }

  const handleChange = (e) => {
    setInput({ category: e.target.value })
  }

  return (
    <form onSubmit={handleSumit}>
      <input placeholder={`Insert ${name}`} onChange={handleChange} />

      <input type="submit" value="Insertar" />
    </form>
  )
}
