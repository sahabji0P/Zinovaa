"use client";

import { motion } from "framer-motion";
import { playfair } from "@/app/fonts";
import { Heart, Users, Zap, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment with talented professionals"
    },
    {
      icon: Zap,
      title: "Growth",
      description: "Professional development and learning opportunities"
    },
    {
      icon: Trophy,
      title: "Recognition",
      description: "Performance-based rewards and recognition"
    }
  ];

  const openings = [
    {
      title: "Senior Fashion Buyer",
      department: "Merchandising",
      location: "Style City, ST",
      type: "Full-time"
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Delivery Operations Manager",
      department: "Operations",
      location: "Style City, ST",
      type: "Full-time"
    }
  ];

  return (
    <main className="min-h-screen py-52">
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
            Be part of a dynamic team that&apos;s revolutionizing the fashion industry
            with technology and innovation.
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
                  <Button className="bg-red-600 hover:bg-red-700">
                    Apply Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}