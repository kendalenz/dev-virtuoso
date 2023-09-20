import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Translation from './components/Translation';

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/translation' element={<Translation />}/>
        <Route path='/test' element={<div>Test Route</div>} />

      </Routes>
    </div>
  )
}

export default App;
