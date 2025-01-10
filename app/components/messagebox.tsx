import React, { useState } from 'react';

const MessageBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = (message: { sender: string; text: string; }) => {
    setMessages([...messages, message]);
  };

  const handleSendWithAI = async () => {
    if (input.trim()) {
      const userMessage = input;
      setInput('');
      handleSend({ sender: 'User', text: userMessage }); // Display user message immediately
      setLoading(true);
      setTimeout(() => {
        const botResponse = 'This is a dummy response';
        setLoading(false);
        handleSend({ sender: 'Bot', text: botResponse }); // Update with bot response
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col w-full h-[40%] mt-auto">
      {/* Speech Box */}
      <div className="border max-h-auto border-gray-300 max-h-[280px] hide-scrollbar text-white p-3 overflow-scroll flex-grow overflow-y-scroll mb-4 rounded-xl">
        {messages.map((message, index) => (
          <div key={index} className="">
            <strong>{message.sender}:</strong> <span>{message.text}</span>
          </div>
        ))}
        {loading && <div className="mb-3 "><strong>Bot:</strong> <span>Loading...</span></div>}
      </div>

      {/* Input box */}
      <div className="flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 flex-grow"
        />
        <button
          onClick={handleSendWithAI}
          className="ml-2 bg-blue-500 text-white rounded-lg px-4 py-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageBox;