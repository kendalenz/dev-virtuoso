import './App.css'
import OptionSelection from './components/OptionSelection';

function App() {
  console.log(import.meta.env.VITE_Open_AI_Key);
  return (
    <div className='App'>
      <OptionSelection />
    </div>
  
  )
}

export default App
