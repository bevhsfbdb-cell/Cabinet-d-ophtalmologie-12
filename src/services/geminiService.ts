import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const chatWithAssistant = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    const chat = ai.chats.create({
      model: "gemini-3.1-pro-preview",
      config: {
        systemInstruction: `Tu es l'assistant virtuel intelligent du Cabinet d'ophtalmologie du Dr. NASROUNI Rihab à Dar Bouazza. 
        Ton rôle est d'aider les patients à comprendre les services du cabinet, les horaires, l'accès et de donner des conseils généraux sur l'hygiène oculaire.
        
        Informations clés :
        - Docteur : Dr. NASROUNI Rihab
        - Lieu : DARB Business Center, Dar Bouazza, Casablanca.
        - Horaires : Lun-Ven (9h-18h), Sam (9h-13h).
        - Équipements : Auto-réfractomètre, Lampe à fente, Tonomètre.
        - Services : Consultation générale, correction optique, suivi glaucome, examen du segment antérieur.
        
        Règles :
        1. Sois professionnel, bienveillant et concis.
        2. Ne donne JAMAIS de diagnostic médical définitif. Suggère toujours une consultation pour tout symptôme.
        3. Réponds dans la langue de l'utilisateur (Français ou Arabe).
        4. Si l'utilisateur veut un rendez-vous, dirige-le vers les numéros de téléphone : +212 6 14 13 18 17 ou +212 5 22 29 26 43.`,
      },
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Chat error:", error);
    return "Désolé, je rencontre une petite difficulté technique. Veuillez nous contacter par téléphone.";
  }
};
