import React from 'react'
import './cleanChecked.css'

export default function CleanChecked() {
  const handleSumit = async (e) => {
    const resetChecked = await fetch(
      'http://www.localhost:4000/products/checked/reset',
      {
        method: 'put',
      },
    )
    window.location.reload()
  }

  return (
    <div className='cleanChecked'>
      <button className="buttonClearChecked" onClick={handleSumit}>
        Clear
      </button>
    </div>
  )
}
