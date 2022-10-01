import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/index.js'
import Cart from './components/Cart/index'
import Admin from './components/Admin/index'

import Navbar from './components/Navbar/Navbar'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  )
}
