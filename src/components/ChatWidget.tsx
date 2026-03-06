import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ChevronDown, User, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';

type Message = {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    text: "Hi! I'm the AutomaEstate AI assistant. How can I help you automate your real estate agency today?",
    sender: 'bot',
    timestamp: new Date()
  }
];

const SUGGESTED_ACTIONS = [
  "How does the automation work?",
  "What results can I expect?",
  "I'd like to book a free audit."
];

// System instruction for the AI
const SYSTEM_INSTRUCTION = `You are the AI assistant for AutomaEstate, a specialist agency that builds custom automation systems for real estate agencies.
Your goal is to help agency owners understand how automation can save them time and money.

Key Services:
1. Lead Automation: Instant 60-second response to new leads 24/7.
2. CRM Automation: Self-updating pipelines, task creation, and deal tracking.
3. Document Automation: Auto-generated contracts and e-signatures.
4. Client Communication: Automated updates for vendors and buyers.

Value Proposition:
- Save 25+ hours per agent weekly.
- Stop lead leakage (60% of leads are lost due to slow response).
- No new software to learn (we build inside their existing tools).
- ROI in 30 days.

Call to Action:
- Encourage users to book a "Free 30-Minute Automation Audit".
- Booking Link: https://cal.com/ck-jha/30min
- Contact Email: mail@ckjha.com

Tone:
- Professional, confident, and concise.
- Focus on business outcomes (revenue, time saved).
- Do not be overly salesy, be helpful and consultative.

If asked about pricing: "We charge a one-time setup fee plus an optional monthly retainer. Pricing depends on your specific needs, which we can determine during the free audit."
`;

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Ref to store the chat session
  const chatSessionRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Initialize Gemini Chat
  useEffect(() => {
    const initChat = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const chat = ai.chats.create({
          model: "gemini-3-flash-preview",
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
          },
        });
        chatSessionRef.current = chat;
      } catch (error) {
        console.error("Failed to initialize chat:", error);
      }
    };

    initChat();
  }, []);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      // Use the existing chat session or create a fallback one
      let chat = chatSessionRef.current;
      
      if (!chat) {
        // Fallback initialization if ref is null
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        chat = ai.chats.create({
          model: "gemini-3-flash-preview",
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
          },
        });
        chatSessionRef.current = chat;
      }

      const result = await chat.sendMessage({ message: text });
      const responseText = result.text;

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble connecting right now. Please try again or email us at mail@ckjha.com.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white w-[350px] md:w-[380px] h-[500px] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden pointer-events-auto mb-4"
          >
            {/* Header */}
            <div className="bg-slate-900 p-4 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">AutomaEstate AI</h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex gap-2 max-w-[85%]",
                    msg.sender === 'user' ? "ml-auto flex-row-reverse" : ""
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                    msg.sender === 'user' ? "bg-slate-200" : "bg-blue-100"
                  )}>
                    {msg.sender === 'user' ? <User className="w-4 h-4 text-slate-600" /> : <Bot className="w-4 h-4 text-blue-600" />}
                  </div>
                  <div className={cn(
                    "p-3 rounded-2xl text-sm leading-relaxed",
                    msg.sender === 'user' 
                      ? "bg-blue-600 text-white rounded-tr-none" 
                      : "bg-white text-slate-700 border border-slate-100 rounded-tl-none shadow-sm"
                  )}>
                    {msg.sender === 'bot' ? (
                      <div className="markdown-body">
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      </div>
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-2 max-w-[85%]">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex gap-1">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Actions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2 bg-slate-50 flex flex-col gap-2">
                {SUGGESTED_ACTIONS.map((action, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(action)}
                    className="text-left text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-100 p-3 rounded-xl transition-colors font-medium"
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-slate-100 shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isTyping ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                </button>
              </div>
              <div className="text-center mt-2">
                 <a href="mailto:mail@ckjha.com" className="text-[10px] text-slate-400 hover:text-blue-600 transition-colors">
                   Direct inquiries to: mail@ckjha.com
                 </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors pointer-events-auto flex items-center justify-center relative group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Notification Badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
        )}
      </motion.button>
    </div>
  );
}
