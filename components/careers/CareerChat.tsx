"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { JobList } from "./JobList";
import { ProfileUpload } from "./ProfileUpload";
import { useCareerChat } from "@/hooks/use-career-chat";

export function CareerChat() {
  const {
    step,
    progress,
    messages,
    profile,
    selectedJob,
    handleUserResponse,
    handleProfileUpload,
    handleJobSelect,
  } = useCareerChat();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-4 border-b">
        <Progress value={progress} className="h-2" />
        <p className="text-sm text-gray-500 mt-2">
          {Math.round(progress)}% Complete
        </p>
      </div>

      <div className="h-[500px] overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}

          {step === "profile" && (
            <ProfileUpload onUpload={handleProfileUpload} />
          )}

          {step === "jobs" && (
            <JobList onSelect={handleJobSelect} selectedJob={selectedJob} />
          )}
        </AnimatePresence>
      </div>

      <div className="p-4 border-t bg-white">
        <ChatInput
          onSend={handleUserResponse}
          disabled={step === "profile" || step === "jobs"}
          placeholder={
            step === "profile"
              ? "Upload your profile picture..."
              : step === "jobs"
              ? "Select a position..."
              : "Type your response..."
          }
        />
      </div>
    </div>
  );
}