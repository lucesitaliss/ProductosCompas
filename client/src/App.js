import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CategoryForm from './components/CategoryForm'
import Navbar from './components/Navbar'

export default function App() {
  return (
   <BrowserRouter>
    <Route path='/' element= {<Navbar/>}/>
    <Routes>
      
      <Route path='/category/new' element = {<CategoryForm/>}/>
    </Routes>
   </BrowserRouter>
  )
}
