"use client";

import { quickLinks } from "@/lib/chat-data";
import { motion, useInView } from "framer-motion";
import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/zinovaa.official" },
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" }
  ];

  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px 0px 0px 0px" });

  return (
    <footer
      ref={footerRef}
      className="bg-gray-900 text-white pb-8 pt-20"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: "spring", bounce: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 place-items-center"
        >
          {/* Social Section */}
          <motion.div
            className="space-y-6 text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-xl font-semibold">Follow the Drip 👑</h4>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="social-icon hover:text-gray-300"
                  whileHover={{
                    scale: 1.3,
                    rotate: 360,
                    transition: { duration: 0.4 }
                  }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="text-center"
            initial={{ x: -50 }}
            animate={isInView ? { x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-6">Quick Links 🚨</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.title}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                    target="_blank"
                  >
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="text-center"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", bounce: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold mb-6">Contact Us 💌</h4>
            <div className="space-y-4 text-gray-300">
              <motion.div
                className="flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <p>zinovaa.in@gmail.com</p>
              </motion.div>
              <motion.div
                className="flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <p>+91-6306010045</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p>
            © {new Date().getFullYear()}{" "}
            <motion.span
              className="font-semibold hover:text-white transition-colors"
              whileHover={{
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.5 }
              }}
            >
              Zinovaa
            </motion.span>{" "}
            All rights reserved | Powered by{" "}
            <Link
              href="https://www.instagram.com/web.landers"
              target="_blank"
              className="font-semibold hover:text-white transition-colors"
            >
              <motion.span
                whileHover={{
                  scale: 1.2,
                  textShadow: "0 0 10px rgba(255,255,255,0.5)"
                }}
              >
                Web Landers
              </motion.span>
            </Link>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}