// src/genkit.ts
import { genkit } from 'genkit';
import { googleAI, gemini15Flash } from '@genkit-ai/googleai';

const apiKey = process.env.GOOGLE_GENAI_API_KEY;

if (!apiKey) {
  console.error("❌ GOOGLE_GENAI_API_KEY is missing from process.env!");
} else {
  console.log("✅ GOOGLE_GENAI_API_KEY is successfully loaded.");
}

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: apiKey
    })
  ],
  // Setting the default model here is good practice
  model: 'googleai/gemini-pro',
});