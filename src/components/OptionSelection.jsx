import React from 'react'

export default function OptionSelection({ arrayItems }) {
  return (
    <div>
      <h1 className='heading'>DevVirtuoso</h1>

      <div className='main-grid'>
        {
          arrayItems.map((item) => {
            return (
              <div key={item.id} className='child-grid'>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
