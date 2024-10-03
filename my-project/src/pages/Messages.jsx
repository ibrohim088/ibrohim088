import React, { useState } from 'react';

// Message Component
const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Handle sending a message
  const handleSend = () => {
    if (input.trim() !== '') {
      setMessages([...messages, { text: input, id: Date.now() }]);
      setInput('');
    }
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
        
        {/* Toggle Button for Dark Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mb-4 px-4 py-2 bg-blue-500 text-white dark:bg-yellow-500 rounded"
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>

        <div className="w-full max-w-lg p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          
          {/* Chat Messages Display */}
          <div className="mb-4 h-80 overflow-y-auto border-b border-gray-300 dark:border-gray-700">
            {messages.map((message) => (
              <div key={message.id} className="p-2 my-2 text-sm text-gray-900 dark:text-gray-100">
                {message.text}
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md focus:outline-none"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSend}
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-yellow-500 dark:hover:bg-yellow-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
