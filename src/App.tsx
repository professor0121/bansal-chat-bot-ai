import React, { useState } from 'react';
import { Send, Trash2, School, Bot, User } from 'lucide-react';
import ChatMessage from './components/ChatMessage';
import Header from './components/Header';
import { Message } from './types';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: 'Hello! Welcome to Bansal Group of Institution, Bhopal. How can I assist you today?',
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: input }]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages(prev => [...prev, { type: 'bot', content: botResponse }]);
    }, 600);

    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([{
      type: 'bot',
      content: 'Hello! Welcome to Bansal Group of Institution, Bhopal. How can I assist you today?',
    }]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Chat messages container */}
          <div className="h-[600px] overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message} />
            ))}
          </div>

          {/* Input area */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex items-center space-x-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                className="flex-1 resize-none rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[50px] max-h-[100px]"
                rows={1}
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Send size={20} />
              </button>
              <button
                onClick={clearChat}
                className="bg-gray-200 text-gray-600 p-3 rounded-full hover:bg-gray-300 transition-colors"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Simulated bot responses based on user input
function getBotResponse(input: string): string {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes('admission') || lowerInput.includes('apply')) {
    return 'For admissions, please visit our admission portal at https://bgibhopal.com//admissions or contact our admission office at +91-XXXXXXXXXX. We offer various undergraduate and postgraduate programs in Engineering, Management, and Computer Applications.';
  }
  
  if (lowerInput.includes('course') || lowerInput.includes('program')) {
    return 'We offer various courses including:\n- B.Tech in Computer Science\n- B.Tech in Mechanical Engineering\n- B.Tech in Civil Engineering\n- BBA\n- MBA\n- MCA\nFor detailed information about any specific course, please ask.';
  }
  
  if (lowerInput.includes('fee') || lowerInput.includes('fees')) {
    return 'The fee structure varies by program. Please visit our website or contact our admission office for detailed fee information. We also offer scholarships for meritorious students.';
  }
  
  if (lowerInput.includes('location') || lowerInput.includes('address')) {
    return 'Bansal Group of Institution is located in Bhopal, Madhya Pradesh. Our campus is equipped with modern facilities and is easily accessible via public transport.';
  }
  
  if (lowerInput.includes('faculty') || lowerInput.includes('teacher')) {
    return 'Our faculty members are highly qualified professionals with extensive academic and industry experience. Many hold Ph.D. degrees and regularly publish research papers.';
  }
  if (lowerInput.includes('Document') || lowerInput.includes('Required')) {
    return 'For documents visit https://bgibhopal.com/online-fee-payment/';
  }
  
  if (lowerInput.includes('facilities') || lowerInput.includes('facility') || lowerInput.includes('services')|| lowerInput.includes('service')) {
    return ' bus , hostel, canteen, library, online fee payment and so many more ';
  }
  if (lowerInput.includes('result') || lowerInput.includes('outcome') || lowerInput.includes('output')|| lowerInput.includes('successrate')) {
    return `For result visit https://bgibhopal.com/examination`;
  }
  
  return "I'm here to help you with information about Bansal Group of Institution. You can ask about admissions, courses, fees, facilities, or any other aspect of our institution.";
}

export default App;