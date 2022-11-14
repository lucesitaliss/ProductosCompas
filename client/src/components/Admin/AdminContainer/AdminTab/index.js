import React from 'react'
import AdminTabCategory from './AdminTabCategory'
import AdminTabProduct from './AdminTabProduct'
import './adminTab.css'

export default function AdminTab({ name }) {
  return (
    <div className="tab">
      {name === 'category' ? <AdminTabCategory /> : <AdminTabProduct />}
    </div>
  )
}
