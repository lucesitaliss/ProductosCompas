import React, { useState } from 'react'
import AdminContainer from './AdminContainer/index'
import '../Admin/admin.css'

export default function Admin() {
  const [show, setShow] = useState(false)
  const [nameNav, setNameNav] = useState('')
  const [buttonStyle, setButtonStyle] = useState({
    product: 'buttonNotSelected',
    category: 'buttonNotSelected',
    user: 'buttonNotSelected',
  })

  const click = (name) => {
    setShow(true)
    setNameNav(name)

    if (name === 'product') {
      const style = {
        product: 'butonSelected',
        category: 'buttonNotSelected',
        user: 'buttonNotSelected',
      }
      setButtonStyle(style)
    }
    if (name === 'category') {
      const style = {
        product: 'buttonNotSelected',
        category: ' butonSelected',
        user: 'buttonNotSelected',
      }
      setButtonStyle(style)
    }
    if (name === 'user') {
      const style = {
        product: 'buttonNotSelected',
        category: ' buttonNotSelected',
        user: 'butonSelected',
      }
      setButtonStyle(style)
    }
  }

  return (
    <div>
      <div className="nav">
        <button className={buttonStyle.user} onClick={() => click('user')}>
          User
        </button>
        <button
          className={buttonStyle.category}
          onClick={() => {
            click('category')
          }}
        >
          Category
        </button>

        <button
          className={buttonStyle.product}
          onClick={() => click('product')}
        >
          Product
        </button>
      </div>
      <AdminContainer show={show} name={nameNav} />
    </div>
  )
}
