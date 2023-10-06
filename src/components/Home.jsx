import OpenAI from 'openai';
import { useState } from 'react';
import Translation from './Translation';

const Home = () => {
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_Open_AI_Key,
    dangerouslyAllowBrowser: true,
  });

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const reply = async () => {
    function generateRandomUniqueId() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (
        c
      ) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    }

    const userId = generateRandomUniqueId(); // Generate a user ID

    const promptMessage = {
      role: 'system',
      content: 'You are a helpful assistant.',
    };

    const userMessage = {
      role: 'user',
      content: input, // Include user's input message here
    };

    // Define a default option object with a model parameter
    const defaultOption = {
      model: 'gpt-4',
      messages: [],
      temperature: 0,
      max_tokens: 1024,
    };

    let object = {
      ...defaultOption, // Use the default option
      messages: [promptMessage, userMessage],
      user: userId,
    };

    const response = await openai.chat.completions.create(object);
    setResult(response.choices[0].message.content);
  };

  return (
    <div>
      <Translation reply={reply} setInput={setInput} result={result} />
    </div>
  );
};

export default Home;
