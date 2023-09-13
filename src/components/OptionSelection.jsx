import React from 'react'

export default function OptionSelection({ arrayItems }) {
  return (
    <div>
      <h1 className='heading'>DevVirtuoso</h1>

      <div>
        {
          arrayItems.map((item) => {
            return (
              <div key='item.id'>
                <h3>{item.name}</h3>
              </div>
            )
          })
        }
      </div>


    </div>
  )
}
