import { ChatResponse } from '../types/chat';

const API_BASE_URL = 'http://localhost:3000/api/send';

export class ChatService {
  static async sendMessage(message: string): Promise<ChatResponse> {
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        message: data.message || 'No response from server',
        success: true,
      };
    } catch (error) {
      console.error('Error sending message:', error);
      return {
        message: "Sorry, I couldn't connect to the server. Please try again.",
        success: false,
      };
    }
  }
}
