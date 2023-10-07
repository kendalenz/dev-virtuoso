
// import React, { useState } from 'react';

// export default function Translation({ reply, setInput, result, prompt }) {
//   const [loading, setLoading] = useState(false);
//   const [selectedCardText, setSelectedCardText] = useState('');

//   const handleClick = async (cardText) => {
//     setLoading(true);
//     setSelectedCardText(cardText);
//     await reply();
//     setLoading(false);
//   };

//   return (
//     <div>
//       <div className="d-flex align-items-center justify-content-center">
//         <h2 className='mb-4'>NarrativeGenius</h2>
//       </div>
      
//       <div className='container'>
//         <div className='row'>
//           <div className='col-md-6'>
//             <div className='card mb-3' onClick={() => handleClick("Write a poem\nabout mushrooms in the voice of Theodore Roethke")}>
//               <div className='card-body text-left'>
//                 <p className='card-text'><span>Write a poem</span><br/>about mushrooms in the voice of Theodore Roethke</p>
//               </div>
//             </div>
//           </div>
//           <div className='col-md-6'>
//             <div className='card mb-3' onClick={() => handleClick("Write a short story\nabout a depressed school teacher in the voice of Raymond Carver")}>
//               <div className='card-body text-left'>
//                 <p className='card-text'><span>Write a short story</span><br/>about a depressed school teacher in the voice of Raymond Carver</p>
//               </div>
//             </div>
//           </div>
//           <div className='col-md-6'>
//             <div className='card mb-3' onClick={() => handleClick("Write two paragraphs\ndescribing a sunset in Shenandoah National Park")}>
//               <div className='card-body text-left'>
//                 <p className='card-text'><span>Write two paragraphs</span><br/>describing a sunset in Shenandoah National Park</p>
//               </div>
//             </div>
//           </div>
//           <div className='col-md-6'>
//             <div className='card mb-3' onClick={() => handleClick("Write humorous dialogue\nbetween a man and his talking dog.")}>
//               <div className='card-body text-left'>
//                 <p className='card-text'><span>Write humorous dialogue</span><br/>between a man and his talking dog.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         {/* Display the prompt */}
//         <p>{prompt}</p>
//       </div>
      
//       <div className='container'>
//         <div className='row justify-content-center text-center'>
//           <div className='col-12 col-md-6'>
//             <textarea
//               className='form-control mb-3 border-dark rounded-0'
//               rows='10'
//               placeholder='Enter text'
//               onChange={(e) => setInput(e.target.value)}
//               value={selectedCardText} // Populate the textarea with the selected card's text
//             ></textarea>
//             <button className='btn btn-light border-dark rounded-0 btn-block' onClick={handleClick}>
//               CREATE
//             </button>
//           </div>
//         </div>
//       </div>

//       {loading ? (
//         <p>Writing in progress...</p>
//       ) : (
//         <div className='result-text text-left my-4'>
//           {result.length > 0 ? (
//             result.split('\n\n').map((paragraph, index) => (
//               <p key={index}>{paragraph}</p>
//             ))
//           ) : (
//             ''
//           )}
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState } from 'react';

export default function Translation({ reply, setInput, result, prompt }) {
  const [loading, setLoading] = useState(false);
  const [selectedCardText, setSelectedCardText] = useState('');

  // const handleClick = async (cardText) => {
  //   setLoading(true);
  //   setSelectedCardText(cardText);
  //   await reply();
  //   setLoading(false);
  // };

  // const handleClick = async (cardText) => {
  //   setLoading(true);
  //   setSelectedCardText(cardText);
  //   const response = await reply();
    
  //   if (typeof response === 'object') {
  //     // If the response is an object, convert it to a string
  //     setSelectedCardText(JSON.stringify(response));
  //   } else {
  //     setSelectedCardText(response);
  //   }
    
  //   setLoading(false);
  // };
  
  // const handleClick = async (cardText) => {
  //   setLoading(true);
  //   setSelectedCardText(cardText);
  //   const response = await reply();
    
  //   // Convert the response to a string if it's not already
  //   const responseString = typeof response === 'string' ? response : JSON.stringify(response);

  //   setSelectedCardText(responseString);
  //   setLoading(false);
  // };

  const handleClick = async (cardText) => {
    setLoading(true);
    setSelectedCardText(cardText);
    const response = await reply();
    
    // Log the response to the console for debugging
    console.log('Response from reply:', response);
    
    // Convert the response to a string if it's not already
    const responseString = typeof response === 'string' ? response : JSON.stringify(response);
  
    setSelectedCardText(responseString);
    setLoading(false);
  };
  
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <h2 className='mb-4'>NarrativeGenius</h2>
      </div>
      
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card mb-3' onClick={() => handleClick("Write a poem\nabout mushrooms in the voice of Theodore Roethke")}>
              <div className='card-body text-left'>
                <p className='card-text'><span>Write a poem</span><br/>about mushrooms in the voice of Theodore Roethke</p>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card mb-3' onClick={() => handleClick("Write a short story\nabout a depressed school teacher in the voice of Raymond Carver")}>
              <div className='card-body text-left'>
                <p className='card-text'><span>Write a short story</span><br/>about a depressed school teacher in the voice of Raymond Carver</p>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card mb-3' onClick={() => handleClick("Write two paragraphs\ndescribing a sunset in Shenandoah National Park")}>
              <div className='card-body text-left'>
                <p className='card-text'><span>Write two paragraphs</span><br/>describing a sunset in Shenandoah National Park</p>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card mb-3' onClick={() => handleClick("Write humorous dialogue\nbetween a man and his talking dog.")}>
              <div className='card-body text-left'>
                <p className='card-text'><span>Write humorous dialogue</span><br/>between a man and his talking dog.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Display the prompt */}
        <p>{prompt}</p>
      </div>
      
      <div className='container'>
        <div className='row justify-content-center text-center'>
          <div className='col-12 col-md-6'>
            <textarea
              className='form-control mb-3 border-dark rounded-0'
              rows='10'
              placeholder='Enter text'
              onChange={(e) => setInput(e.target.value)}
              value={selectedCardText} // Populate the textarea with the selected card's text
            ></textarea>
            <button className='btn btn-light border-dark rounded-0 btn-block' onClick={handleClick}>
              CREATE
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <p>Writing in progress...</p>
      ) : (
        <div className='result-text text-left my-4'>
          {result.length > 0 ? (
            result.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            ''
          )}
        </div>
      )}
    </div>
  );
}
