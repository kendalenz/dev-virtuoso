import React from 'react'

export default function OptionSelection({ arrayItems, selectOption }) {
  return (
    <div>
      <h1 className='heading'>DevVirtuoso</h1>

      <div className='main-grid'>
        {
          arrayItems.map((item) => {
            return (
              <div key={item.id} className='child-grid' onClick={() => selectOption(item.option)}>
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
