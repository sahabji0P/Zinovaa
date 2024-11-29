"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Construction, X } from "lucide-react";
import { useState } from "react";

interface BannerProps {
  showBanner: boolean;
  isMobile: boolean;
}

export function Banner({ showBanner, isMobile }: BannerProps) {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 cursor-wait"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-2 sm:py-3">
              <div className="flex items-center space-x-2 flex-1 justify-center">
                <Construction className="w-4 h-4 animate-pulse hidden sm:block" />
                <p className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium text-gray-800 text-center px-2`}>
                  {isMobile ? (
                    "🚧 Zinovaa drops soon-don't miss the hype! 🔥"
                  ) : (
                    "We're putting the style in 'under construction.' ⏳ Zinovaa drops soon—don't miss the hype! 🔥"
                  )}
                </p>
              </div>
{/*               
              <button
                onClick={() => setIsDismissed(true)}
                className="text-gray-700 hover:text-gray-900 transition-colors flex-shrink-0"
                aria-label="Dismiss banner"
              >
                <X className="w-4 h-4" />
              </button> */}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}