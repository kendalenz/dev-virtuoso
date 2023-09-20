import OpenAI from 'openai';
import { arrayItems } from '../ChatOptions';
import { useState } from 'react';
import OptionSelection from './OptionSelection';
import Translation from './Translation';

const Home = () => {

    const openai = new OpenAI({
        apiKey: import.meta.env.VITE_Open_AI_Key,
        dangerouslyAllowBrowser: true
      });
    
      const [option, setOption] = useState({});
      const [input, setInput] = useState('');
      const [result, setResult] = useState('');
    
      const selectOption = (option) => {
        setOption(option);
      }
    
    const reply = async () => {
      function generateRandomUniqueId() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (Math.random() * 16) | 0,
              v = c == 'x' ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        });
      }
      
      const userId = generateRandomUniqueId(); // Generate a user ID
    
      const promptMessage = {
        role: 'system',
        content: 'You are a helpful assistant.'
      };
    
      const userMessage = {
        role: 'user',
        content: input // Include user's input message here
      };
    
      let object = {
        ...option,
        messages: [promptMessage, userMessage], // Include both system and user messages
        user: userId // Provide the user ID
      };
    
      const response = await openai.chat.completions.create(object);
      setResult(response.choices[0].message.content);
    };
    console.log(option)
    

  return (
    <div>
    {Object.values(option).length === 0 ? (
      <OptionSelection arrayItems={arrayItems} selectOption={selectOption}/>
    ):(
      <Translation reply={reply} setInput={setInput} result={result} />
    )}
  </div>
  )
}

export default Home;