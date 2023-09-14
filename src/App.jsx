import './App.css'
import OpenAI from "openai";
import OptionSelection from './components/OptionSelection';
import Translation from './components/Translation';
import { arrayItems } from './ChatOptions';
import { useState } from 'react';

function App () {

  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_Open_AI_Key,
    dangerouslyAllowBrowser: true
  });

  const [option, setOption] = useState({});
  const [input, setInput] = useState('');

  const selectOption = (option) => {
    setOption(option);
  }

  const reply = async() => {
    let object = {...option, messages: input};

    const response = await openai.chat.completions.create(object);
console.log(response)
  };

  console.log(option)

  return (
    <div className='App'>
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption}/>
      ):(
        <Translation reply={reply} setInput={setInput}/>
      )}
    </div>
  )
}

export default App;
