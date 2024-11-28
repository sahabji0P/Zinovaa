"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ChatOptionsProps {
  options: string[];
  onSelect: (option: string) => void;
}

export function ChatOptions({ options, onSelect }: ChatOptionsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option, index) => (
        <motion.div
          key={option}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Button
            variant="outline"
            onClick={() => onSelect(option)}
            className="whitespace-nowrap"
          >
            {option}
          </Button>
        </motion.div>
      ))}
    </div>
  );
}