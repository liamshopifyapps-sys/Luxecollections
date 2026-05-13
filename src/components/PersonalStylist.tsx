import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Send, Loader2, User } from "lucide-react";
import Markdown from "react-markdown";

interface Message {
  role: "user" | "ai";
  content: string;
}

export default function PersonalStylist() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "Welcome to your personal boutique archive. I am your Luxe Stylist. Tell me about your aesthetic preferences or a specific occasion you're dressing for." }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSend() {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
           { role: "user", parts: [{ text: `You are a high-end fashion personal stylist for "Luxe Collections". Your tone is refined, architectural, sophisticated, and helpful. You speak about "quiet luxury" and "elevated essentials". Provide styling advice based on this request: ${userMessage}. Recommend pieces from our archive (Blazers, Silk Dresses, Wool Coats, Merino Accessories).` }] }
        ],
        config: {
          systemInstruction: "You are an elite personal stylist for the luxury brand Luxe Collections. You emphasize quality, silhouette, and architectural precision in fashion. You help customers curate their 'personalized boutique archive'."
        }
      });

      const aiContent = response.text || "I apologize, my aesthetic analysis encountered an error. How else can I assist you?";
      setMessages(prev => [...prev, { role: "ai", content: aiContent }]);
    } catch (error) {
      console.error("AI Stylist Error:", error);
      setMessages(prev => [...prev, { role: "ai", content: "The archive is currently being updated. Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-white border border-luxe-ink/5 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col h-[600px]">
      <div className="p-8 border-b border-luxe-ink/5 bg-luxe-paper flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-luxe-ink text-luxe-paper flex items-center justify-center">
            <Sparkles size={18} />
          </div>
          <div>
            <h3 className="text-xl font-serif">Luxe Stylist</h3>
            <p className="text-[10px] uppercase tracking-widest opacity-50">AI-Crafted Recommendations</p>
          </div>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto p-8 space-y-8 scroll-smooth">
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex",
                m.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div className={cn(
                "max-w-[80%] p-6 rounded-2xl text-sm leading-relaxed",
                m.role === "user" 
                  ? "bg-luxe-ink text-luxe-paper rounded-tr-none" 
                  : "bg-luxe-paper/50 text-luxe-ink rounded-tl-none border border-luxe-ink/5"
              )}>
                <div className="markdown-body">
                  <Markdown>{m.content}</Markdown>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <div className="flex justify-start">
             <div className="bg-luxe-paper/50 p-6 rounded-2xl rounded-tl-none border border-luxe-ink/5">
                <Loader2 size={20} className="animate-spin text-luxe-accent" />
             </div>
          </div>
        )}
      </div>

      <div className="p-8 bg-luxe-paper/30 border-t border-luxe-ink/5">
        <div className="relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Describe your aesthetic blueprint..."
            className="w-full bg-white border border-luxe-ink/10 rounded-full py-5 px-8 pr-16 outline-none focus:border-luxe-ink transition-colors text-sm"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-luxe-ink text-luxe-paper rounded-full flex items-center justify-center hover:bg-luxe-ink/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={16} />
          </button>
        </div>
        <p className="text-[10px] text-center mt-6 uppercase tracking-widest opacity-30">
          Powered by Gemini AI • Luxe Boutique Archive v1.0
        </p>
      </div>
    </div>
  );
}

// Utility function duplicated for this component if needed or use from lib
import { cn } from "../lib/utils";
