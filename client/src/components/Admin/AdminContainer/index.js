import React from 'react'
import Insert from './Insert/index'
import AdminTap from '../AdminContainer/AdminTap/index'

export default function AdminContainer(props) {
  if (!props.show) {
    return null
  }
  const { name } = props
  return (
    <div>
      <div className='prueba'></div>
      <Insert name={name} />
      <AdminTap name={name} />
    </div>
  )
}
