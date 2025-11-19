import { GoogleGenAI } from "@google/genai";

// Initialize the client safely
const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key is missing. Gemini features will not work.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const askCoach = async (question: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) {
    return "Configuration Error: API Key missing. Please set your API Key to access the AI Coach.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: `You are the head wrestling coach for "Rich Habits", a premium athletic brand. 
        Your tone is intense, motivational, professional, and knowledgeable. 
        You specialize in wrestling technique, strength and conditioning for combat sports, and mental toughness.
        Keep answers concise (under 150 words) and focused on high performance. 
        Addressing the user as "Athlete" or "Champ".`,
      }
    });

    return response.text || "Get your head in the game. Try asking that again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Coach is busy on the mats right now. Try again later.";
  }
};