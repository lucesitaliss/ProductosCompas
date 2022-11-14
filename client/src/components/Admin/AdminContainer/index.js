import React from 'react'
import AdminTab from '../AdminContainer/AdminTab/index'

export default function AdminContainer(props) {
  if (!props.show) {
    return null
  }
  const { name } = props
  return (
    <div>
      <div className="prueba"></div>
      <AdminTab name={name} />
    </div>
  )
}
