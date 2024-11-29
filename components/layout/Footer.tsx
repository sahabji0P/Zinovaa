"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { quickLinks } from "@/lib/chat-data";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white pb-5 pt-20">
      <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-12 text-center">
  <div className="space-y-4">
    <h4 className="text-xl font-semibold mb-6">Follow the Drip</h4>
    <div className="flex justify-center gap-4">
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
    <ul className="space-y-3 inline-block text-left">
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

  <div className="justify-center items-center flex-row">
    <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
    <div className="space-y-3 text-gray-300 pl-10">
      <div className="flex gap-3">
      <Mail/>
      <p>zinovaa30@gmail.com</p>
      </div>

      <div className="flex gap-3">
      <Phone/>
      <p>+91-6306010045</p>
      </div>

    </div>
  </div>
</div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Zinovaa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}