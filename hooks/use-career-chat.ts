"use client";

import { useState, useCallback } from "react";
import { Message, Job, ChatStep } from "@/types/careers";
import { generateUniqueId } from "@/lib/utils";

export function useCareerChat() {
  const [step, setStep] = useState<ChatStep>("welcome");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: generateUniqueId(),
      type: "bot",
      content: "Hi! 👋 I'm excited to help you explore career opportunities at Zinovaa. First, could you share your name?",
    },
  ]);
  const [profile, setProfile] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    avatar?: string;
  }>({});
  const [selectedJob, setSelectedJob] = useState<Job>();

  const addMessage = useCallback((content: string, type: "bot" | "user", avatar?: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: generateUniqueId(),
        type,
        content,
        avatar,
      },
    ]);
  }, []);

  const handleUserResponse = useCallback((message: string) => {
    addMessage(message, "user", profile.avatar);

    switch (step) {
      case "welcome":
        setProfile((prev) => ({ ...prev, name: message }));
        setTimeout(() => {
          addMessage("Nice to meet you, " + message + "! Could you share your email address?", "bot");
          setStep("email");
        }, 500);
        break;

      case "email":
        if (message.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          setProfile((prev) => ({ ...prev, email: message }));
          setTimeout(() => {
            addMessage("Great! And your phone number?", "bot");
            setStep("phone");
          }, 500);
        } else {
          setTimeout(() => {
            addMessage("That doesn't look like a valid email address. Could you please try again?", "bot");
          }, 500);
        }
        break;

      case "phone":
        setProfile((prev) => ({ ...prev, phone: message }));
        setTimeout(() => {
          addMessage("Perfect! Now, let's add a profile picture to personalize your application.", "bot");
          setStep("profile");
        }, 500);
        break;

      case "questions":
        // Handle job-specific questions here
        break;
    }
  }, [step, profile.avatar, addMessage]);

  const handleProfileUpload = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile((prev) => ({ ...prev, avatar: reader.result as string }));
      setTimeout(() => {
        addMessage("Great profile picture! Now, let's look at our current openings.", "bot");
        setStep("jobs");
      }, 500);
    };
    reader.readAsDataURL(file);
  }, [addMessage]);

  const handleJobSelect = useCallback((job: Job) => {
    setSelectedJob(job);
    setTimeout(() => {
      addMessage(`Excellent choice! The ${job.title} position is a key role at Zinovaa. Let me ask you a few specific questions about your experience.`, "bot");
      setStep("questions");
    }, 500);
  }, [addMessage]);

  const progress = (() => {
    switch (step) {
      case "welcome":
        return 0;
      case "email":
        return 20;
      case "phone":
        return 40;
      case "profile":
        return 60;
      case "jobs":
        return 80;
      case "questions":
        return 90;
      default:
        return 100;
    }
  })();

  return {
    step,
    progress,
    messages,
    profile,
    selectedJob,
    handleUserResponse,
    handleProfileUpload,
    handleJobSelect,
  };
}