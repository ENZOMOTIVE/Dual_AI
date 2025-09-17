import React from 'react';
import { Bot } from 'lucide-react';

export function ChatHeader() {
  return (
    <div className="bg-blue-500 text-white px-6 py-4 flex items-center gap-3">
      <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
        <Bot size={24} />
      </div>
      <div>
        <h1 className="text-lg font-semibold">ChatBot</h1>
        <p className="text-blue-100 text-sm">Always here to help</p>
      </div>
    </div>
  );
}