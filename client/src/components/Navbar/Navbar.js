import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
  const [navStyle, setnavStyle] = useState({
    home: 'navNotSelected',
    newCart: 'navNotSelected',
    cart: 'navNotSelected',
    admin: 'navNotSelected',
  })

  const onClick = (name) => {
    if (name === 'home') {
      setnavStyle({
        home: 'navSelected',
        newCart: 'navNotSelected',
        cart: 'navNotSelected',
        admin: 'navNotSelected',
      })
    }

    if (name === 'newCart') {
      setnavStyle({
        home: 'navNotSelected',
        newCart: 'navSelected',
        cart: 'navNotSelected',
        admin: 'navNotSelected',
      })
    }

    if (name === 'cart') {
      setnavStyle({
        home: 'navNotSelected',
        newCart: 'navNotSelected',
        cart: 'navSelected',
        admin: 'navNotSelected',
      })
    }

    if (name === 'admin') {
      setnavStyle({
        home: 'navNotSelected',
        newCart: 'navNotSelected',
        cart: 'navNotSelected',
        admin: 'navSelected',
      })
    }
    console.log(navStyle, name)
  }

  return (
    <nav>
      <NavLink className={navStyle.home} to="/" onClick={() => onClick('home')}>
        Home
      </NavLink>
      <NavLink
        className={navStyle.newCart}
        to="/newcart"
        onClick={() => onClick('newCart')}
      >
        New Cart{' '}
      </NavLink>
      <NavLink
        className={navStyle.cart}
        to="/cart"
        onClick={() => onClick('cart')}
      >
        Cart
      </NavLink>
      <NavLink
        className={navStyle.admin}
        to="/admin"
        onClick={() => onClick('admin')}
      >
        {' '}
        Admin
      </NavLink>
    </nav>
  )
}
