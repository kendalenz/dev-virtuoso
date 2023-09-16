import React, { useState } from 'react';

export default function Translation({ reply, setInput, result }) {
  
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await reply();
    setLoading(false);
  };

  return (
    <div>
      <div className="d-flex align-items-center">
        <svg 
          width="24" 
          height="24" 
          xmlns="http://www.w3.org/2000/svg" 
          fillRule="evenodd" 
          clipRule="evenodd"
        >
          <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/>
        </svg>
        <h3 className="ml-2">Home</h3>
      </div>

      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-6">
            <textarea className="form-control mb-3" rows="10" placeholder="Enter text" onChange="setInput(this.value)"></textarea>
            <button className="btn btn-primary btn-block" onClick="handleClick()">Submit</button>
          </div>
        </div>
      </div>

      {loading ? (
        <p>Generating response...</p>
      ) : (
        <h3 className='result-text'>{result.length > 0 ? result : ''}</h3>
      )}
    </div>
  );
}

