import React from 'react';
import { Bot, User } from 'lucide-react';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.type === 'bot';
  
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex max-w-[80%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`flex-shrink-0 ${isBot ? 'mr-3' : 'ml-3'}`}>
          <div className={`rounded-full p-2 ${isBot ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}>
            {isBot ? <Bot size={24} /> : <User size={24} />}
          </div>
        </div>
        <div
          className={`rounded-lg p-4 ${
            isBot
              ? 'bg-blue-50 text-gray-800'
              : 'bg-blue-600 text-white'
          }`}
        >
          <p className="whitespace-pre-line">{message.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;