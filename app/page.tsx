"use client";

import { motion } from "framer-motion";
import { playfair } from "./fonts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MotionSection } from "@/components/ui/motion-section";
import { Chatbot } from "@/components/chat/Chatbot";
import { ShoppingBag, Truck, Clock, Shield, HeartHandshake, MessageSquare, Instagram, Facebook, Twitter } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`${playfair.className} text-3xl font-bold text-gradient`}
          >
            Zinovaa
          </motion.h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6`}>
              Style That Speaks Your Language
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Welcome to Zinovaa - Elevate Your Everyday
            </p>
            <p className="text-lg text-gray-500 mb-10">
              At Zinovaa, we believe that style is more than just clothing – it&apos;s a statement of who you are. 
              Born from a passion for contemporary fashion and a vision for the future, we curate pieces that 
              empower you to express your authentic self.
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Shop Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Shopping Experience */}
      <MotionSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className={`${playfair.className} text-4xl font-bold text-center mb-16`}>
            How It Works
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShoppingBag, title: "Browse", desc: "Explore our carefully curated collections at your convenience." },
              { icon: Clock, title: "Select", desc: "Choose from a wide range of styles that speak to your personal aesthetic." },
              { icon: Truck, title: "Deliver", desc: "Get your fashion finds delivered right to your doorstep within 30–60 minutes." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
                className="card-hover bg-white p-8 rounded-2xl text-center transform-gpu"
                style={{
                  perspective: "1000px"
                }}
              >
                <motion.div
                  whileHover={{ rotateZ: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-12 h-12 mx-auto mb-6 text-red-600" />
                </motion.div>
                <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Customer Promise */}
      <MotionSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className={`${playfair.className} text-4xl font-bold text-center mb-16`}>
            Our Promise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: Shield, text: "Authentic Products" },
              { icon: HeartHandshake, text: "Easy Returns" },
              { icon: Shield, text: "Secure Payments" },
              { icon: Truck, text: "Express Delivery" },
              { icon: MessageSquare, text: "24/7 Support" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ 
                  scale: 1.1,
                  rotateZ: 5,
                }}
                className="flex flex-col items-center text-center transform-gpu"
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <item.icon className="w-10 h-10 text-red-600 mb-4" />
                </motion.div>
                <p className="font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className={`${playfair.className} text-2xl font-bold mb-6`}>
                Style That Speaks Your Language
              </h4>
              <div className="space-y-4">
                <p>Email: contact@zinovaa.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Fashion Street, Style City, ST 12345</p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Stay Connected</h4>
              <div className="flex gap-4 mb-8">
                <motion.a 
                  href="#" 
                  className="social-icon"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="social-icon"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="social-icon"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </div>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20"
                />
                <Button className="bg-red-600 hover:bg-red-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer> */}

      <Chatbot />
    </main>
  );
}