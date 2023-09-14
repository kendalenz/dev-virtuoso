import React from 'react'

export default function Translation( {reply, setInput}) {
  return (
    <div>
      <textarea 
        className='text-area' 
        cols={55} 
        rows={10}
        onChange = {(e) => setInput(e.target.value)}  
        >
        </textarea>
      <button className='submit-btn' onClick={reply}>Submit</button>
      {/* <button className='submit-btn'>Reset</button> */}

    </div>
  )
}
