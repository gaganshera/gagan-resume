
import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const askResumeAssistant = async (question: string) => {
  const model = "gemini-3-flash-preview";
  
  const systemInstruction = `
    You are an AI assistant for Gaganjot Singh's personal portfolio. 
    You have deep knowledge of his professional background based on his resume data.
    Answer questions clearly, professionally, and concisely. 
    Gaganjot is a Principal Architect with 13+ years of experience.
    
    Resume Context:
    - Current Role: Principal Engineer at Nagarro.
    - Key Skills: Node.js, AWS, Kubernetes, Microservices, AI/GenAI.
    - Major Achievements: Won multiple AI hackathons (2023, 2024), "Brightest Mind" at Nagarro for 5 years.
    - Previous: CarDekho, Xicom, Enbake.
    
    If asked about things not in the resume, politely steer the conversation back to his professional work.
    Question: ${question}
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: question,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my AI core right now. Feel free to browse the sections below or contact Gaganjot directly via email!";
  }
};
