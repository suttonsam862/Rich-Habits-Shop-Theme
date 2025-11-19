import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Dumbbell } from 'lucide-react';
import { askCoach } from '../../services/geminiService';
import { ChatMessage } from '../../types';

export const AICoachModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Ready to work, Champ? Ask me about technique, weight management, or mindset.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await askCoach(input);
    
    const botMessage: ChatMessage = { role: 'model', text: responseText };
    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Trigger */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 bg-brand-red text-white p-4 rounded-full shadow-[0_0_30px_rgba(208,0,0,0.4)] hover:scale-110 transition-transform duration-300 flex items-center gap-2 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Dumbbell className="w-6 h-6" />
        <span className="font-bold uppercase text-sm pr-2 hidden md:block">Ask Coach</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-brand-charcoal border border-white/10 rounded-lg shadow-2xl flex flex-col h-[600px] animate-[fadeIn_0.3s_ease-out]">
            
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-brand-black rounded-t-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center">
                   <Dumbbell className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-white uppercase tracking-wide">Rich Habits AI Coach</h3>
                  <p className="text-xs text-brand-red uppercase font-bold">Powered by Gemini</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0a0a0a]">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-white text-black font-medium rounded-tr-none' 
                      : 'bg-brand-charcoal border border-white/10 text-neutral-200 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-brand-charcoal border border-white/10 px-4 py-2 rounded-lg rounded-tl-none">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-brand-red rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-brand-red rounded-full animate-bounce delay-75"></span>
                      <span className="w-2 h-2 bg-brand-red rounded-full animate-bounce delay-150"></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-brand-black border-t border-white/10 rounded-b-lg">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about drills, diet, or mindset..."
                  className="w-full bg-brand-charcoal text-white pl-4 pr-12 py-3 rounded-full border border-white/10 focus:outline-none focus:border-brand-red transition-colors text-sm"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-brand-red rounded-full flex items-center justify-center text-white disabled:opacity-50 hover:bg-red-700 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};