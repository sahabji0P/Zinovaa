"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Camera, Send, Check } from 'lucide-react';

// TypeScript Interfaces for Type Safety
interface JobOpening {
  id: string;
  title: string;
  description: string;
  qualifications: string[];
}

interface ChatStep {
  type: 'profile-pic' | 'name' | 'email' | 'phone' | 'job-selection';
  question: string;
}

interface FormData {
  profilePic?: File | null;
  name: string;
  email: string;
  phone: string;
  selectedJob?: JobOpening | null;
}

// Sample job openings data
const jobOpenings: JobOpening[] = [
  {
    id: 'marketing-lead',
    title: 'Marketing Lead',
    description: 'Innovative marketing strategist to drive Zinovaa\'s brand narrative',
    qualifications: ['3+ years marketing experience', 'Strong social media understanding', 'Creative storytelling skills']
  },
  {
    id: 'fashion-designer',
    title: 'Fashion Designer',
    description: 'Creative mind to shape Zinovaa\'s next trendsetting collections',
    qualifications: ['Degree in Fashion Design', 'Portfolio of unique designs', 'Understanding of Gen-Z fashion trends']
  }
];

// Chat flow configuration
const chatFlow = {
  initial: [
    { type: 'profile-pic', question: 'Let\'s capture your vibe! 📸 Upload a profile pic that screams YOU.' },
    { type: 'name', question: 'What should we call you? Drop your name that pops! 💥' },
    { type: 'email', question: 'Slide into our professional DMs - what\'s your email? 📧' },
    { type: 'phone', question: 'Your digits, please! How can we reach the legend? 📱' },
  ] as ChatStep[],
  jobs: [
    { type: 'job-selection', question: 'Which Zinovaa journey are you about to start? Pick your dream role! 🚀' }
  ] as ChatStep[]
};

const CareersChat: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    profilePic: null,
    name: '',
    email: '',
    phone: '',
    selectedJob: null
  });
  const [currentInput, setCurrentInput] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<Array<{ type: string; message: string }>>([]);
  const [progress, setProgress] = useState<number>(0);

  const allSteps: ChatStep[] = [...chatFlow.initial, ...chatFlow.jobs];

  const handleInputSubmit = () => {
    if (!currentInput.trim()) return;

    const currentStepData = allSteps[currentStep];
    
    switch(currentStepData.type) {
      case 'profile-pic':
        // In real implementation, handle file upload
        setFormData(prev => ({ ...prev, profilePic: null }));
        break;
      case 'name':
        setFormData(prev => ({ ...prev, name: currentInput }));
        break;
      case 'email':
        // Basic email validation
        if (/\S+@\S+\.\S+/.test(currentInput)) {
          setFormData(prev => ({ ...prev, email: currentInput }));
        } else {
          alert('Please enter a valid email');
          return;
        }
        break;
      case 'phone':
        // Basic phone validation
        if (/^\d{10}$/.test(currentInput)) {
          setFormData(prev => ({ ...prev, phone: currentInput }));
        } else {
          alert('Please enter a 10-digit phone number');
          return;
        }
        break;
      case 'job-selection':
        const selectedJob = jobOpenings.find(job => job.id === currentInput);
        if (selectedJob) {
          setFormData(prev => ({ ...prev, selectedJob }));
        } else {
          alert('Please select a valid job');
          return;
        }
        break;
    }

    setChatHistory(prev => [...prev, { 
      type: 'user', 
      message: currentInput 
    }]);
    
    setCurrentStep(prev => prev + 1);
    setCurrentInput('');
    setProgress((currentStep + 1) / allSteps.length * 100);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, profilePic: file }));
      setCurrentInput(file.name);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="p-4 bg-red-600 text-white flex items-center justify-between">
          <h2 className="text-xl font-bold">Zinovaa Careers</h2>
          <div className="w-full mx-4 bg-white/30 h-2 rounded-full">
            <div 
              className="h-full bg-white rounded-full transition-all duration-300" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="p-6 space-y-4 max-h-[500px] overflow-y-auto">
          {currentStep < allSteps.length && (
            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-gray-700">
                {allSteps[currentStep].question}
              </p>
            </div>
          )}

          {allSteps[currentStep]?.type === 'job-selection' && (
            <div className="space-y-2">
              {jobOpenings.map(job => (
                <motion.div 
                  key={job.id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-xl shadow-sm cursor-pointer hover:bg-gray-50"
                  onClick={() => setCurrentInput(job.id)}
                >
                  <h3 className="font-bold text-lg">{job.title}</h3>
                  <p className="text-gray-600 text-sm">{job.description}</p>
                </motion.div>
              ))}
            </div>
          )}

          {allSteps[currentStep]?.type === 'profile-pic' && (
            <div className="flex items-center justify-center p-4 border-2 border-dashed rounded-xl">
              <label className="flex flex-col items-center cursor-pointer">
                <Camera className="w-12 h-12 text-red-600 mb-2" />
                <span className="text-gray-600">Upload Profile Picture</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleFileUpload}
                />
              </label>
            </div>
          )}

          <div className="flex items-center space-x-2">
            <input 
              type={allSteps[currentStep]?.type === 'phone' ? 'number' : 'text'}
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              placeholder="Type your response..."
              className="flex-grow p-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              disabled={allSteps[currentStep]?.type === 'job-selection' || allSteps[currentStep]?.type === 'profile-pic'}
            />
            <Button 
              onClick={handleInputSubmit} 
              className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-xl"
              disabled={!currentInput.trim()}
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersChat;