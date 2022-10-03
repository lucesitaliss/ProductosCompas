import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
export default function Navbar() {
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/newcart">New Cart </NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <NavLink to= "/admin"> Admin</NavLink>

    </nav>
  )
}
