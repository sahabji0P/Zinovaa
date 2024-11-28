"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { quickLinks } from "@/lib/chat-data";
import Link from "next/link";

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 ml-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-6">Follow the Drip</h4>
            {/* <p className="text-gray-300">
              Express your authentic self with Zinovaa&apos;s curated fashion collections,
              delivered in 30-60 minutes.
            </p> */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="social-icon"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                    target="_blank"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <p>Email: weblanders.sd@gmail.com
              </p>
              <p>Phone: +91-6306010045</p>
              <p>Address: Bennett University,<br />Greater Noida, Uttar Pradesh, India</p>
            </div>
          </div>
          
          {/* NewsLetter */}
{/* 
          <div>
            <h4 className="text-xl font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to get updates on new collections and exclusive offers.
            </p>
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
          </div> */}


        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Zinovaa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}