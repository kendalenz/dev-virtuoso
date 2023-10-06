import { useState } from 'react';

export default function Translation({ reply, setInput, result, prompt }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await reply();
    setLoading(false);
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <h2>NarrativeGenius</h2>
      </div>
      
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <p className='font-weight-bold'>Write a poem</p>
                <p className="card-text">about mushrooms in the voice of Theodore Roethke</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
              onChange={(e) => setInput(e.target.value)}
            ></textarea>
            <button className="btn btn-light border-dark rounded-0 btn-block" onClick={handleClick}>
              CREATE
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <p>Writing in progress...</p>
      ) : (
        <div className="result-text text-left my-4">
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
