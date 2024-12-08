"use client";

import { motion } from "framer-motion";
import { playfair } from "@/components/layout/fonts";
import { CareerChat } from "@/components/careers/CareerChat";

export default function CareersPage() {
  return (
    <main className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className={`${playfair.className} text-4xl font-bold mb-4`}>
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let&apos;s have a conversation about your next career move.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <CareerChat />
        </div>
      </div>
    </main>
  );
}