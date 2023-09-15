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
      <textarea
        className='text-area'
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className='submit-btn' onClick={handleClick}>
        Submit
      </button>

      {loading ? (
        <p>Generating response...</p>
      ) : (
        <h3 className='result-text'>{result.length > 0 ? result : ''}</h3>
      )}
    </div>
  );
}

