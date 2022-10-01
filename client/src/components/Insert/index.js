import React, { useState } from 'react'
import './insert.css'
import { useNavigate } from 'react-router-dom'

export default function Insert({ type }) {
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
    console.log(data)
    navegate('/')
  }

  const handleChange = (e) => {
    setInput({ category: e.target.value })
    console.log(input)
  }

  return (
    <form onSubmit={handleSumit}>
      <input placeholder={type} onChange={handleChange} />

      <input type="submit" value="Insertar" />
    </form>
  )
}
