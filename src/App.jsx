import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
