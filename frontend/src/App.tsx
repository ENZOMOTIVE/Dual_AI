import React from 'react';
import { ChatHeader } from './components/ChatHeader';
import { ChatMessages } from './components/ChatMessages';
import { ChatInput } from './components/ChatInput';
import { useChat } from './hooks/useChat';

function App() {
  const { messages, isLoading, sendMessage } = useChat();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl h-[600px] bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
        <ChatHeader />
        <ChatMessages messages={messages} />
        <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;