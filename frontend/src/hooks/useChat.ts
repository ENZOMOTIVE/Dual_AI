import { useState, useCallback } from 'react';
import { Message } from '../types/chat';
import { ChatService } from '../services/chatService';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = useCallback((text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  }, []);

  const sendMessage = useCallback(async (text: string) => {
    if (isLoading) return;

    // Add user message
    addMessage(text, 'user');
    setIsLoading(true);

    try {
      // Send to backend and get response
      const response = await ChatService.sendMessage(text);
      
      // Add bot response
      addMessage(response.message, 'bot');
    } catch (error) {
      console.error('Error in sendMessage:', error);
      addMessage('Sorry, something went wrong. Please try again.', 'bot');
    } finally {
      setIsLoading(false);
    }
  }, [addMessage, isLoading]);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
    clearMessages,
  };
}