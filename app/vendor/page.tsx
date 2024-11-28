"use client";

import { motion } from "framer-motion";
import { VendorForm } from "@/components/chat/forms/VendorForm";
import { playfair } from "@/app/fonts";
import { Shield, Award, Clock } from "lucide-react";

export default function VendorPage() {
  const requirements = [
    {
      icon: Shield,
      title: "Business Registration",
      description: "Valid business registration and tax documents"
    },
    {
      icon: Award,
      title: "Quality Standards",
      description: "Meet our product quality and authenticity standards"
    },
    {
      icon: Clock,
      title: "Delivery Commitment",
      description: "Ability to fulfill orders within our delivery timeframe"
    }
  ];

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className={`${playfair.className} text-4xl font-bold mb-4`}>
              Become a Zinovaa Vendor
            </h1>
            <p className="text-xl text-gray-600">
              Join our marketplace and reach thousands of fashion-conscious customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <req.icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{req.title}</h3>
                <p className="text-gray-600">{req.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className={`${playfair.className} text-2xl font-bold mb-6`}>
              Vendor Registration Form
            </h2>
            <VendorForm 
              onSubmit={(data) => {
                console.log('Form submitted:', data);
                // Handle form submission
              }}
              onCancel={() => {
                // Handle cancellation
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}