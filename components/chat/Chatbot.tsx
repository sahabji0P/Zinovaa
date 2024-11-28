"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { ChatOptions } from "./ChatOptions";
import { VendorForm } from "./forms/VendorForm";
import { CustomerForm } from "./forms/CustomerForm";
import { faqs, type ChatMessage as ChatMessageType, initialSteps } from "@/lib/chat-data";
import { VendorFormData, CustomerFormData } from "@/types/forms";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [currentStep, setCurrentStep] = useState(initialSteps[0]);
  const [activeForm, setActiveForm] = useState<'vendor' | 'customer' | null>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (content: string, type: 'user' | 'bot', form?: 'vendor' | 'customer' | null) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
      form
    }]);
  };

  const handleVendorFormSubmit = (data: VendorFormData) => {
    addMessage("Thank you for your vendor application! Our team will review your submission and contact you within 5-7 business days.", 'bot');
    setActiveForm(null);
  };

  const handleCustomerFormSubmit = (data: CustomerFormData) => {
    addMessage("Thank you for reaching out! Our support team will get back to you within 24 hours.", 'bot');
    setActiveForm(null);
  };

  const handleUserMessage = (message: string) => {
    addMessage(message, 'user');
    
    const lowerMessage = message.toLowerCase();

    // Check for specific keywords
    if (lowerMessage.includes('vendor') || lowerMessage.includes('become a vendor')) {
      setTimeout(() => {
        addMessage("Please fill out our vendor registration form:", 'bot', 'vendor');
        setActiveForm('vendor');
      }, 500);
      return;
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('support')) {
      setTimeout(() => {
        addMessage("Please fill out our customer support form:", 'bot', 'customer');
        setActiveForm('customer');
      }, 500);
      return;
    }

    if (lowerMessage.includes('career') || lowerMessage.includes('job') || lowerMessage.includes('opening')) {
      setTimeout(() => {
        addMessage(generateCareerInfo(), 'bot');
      }, 500);
      return;
    }

    // Check for FAQ matches
    const faq = faqs.find(f => 
      f.question.toLowerCase().includes(lowerMessage) ||
      lowerMessage.includes(f.question.toLowerCase())
    );

    if (faq) {
      setTimeout(() => addMessage(faq.answer, 'bot'), 500);
    } else {
      setTimeout(() => addMessage(
        "I'll connect you with our support team. Please provide your email address so we can follow up.",
        'bot'
      ), 500);
    }
  };

  const handleOptionSelect = (option: string) => {
    addMessage(option, 'user');
    
    switch (option) {
      case "I have a question":
        setTimeout(() => {
          addMessage("What would you like to know? Here are some common topics:", 'bot');
          setCurrentStep({
            id: 'faq',
            message: "",
            type: 'select',
            options: faqs.map(f => f.question)
          });
        }, 500);
        break;
      case "I want to contact support":
        setTimeout(() => {
          addMessage("Please fill out our customer support form:", 'bot', 'customer');
          setActiveForm('customer');
        }, 500);
        break;
      case "I want to become a vendor":
        setTimeout(() => {
          addMessage("Please fill out our vendor registration form:", 'bot', 'vendor');
          setActiveForm('vendor');
        }, 500);
        break;
      case "I want to know about career opportunities":
        setTimeout(() => {
          addMessage(generateCareerInfo(), 'bot');
        }, 500);
        break;
      default:
        handleUserMessage(option);
    }
  };

  const generateCareerInfo = () => {
    return `Current openings at Zinovaa:
          
1. Senior Fashion Buyer
   - 5+ years experience in fashion buying
   - Strong market knowledge
   - Excellent negotiation skills

2. UI/UX Designer
   - 3+ years experience
   - E-commerce portfolio
   - Proficiency in Figma

3. Delivery Operations Manager
   - 4+ years in logistics
   - Team management experience
   - Data-driven decision making

To apply, please visit our careers page or send your resume to careers@zinovaa.com`;
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-red-600 hover:bg-red-700 shadow-lg"
      >
        <MessageSquare className="w-6 h-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 w-[380px] max-w-[calc(100vw-3rem)] bg-gray-50 rounded-2xl shadow-xl"
          >
            <div className="flex items-center justify-between p-4 border-b z-40 backdrop-blur-md">
              <h3 className="font-semibold">Zinovaa Assistant</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div 
              ref={chatRef}
              className="h-[400px] overflow-y-auto p-4 space-y-4"
            >
              {messages.map((message, index) => (
                <ChatMessage key={`${message.id}-${index}`} message={message} />
              ))}
              
              {activeForm === 'vendor' && (
                <VendorForm
                  onSubmit={handleVendorFormSubmit}
                  onCancel={() => setActiveForm(null)}
                />
              )}

              {activeForm === 'customer' && (
                <CustomerForm
                  onSubmit={handleCustomerFormSubmit}
                  onCancel={() => setActiveForm(null)}
                />
              )}

              {!activeForm && currentStep.type === 'select' && currentStep.options && (
                <ChatOptions
                  options={currentStep.options}
                  onSelect={handleOptionSelect}
                />
              )}
            </div>

            <div className="p-4 border-t bg-white rounded-b-2xl">
              <ChatInput
                onSend={handleUserMessage}
                placeholder="Type your message..."
                disabled={activeForm !== null}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}