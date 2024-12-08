"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Message } from "@/types/careers";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={cn(
        "flex items-start gap-3",
        message.type === "bot" ? "justify-start" : "justify-end"
      )}
    >
      {message.type === "bot" && (
        <Avatar>
          <AvatarImage src="/zinovaa-bot.png" alt="Zinovaa Bot" />
          <AvatarFallback>ZB</AvatarFallback>
        </Avatar>
      )}

      <div
        className={cn(
          "rounded-lg p-4 max-w-[80%]",
          message.type === "bot"
            ? "bg-gray-100 text-gray-800"
            : "bg-red-600 text-white"
        )}
      >
        {message.content}
      </div>

      {message.type === "user" && message.avatar && (
        <Avatar>
          <AvatarImage src={message.avatar} alt="User" />
          <AvatarFallback>ME</AvatarFallback>
        </Avatar>
      )}
    </motion.div>
  );
}