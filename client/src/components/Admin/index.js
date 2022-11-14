import React, { useState, useEffect } from 'react'
import AdminContainer from './AdminContainer/index'
import '../Admin/admin.css'

export default function Admin() {
  const [currentTab, setCurrentTab] = useState(0)
  //const [tabs, setTabs] = useState(adminTabs)

  const adminTabs = {
    categories: { title: 'Categories', id: 1, alias: 'category' },
    users: { title: 'Users', id: 2, alias: 'user' },
    products: { title: 'Products', id: 3, alias: 'product' },
  }
  // const [nameNav, setNameNav] = useState('')

  const [show, setShow] = useState(false)

  const handleOnClick = (id) => {
    setCurrentTab(id)
    setShow(true)
  }

  return (
    <div>
      {Object.entries(adminTabs).map(([tabName, tab]) => {
        const isCurrentTab = currentTab === tab.id
        return (
          <div>
            <button
              key={tab.id}
              onClick={() => handleOnClick(tab.id)}
              className={isCurrentTab ? 'butonSelected' : 'buttonNotSelected'}
            >
              {tab.title}
            </button>
            <AdminContainer show={show} name={tab.alias} />
          </div>
        )
      })}
    </div>
  )
}
