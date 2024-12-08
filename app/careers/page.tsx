"use client";

import { motion } from "framer-motion";
import { playfair } from "@/components/layout/fonts";
import { Heart, Users, Zap, Trophy, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import {openings} from './openingsData'

export default function CareersPage() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Pay That Matches Your Hustle",
      description: "Get rewarded with a competitive salary and benefits that support your well-being."
    },
    {
      icon: Users,
      title: "Vibe With the Best",
      description: "Work in a creative, collaborative space alongside passionate, like-minded people."
    },
    {
      icon: Zap,
      title: "Level Up Your Skills",
      description: "Access growth opportunities, mentorship, and resources to keep improving."
    },
    {
      icon: Trophy,
      title: "Your Wins, Celebrated",
      description: "We see your grind. Earn recognition and rewards for your performance."
    }
  ];
  


  return (   
    <main className="min-h-screen py-20">
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
          Join a squad that&apos;s shaking up the game—fusing fashion, tech, and innovation to redefine how style meets speed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <benefit.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className={`${playfair.className} text-3xl font-bold mb-8 text-center`}>
            Current Openings
          </h2>
          
          <div className="space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <p className="text-gray-600">{job.department}</p>
                    <p className="text-gray-500 text-sm">
                      {job.location} • {job.type}
                    </p>
                  </div>
                  <Button className="bg-red-600 text-white hover:bg-red-700">
                    Apply Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* <div className="">
                    <h3 className="text-xl font-semibold mb-2">No Current Openings!</h3>
                  </div> */}


        </div>
      </div>
    </main>
  );
}