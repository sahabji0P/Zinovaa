"use client";

import { motion } from "framer-motion";
import { playfair } from "./fonts";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/ui/motion-section";
import { ShoppingBag, Truck, Clock, Shield, HeartHandshake, MessageSquare, Sparkles, CheckCircle2, Zap, Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6 text-gradient pb-2`}>
              Style That Speaks Your Language
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Welcome to Zinovaa - Elevate Your Everyday
            </p>
            <p className="text-lg text-gray-500 mb-10">
              Fashion is personal, and at Zinovaa, we take it personally. 💅 We serve up styles that scream <strong>authentic you</strong> and get them to your door at lightning speed. ⚡ Because your vibe is too good to wait. Let&apos;s slay, stat.
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all duration-300 text-white cursor-wait">
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Shopping Experience */}
      <MotionSection className="py-20 section-pattern">
        <div className="container mx-auto px-4">
          <h3 className={`${playfair.className} text-4xl font-bold text-center mb-16 text-gradient`}>
            The Zinovaa&apos;s Shopping Experience
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
                }}
                className="glass-card p-8 rounded-2xl text-center feature-card"
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

      {/* What Makes Us Different */}
      <MotionSection className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h3 className={`${playfair.className} text-4xl font-bold text-center mb-16 text-gradient`}>
            What Makes Us Different
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Regular cards */}
            {[
              { 
                icon: Sparkles, 
                title: "Curated Excellence",
                desc: "We don't just sell clothes—we curate vibes. Every piece is handpicked to bring you that perfect mix of quality and style. 🔥"
              },
              {
                icon: CheckCircle2,
                title: "Trend-Forward Selection",
                desc: "Stay ahead, not behind. Our collections are constantly updated to keep your fits fresh and on point, blending today's trends with timeless staples. ✨"
              },
              {
                icon: Shield,
                title: "Quality You Can Trust",
                desc: "Our pieces don't just slay—they stay. Built to last, every item is checked to make sure it looks good and wears even better. 💪👗"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-xl feature-card"
              >
                <item.icon className="w-12 h-12 text-red-600 mb-4" />
                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}

            {/* Highlighted cards */}
            <motion.div
              whileHover={{ y: -10 }}
              className="highlight-card bg-red-600 p-8 rounded-xl text-white transform hover:scale-105 transition-all duration-300 lg:col-span-2"
            >
              <Zap className="w-12 h-12 text-white mb-4" />
              <h4 className="text-2xl font-semibold mb-3">Fast & Fierce Delivery</h4>
              <p className="text-white/90 text-lg">
                Why wait? Get your fashion fix in 30-60 minutes. Your next iconic look is just a tap away. ⏱️📦
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="highlight-card bg-red-600 p-8 rounded-xl text-white transform hover:scale-105 transition-all duration-300"
            >
              <Heart className="w-12 h-12 text-white mb-4" />
              <h4 className="text-2xl font-semibold mb-3">You First, Always</h4>
              <p className="text-white/90 text-lg">
                We&apos;ve got your back. From personalized styling tips to a seamless shopping experience, everything we do is designed to make you look and feel like your best self. 💌👛
              </p>
            </motion.div>
          </div>
        </div>
      </MotionSection>

      {/* Customer Promise */}
      <MotionSection className="py-20 section-pattern">
        <div className="container mx-auto px-4">
          <h3 className={`${playfair.className} text-4xl font-bold text-center mb-16 text-gradient`}>
            Zinnova&apos;s Promise
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
                className="glass-card p-6 rounded-xl text-center feature-card"
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
                  <item.icon className="w-10 h-10 text-red-600 mb-4 mx-auto" />
                </motion.div>
                <p className="font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </MotionSection>
    </main>
  );
}