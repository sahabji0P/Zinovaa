"use client";

import { motion } from "framer-motion";
import { playfair } from "../../components/layout/fonts";
import { learnMoreContent, learnMorePageContent } from "./data";
import { Shield, HeartHandshake, Truck, MessageSquare, CheckCircle2, Sparkles } from "lucide-react";
import React from "react";

export default function LearnMore() {
  const iconMap = {
    Shield: Shield,
    HeartHandshake: HeartHandshake,
    Truck: Truck,
    MessageSquare: MessageSquare,
    CheckCircle2: CheckCircle2,
    Sparkles: Sparkles
  };

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
              {learnMorePageContent.heroSection.title}
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              {learnMorePageContent.heroSection.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vendor Onboarding Section */}
      <section className="py-20 section-pattern">
        <div className="container mx-auto px-4">
          <h3 className={`${playfair.className} text-4xl font-bold text-center mb-16 `}>
            {learnMorePageContent.sections[0].title}
            
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {learnMorePageContent.sections[0].description}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-xl"
            >
              <h4 className="text-2xl font-semibold mb-6 text-red-600">
                Vendor Requirements
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-bold mb-2">Required Fields</h5>
                  <ul className="list-disc list-inside text-gray-700">
                    {learnMoreContent.vendorOnboarding.requiredFields.map((field, index) => (
                      <li key={index}>{field}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold mb-2">Document Verification</h5>
                  <ul className="list-disc list-inside text-gray-700">
                    {learnMoreContent.vendorOnboarding.documentVerification.map((doc, index) => (
                      <li key={index}>{doc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-xl"
            >
              <h4 className="text-2xl font-semibold mb-6 text-red-600">
                Delivery Requirements
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-bold mb-2">Our Delivery Promise</h5>
                  <p className="text-gray-700">
                    {learnMoreContent.locationRequirements.deliverySpeedUSP}
                  </p>
                </div>
                <div>
                  <h5 className="font-bold mb-2">Location Coverage</h5>
                  <ul className="list-disc list-inside text-gray-700">
                    {learnMoreContent.locationRequirements.locationCoverage.map((location, index) => (
                      <li key={index}>{location}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold mb-2">Coverage Radius</h5>
                  <p className="text-gray-700">
                    {learnMoreContent.locationRequirements.minimumCoverageRadius} kilometers
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Return Policy Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h3 className={`${playfair.className} text-4xl font-bold text-center mb-16`}>
            {learnMorePageContent.sections[1].title}
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {learnMorePageContent.sections[1].description}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-xl"
            >
              <h4 className="text-2xl font-semibold mb-6 text-red-600">
                Non-Returnable Items
              </h4>
              <div>
                {/* <p className="mb-4">
                  Products priced under ₹{learnMoreContent.returnPolicy.nonReturnable.priceThreshold}
                </p> */}
                <ul className="list-disc list-inside text-gray-700">
                  {learnMoreContent.returnPolicy.nonReturnable.conditions.map((condition, index) => (
                    <li key={index}>{condition}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-xl"
            >
              <h4 className="text-2xl font-semibold mb-6 text-red-600">
                Returnable Items Policy
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-bold mb-2">Return Window</h5>
                  <p className="text-gray-700">
                    {learnMoreContent.returnPolicy.returnable.timeframe} day from delivery (Due to instant delivery)
                  </p>
                </div>
                <div>
                  <h5 className="font-bold mb-2">Return Conditions</h5>
                  <ul className="list-disc list-inside text-gray-700">
                    {learnMoreContent.returnPolicy.returnable.conditions.map((condition, index) => (
                      <li key={index}>{condition}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold mb-2">Refund Processing</h5>
                  <p className="text-gray-700">
                    Refund processed within <strong> {learnMoreContent.returnPolicy.refundPolicy.processingTime} </strong> working days
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          </div>
      </section>

      {/* Customer Service Section */}
      <section className="py-20 section-pattern">
        <div className="container mx-auto px-4">
          <h3 className={`${playfair.className} text-4xl font-bold text-center mb-16`}>
            {learnMorePageContent.sections[2].title}
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {learnMorePageContent.sections[2].description}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learnMoreContent.customerService.supportChannels.map((channel, index) => {
              const IconComponent = iconMap[Object.keys(iconMap)[index % Object.keys(iconMap).length] as keyof typeof iconMap];
              return (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                  }}
                  className="glass-card p-8 rounded-2xl text-center feature-card"
                >
                  {React.createElement(IconComponent, {
                    className: "w-12 h-12 mx-auto mb-6 text-red-600"
                  })}

                  <h4 className="text-xl font-semibold mb-4">{channel}</h4>
                  <p className="text-gray-600">
                    Always available, always ready to help!
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <h3 className={`${playfair.className} text-4xl font-bold mb-4`}>
              Our Support Promise
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              {learnMoreContent.customerService.responseTimeframe}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {learnMoreContent.customerService.assistanceTypes.map((type, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ 
                        scale: 1.05,
                        rotateY: 10,
                        }}
                        className="glass-card p-8 rounded-2xl text-center feature-card"
                    >
                        {React.createElement(iconMap[Object.keys(iconMap)[index % Object.keys(iconMap).length] as keyof typeof iconMap], {
                        className: "w-12 h-12 mx-auto mb-6 text-red-600"
                        })}
    
                        <h4 className="text-xl font-semibold mb-4">{type}</h4>
                        <p className="text-gray-600">
                        Our team is trained to handle any query, anytime!
                        </p>
                    </motion.div>
                    ))}
                </div>

          </div>
        </div>
      </section>
    </main>
  );
}