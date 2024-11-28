

"use client";

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { playfair } from "../app/fonts";



export default function Header() {

    const [showBanner, setShowBanner] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        setShowBanner(scrollY < 100);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return(

        <>
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md pt-4">
        <div className="container mx-auto px-8 pb-3 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`${playfair.className} text-4xl font-bold text-gradient`}
          >
            Zinovaa
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: showBanner ? 1 : 0, y: showBanner ? 0 : -20 }}
          transition={{ duration: 0.3 }}
          className="bg-yellow-400 py-3 text-center text-gray-800 font-medium"
        >
          We&apos;re putting the style in &apos;under construction.&apos; ⏳ Zinovaa drops soon—don&apos;t miss the hype! 🔥
        </motion.div>
      </header>   
        </>
    );
}

