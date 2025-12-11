"use server";

import { chatWithPortfolio } from "@/ai/flows/portfolio-chat";

export interface ChatMessage {
    role: 'user' | 'model';
    content: string;
}

export async function submitChatMessage(history: ChatMessage[], message: string) {
    try {
        const response = await chatWithPortfolio({ history, message });
        return response;
    } catch (error) {
        console.error("Error in chat action:", error);
        return "I'm having a bit of trouble connecting right now. Please try again later.";
    }
}
