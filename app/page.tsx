"use client";

import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/ui/motion-section";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Heart, HeartHandshake, MessageSquare, Shield, ShoppingBag, Sparkles, Truck, Zap } from "lucide-react";
import Link from "next/link";
import { playfair, poppins } from "../components/layout/fonts";


// Fun but professional color scheme
const PRIMARY_COLOR = "rgb(147 51 234)" // Electric purple
const ACCENT_COLOR = "rgb(255 214 0)" // Sunny yellow

export default function Home() {

  return (
    <main className={`min-h-screen bg-gradient-to-b from-purple-50 to-white ${poppins.className}`}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[url('/sparkles.svg')] bg-contain">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className={`${playfair.className} text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-black bg-clip-text text-transparent pb-2`}>
              Slay All Day 🕺<br />
              <span className="text-4xl md:text-5xl">With Zinovaa!</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              Fashion That Makes You Go "YAAAS!" 👑
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </p>
            <p className="text-lg text-gray-600 mb-10 bg-white p-6 rounded-xl shadow-lg border-2 border-purple-100">
              We're not just clothes - we're <span className="text-purple-600 font-bold">vibe curators</span>! Get
              Instagram-ready fits faster than you can say "OOTD" 📸.
              Your wardrobe glow-up starts now!
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
              <Link href="/shop-now">
                <Button size="lg" className={`bg-purple-600 hover:bg-purple-700 transform hover:scale-105 
            transition-all duration-300 text-white shadow-xl hover:shadow-purple-400/40
            flex gap-2 items-center text-lg w-full md:w-auto`}>
                  <Zap className="w-5 h-5 animate-pulse" />
                  Shop Fierce Looks Now
                </Button>
              </Link>

              <Link href="/learn-more">
                <Button
                  size="lg"
                  variant="outline"
                  className={`border-2 border-purple-600 text-purple-600 hover:bg-purple-50 
              transform hover:scale-105 transition-all duration-300 hover:border-purple-700
              shadow-md hover:shadow-purple-200/40 flex gap-2 items-center text-lg w-full md:w-auto`}>
                  <Sparkles className="w-5 h-5" />
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shopping Experience */}
      <MotionSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className={`${playfair.className} text-4xl font-bold text-center mb-16 
            bg-gradient-to-r from-purple-600 to-black bg-clip-text text-transparent`}>
            How We Slay 💅
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShoppingBag,
                title: "Browse & Drool 🤤",
                desc: "500+ jaw-dropping styles waiting for your 👉👈"
              },
              {
                icon: Clock,
                title: "1-Click Wonder ✨",
                desc: "Add to cart faster than your crush replies 💘"
              },
              {
                icon: Truck,
                title: "Zoom Delivery 🚀",
                desc: "Get your drip in 30 mins - fresher than morning coffee ☕"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  rotate: i % 2 === 0 ? 2 : -2,
                }}
                className="bg-white p-8 rounded-2xl text-center border-2 border-purple-100 
                  shadow-lg hover:shadow-purple-200/40 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 
                  rounded-bl-full transform rotate-45 translate-x-12 -translate-y-8" />
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="mb-6 inline-block"
                >
                  <item.icon className="w-14 h-14 mx-auto p-3 rounded-full 
                    bg-purple-100 text-purple-600" />
                </motion.div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Unique Selling Points */}
      <MotionSection className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h3 className={`${playfair.className} text-4xl font-bold text-center mb-16 
            bg-gradient-to-r from-purple-600 to-black bg-clip-text text-transparent`}>
            Why We're BAE 💖
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "TikTok-Worthy Threads 📱",
                desc: "Styles so fire, your FYP will be jealous 🔥"
              },
              {
                icon: CheckCircle2,
                title: "No Basic Vibes 🚫",
                desc: "We filter out basic so you don't have to 🙅♂️"
              },
              {
                icon: Shield,
                title: "Built to Flex 💪",
                desc: "Quality that survives even the wildest nights 🌃"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl border-2 border-purple-100 
                  shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 flex items-center gap-3">
                  <item.icon className="w-10 h-10 text-purple-600" />
                  <h4 className="text-xl font-bold text-gray-800">{item.title}</h4>
                </div>
                <p className="text-gray-600 pl-2 border-l-4 border-purple-200">
                  {item.desc}
                </p>
              </motion.div>
            ))}

            {/* Highlight Cards */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="lg:col-span-2 bg-purple-600 p-8 rounded-xl text-white 
                shadow-xl relative overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-purple-400/20 rounded-full" />
              <div className="flex items-center gap-4 mb-4">
                <Zap className="w-12 h-12 text-yellow-300 animate-bounce" />
                <h4 className="text-2xl font-bold">Flash Delivery ⚡</h4>
              </div>
              <p className="text-lg text-purple-100 pl-2">
                Your order's FOMO ends in 30 mins! We zoom faster than
                gossip spreads in group chats 💨
              </p>
              <div className="absolute bottom-0 right-0 text-8xl opacity-10">
                🚚
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-yellow-400 p-8 rounded-xl text-gray-900 
                shadow-xl relative overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-yellow-300/20 rounded-full" />
              <div className="flex items-center gap-4 mb-4">
                <Heart className="w-12 h-12 text-red-500" />
                <h4 className="text-2xl font-bold">Squad Love 💞</h4>
              </div>
              <p className="text-lg pl-2">
                24/7 stylists who vibe with your aesthetic harder
                than your BFF 👯
              </p>
              <div className="absolute bottom-0 right-0 text-8xl opacity-10">
                💌
              </div>
            </motion.div>
          </div>
        </div>
      </MotionSection>

      {/* Trust Badges */}
      <MotionSection className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className={`${playfair.className} text-4xl font-bold text-center mb-16 
            bg-gradient-to-r from-purple-600 to-black bg-clip-text text-transparent`}>
            Pinky Promises 🤙
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: Shield, text: "Zero Fake Stuff" },
              { icon: HeartHandshake, text: "Easy Returns" },
              { icon: "💳", text: "Safe Payments" },
              { icon: Truck, text: "Zoom Delivery" },
              { icon: MessageSquare, text: "24/7 Vibe Check" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  rotate: i % 2 === 0 ? 3 : -3,
                }}
                className="bg-white p-6 rounded-xl text-center border-2 border-purple-100 
                  shadow-sm hover:shadow-md transition-shadow"
              >
                {typeof item.icon === 'string' ? (
                  <div className="text-4xl mb-4">{item.icon}</div>
                ) : (
                  <item.icon className="w-10 h-10 mx-auto mb-4 text-purple-600" />
                )}
                <p className="font-semibold text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </MotionSection>
    </main>
  );
}