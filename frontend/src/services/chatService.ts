import { ChatResponse } from '../types/chat';



const API_BASE_URL = 'http://localhost:3000/api/send';
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY; // keep it secure!

export class ChatService {
  // Send backend response to OpenAI
  private static async processWithAI(message: string): Promise<string> {
    try {
      const response = await fetch(OPENAI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            {
              role: 'user',
              content: `Please enhance or rewrite this message nicely:\n\n${message}`,
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.choices?.[0]?.message?.content || message;
    } catch (error) {
      console.error('Error processing with AI:', error);
      return message; // fallback to original backend message
    }
  }

  // Send user message to backend, then process backend response with AI
  static async sendMessage(message: string): Promise<ChatResponse> {
    try {
      // 1️⃣ Send original user message to backend
      const backendResponse = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });

      if (!backendResponse.ok) {
        throw new Error(`Backend error! status: ${backendResponse.status}`);
      }

      const data = await backendResponse.json();
      const backendMessage = data.message || 'No response from server';

      // 2️⃣ Process backend message through AI
      const aiMessage = await this.processWithAI(backendMessage);

      return {
        message: aiMessage,
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
