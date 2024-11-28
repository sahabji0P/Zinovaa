"use client";

import { motion } from "framer-motion";
import { ChatMessage as ChatMessageType } from "@/lib/chat-data";
import { cn } from "@/lib/utils";

export function ChatMessage({ message }: { message: ChatMessageType }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "max-w-[80%] rounded-lg p-4 mb-4",
        message.type === "bot" 
          ? "bg-white text-gray-800 ml-0" 
          : "bg-red-600 text-white ml-auto"
      )}
    >
      {message.content}
    </motion.div>
  );
}