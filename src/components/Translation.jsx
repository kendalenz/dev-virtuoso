import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/all';
import { saveAs } from 'file-saver';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';

gsap.registerPlugin(TextPlugin);

export default function Translation({ reply, setInput, setResult, result, prompt }) {
  const [loading, setLoading] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState('');
  const loadingTextRef = useRef(null);

  const handleClick = async () => {
    setLoading(true);
    const response = await reply(textAreaValue, setResult);
    setLoading(false);
    console.log('Result State:', result); 
  };
  
  const animateLoadingText = () => {
    const dots = '...';
    const dotArray = dots.split('');
    const duration = 0.5;

    const tl = gsap.timeline();

    dotArray.forEach((dot, index) => {
      tl.to(loadingTextRef.current, { text: `Writing in progress${dots.substring(0, index + 1)}`, duration });
    });

    tl.to(loadingTextRef.current, { text: 'Writing in progress', duration });

    tl.repeat(-1);
  };

  useEffect(() => {
    if (loading) {
      animateLoadingText();
    } else {
      gsap.killTweensOf(loadingTextRef.current);
    }
  }, [loading]); 
  
  const downloadAsWordDocument = (content) => {
    console.log('this is the content:')
    console.log(content); 
    // Load your DOCX template
    fetch('./response.docx')
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => {
        const templateData = new Uint8Array(arrayBuffer);
  
        const zip = new PizZip(templateData);
  
        const doc = new Docxtemplater();
        doc.loadZip(zip);
  
        // Set your data
        doc.setData({ result: content }); // Use "result" as the key
  
        // Compile the template
        doc.render();
  
        // Generate and save the document
        const generatedBlob = doc.getZip().generate({ type: 'blob' });
        saveAs(generatedBlob, 'generated_text.docx');
      })
      .catch((error) => {
        console.error('Error loading template:', error);
      });
  };
  
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <h2 className="mb-4">NarrativeGenius</h2>
      </div>

      <div className="container">
        <div className="row">
          <div className='col-md-6'>
            <div className='card mb-3' onClick={() => setTextAreaValue("Write a poem\nabout mushrooms in the voice of Theodore Roethke")}>
              <div className='card-body text-left'>
                <p className='card-text'><strong>Write a poem</strong><br/>about mushrooms in the voice of Theodore Roethke</p>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card mb-3' onClick={() => setTextAreaValue("Write a short story\nabout a depressed school teacher in the voice of Raymond Carver")}>
              <div className='card-body text-left'>
                <p className='card-text'><strong>Write a short story</strong><br/>about a depressed school teacher in the voice of Raymond Carver</p>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card mb-3 hidden-on-mobile' onClick={() => setTextAreaValue("Write two paragraphs\ndescribing a sunset in Shenandoah National Park")}>
              <div className='card-body text-left'>
                <p className='card-text'><strong>Write two paragraphs</strong><br/>describing a sunset in Shenandoah National Park</p>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card mb-3 hidden-on-mobile' onClick={() => setTextAreaValue("Write humorous dialogue\nbetween a man and his talking dog.")}>
              <div className='card-body text-left'>
                <p className='card-text'><strong>Write humorous dialogue</strong><br/>between a man and his talking dog</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Display the prompt */}
        <p>{prompt}</p>
      </div>

      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-6">
            <textarea
              className="form-control mb-3 border-dark rounded-0"
              rows="10"
              placeholder="Enter text"
              onChange={(e) => setTextAreaValue(e.target.value)}
              value={textAreaValue}
            ></textarea>
             <div className="d-flex justify-content-center">
              <button className="btn btn-light border-dark rounded-0 mr-2" onClick={handleClick}>
                CREATE
              </button>
              <button className="btn btn-light border-dark rounded-0" onClick={() => setTextAreaValue('')}>
                CLEAR
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {loading ? (
        <p className="mt-4" ref={loadingTextRef}>Writing in progress...</p>
      ) : (
        <div className="result-text text-left my-4">
          {result && result.length > 0 ? (
            <div>
              {result.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <div className="d-flex justify-content-center justify-content-md-start">
                <button className="btn btn-light border-dark rounded-0" onClick={() => downloadAsWordDocument(result)}>
                  Download Word Document
                </button>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      )}
    </div>
  );
}
