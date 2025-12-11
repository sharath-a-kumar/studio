"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User, Bot, Sparkles, ChevronRight, Minimize2, Maximize2, Briefcase, Code, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { submitChatMessage, ChatMessage } from "@/app/actions";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "model", content: "Hi! I’m Sharath's AI assistant. Want to know more about his experience, projects, or skills?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: ChatMessage = { role: "user", content };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Pass the *previous* messages as history, excluding the one we just added locally to avoid duplication issues in logic if any
      // but actually we should pass the full history up to this point. 
      // Ideally, the server action takes the full history.
      
      const response = await submitChatMessage([...messages, userMessage], content);
      
      const botMessage: ChatMessage = { role: "model", content: response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Failed to send message", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  const quickActions = [
    { label: "Experience", icon: Briefcase, query: "Tell me about your work experience." },
    { label: "Projects", icon: Code, query: "What are your top projects?" },
    { label: "Skills", icon: Sparkles, query: "What is your tech stack?" },
    { label: "Contact", icon: Mail, query: "How can I contact you?" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "mb-4 pointer-events-auto flex flex-col rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-300",
              isExpanded ? "w-[90vw] h-[80vh] sm:w-[600px] sm:h-[800px]" : "w-[350px] sm:w-[400px] h-[600px] max-h-[80vh]"
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-3">
                 <div className="relative">
                     <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                        <Bot className="h-6 w-6 text-white" />
                     </div>
                     <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 border-2 border-black" />
                 </div>
                 <div>
                    <h3 className="font-bold text-white text-sm">AI Assistant</h3>
                    <p className="text-xs text-primary/80 flex items-center gap-1">
                        <Sparkles size={10} /> Online
                    </p>
                 </div>
              </div>
              <div className="flex gap-1">
                 <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white" onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                 </Button>
                 <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-white/10 text-muted-foreground hover:text-white" onClick={() => setIsOpen(false)}>
                    <X size={16} />
                 </Button>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4 bg-transparent">
               <div className="space-y-4">
                  {messages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        "flex gap-3 max-w-[85%]",
                        msg.role === "user" ? "ml-auto flex-row-reverse" : ""
                      )}
                    >
                       <Avatar className="h-8 w-8 border border-white/10 shadow-sm">
                          {msg.role === "model" ? (
                             <AvatarFallback className="bg-primary/10 text-primary"><Bot size={14} /></AvatarFallback>
                          ) : (
                             <AvatarFallback className="bg-secondary/10 text-secondary"><User size={14} /></AvatarFallback>
                          )}
                       </Avatar>
                       
                       <div className={cn(
                           "p-3 rounded-2xl text-sm leading-relaxed shadow-sm overflow-hidden prose prose-invert prose-p:my-1 prose-headings:my-2 prose-ul:my-1 prose-li:my-0.5 prose-strong:text-primary max-w-none break-words",
                           msg.role === "user" 
                             ? "bg-primary text-primary-foreground rounded-tr-sm prose-p:text-primary-foreground prose-strong:text-white" 
                             : "bg-white/5 border border-white/10 text-white rounded-tl-sm backdrop-blur-md"
                       )}>
                           <ReactMarkdown 
                              remarkPlugins={[remarkGfm]}
                              components={{
                                  ul: ({node, ...props}) => <ul className="list-disc pl-4 space-y-1" {...props} />,
                                  ol: ({node, ...props}) => <ol className="list-decimal pl-4 space-y-1" {...props} />,
                                  li: ({node, ...props}) => <li className="marker:text-primary/70" {...props} />,
                                  p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                                  strong: ({node, ...props}) => <span className="font-bold text-primary" {...props} />,
                                  a: ({node, ...props}) => <a className="text-primary underline underline-offset-2 hover:text-primary/80" target="_blank" rel="noopener noreferrer" {...props} />,
                              }}
                           >
                               {msg.content}
                           </ReactMarkdown>
                       </div>
                    </motion.div>
                  ))}
                  
                  {isLoading && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
                       <Avatar className="h-8 w-8 border border-white/10"><AvatarFallback className="bg-primary/10"><Bot size={14} /></AvatarFallback></Avatar>
                       <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-sm w-16 flex items-center justify-center gap-1">
                          <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce [animation-delay:-0.3s]" />
                          <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce [animation-delay:-0.15s]" />
                          <span className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-bounce" />
                       </div>
                    </motion.div>
                  )}
                  <div ref={scrollRef} />
               </div>
            </ScrollArea>

            {/* Quick Actions & Input */}
            <div className="p-4 bg-black/40 border-t border-white/10 backdrop-blur-lg">
               {messages.length < 3 && (
                   <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide mask-fade-right">
                       {quickActions.map((action) => (
                           <button
                             key={action.label}
                             onClick={() => handleSendMessage(action.query)}
                             className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all whitespace-nowrap"
                           >
                               <action.icon size={12} />
                               {action.label}
                           </button>
                       ))}
                   </div>
               )}
            
              <div className="relative flex items-center gap-2">
                 <Input 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask anything..."
                    className="pr-12 bg-white/5 border-white/10 focus-visible:ring-primary/50 rounded-full h-11 transition-all"
                    disabled={isLoading}
                 />
                 <Button 
                   size="icon" 
                   className={cn(
                       "absolute right-1 h-9 w-9 rounded-full bg-primary text-primary-foreground transition-all",
                       !inputValue.trim() && "opacity-50 scale-90"
                   )}
                   onClick={() => handleSendMessage(inputValue)}
                   disabled={!inputValue.trim() || isLoading}
                 >
                    <Send size={16} />
                 </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto h-14 w-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.5)] border-2 border-white/20 hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] transition-all z-50 group"
      >
        <AnimatePresence mode="wait">
            {!isOpen ? (
                <motion.div
                    key="chat-icon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                >
                     <MessageSquare className="h-7 w-7 text-white fill-white/20" />
                </motion.div>
            ) : (
                <motion.div
                    key="close-icon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                >
                     <ChevronRight className="h-8 w-8 text-white rotate-90" />
                </motion.div>
            )}
        </AnimatePresence>
        
        {/* Ping Animation when closed */}
        {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-black"></span>
            </span>
        )}
      </motion.button>
    </div>
  );
}
