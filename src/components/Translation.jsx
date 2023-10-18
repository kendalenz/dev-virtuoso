import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/all';
import { saveAs } from 'file-saver';

gsap.registerPlugin(TextPlugin);

export default function Translation({ reply, setInput, result, prompt }) {
  const [loading, setLoading] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState('');
  const loadingTextRef = useRef(null);

  const handleClick = async () => {
    setLoading(true);

    const response = await reply(textAreaValue); // Pass the user's input to the reply function

    // Log the response to the console for debugging
    console.log('Response from reply:', response);

    // Update the result state with the response
    result = response;

    setLoading(false);
  };

  const animateLoadingText = () => {
    const dots = '...';
    const dotArray = dots.split('');
    const duration = 0.5;
  
    // Create a timeline to sequence the animation
    const tl = gsap.timeline();
  
    dotArray.forEach((dot, index) => {
      tl.to(loadingTextRef.current, { text: `Writing in progress${dots.substring(0, index + 1)}`, duration });
    });
  
    tl.to(loadingTextRef.current, { text: 'Writing in progress', duration });
  
    // Repeat the timeline indefinitely
    tl.repeat(-1);
  };
  
  useEffect(() => {
    if (loading) {
      animateLoadingText();
    } else {
      // If loading is done, clear the animation
      gsap.killTweensOf(loadingTextRef.current);
    }
  }, [loading]);  

  // const downloadAsWordDocument = () => {
  //   const blob = new Blob([result], { type: 'application/msword' });
  //   saveAs(blob, 'generated_text.doc');
  // };  

  const downloadAsWordDocument = () => {
    const blob = new Blob([result], { type: 'application/msword' });
    saveAs(blob, 'generated_text.doc', { autoBOM: true });
  };
  
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <h2 className='mb-4'>NarrativeGenius</h2>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card mb-3' onClick={() => setTextAreaValue("Write a poem\nabout mushrooms in the voice of Theodore Roethke")}>
              <div className='card-body text-left'>
                <p className='card-text'><span>Write a poem</span><br/>about mushrooms in the voice of Theodore Roethke</p>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card mb-3' onClick={() => setTextAreaValue("Write a short story\nabout a depressed school teacher in the voice of Raymond Carver")}>
              <div className='card-body text-left'>
                <p className='card-text'><span>Write a short story</span><br/>about a depressed school teacher in the voice of Raymond Carver</p>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card mb-3' onClick={() => setTextAreaValue("Write two paragraphs\ndescribing a sunset in Shenandoah National Park")}>
              <div className='card-body text-left'>
                <p className='card-text'><span>Write two paragraphs</span><br/>describing a sunset in Shenandoah National Park</p>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card mb-3' onClick={() => setTextAreaValue("Write humorous dialogue\nbetween a man and his talking dog.")}>
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
              onChange={(e) => setTextAreaValue(e.target.value)}
              value={textAreaValue}
            ></textarea>
            <button className='btn btn-light border-dark rounded-0 btn-block' onClick={handleClick}>
              CREATE
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <p className='mt-4' ref={loadingTextRef}>Writing in progress...</p>
      ) : (
        <div className='result-text text-left my-4'>
         {result.length > 0 ? (
  <div>
    {result.split('\n\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
    <button className="btn btn-light border-dark rounded-0 btn-block" onClick={downloadAsWordDocument}>
      Download as Word Document
    </button>
    {/* <button className="btn btn-light border-dark rounded-0 btn-block" onClick={openInPages}>
        Open in Pages
      </button> */}
  </div>
) : (
  ''
)}
          
        </div>
      )}
    </div>
  );
}
