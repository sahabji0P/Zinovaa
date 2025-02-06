"use client";

import { playfair } from "@/components/layout/fonts";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Banner } from './Banner';

export default function Header() {
  const [showBanner, setShowBanner] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      setShowBanner(scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
        <Banner showBanner={showBanner} isMobile={isMobile} />

        <Link className='cursor-' href="/">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center cursor-wait">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`${playfair.className} text-2xl sm:text-3xl md:text-4xl font-bold cursor-wait`}
            >
              {/* <span className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent">
                Zinovaa
              </span> */}
              <Image src='/z.png' alt="Zinovaa" width={200} height={100} />
            </motion.h1>
          </div>
        </Link>
      </header>
      <div className="h-[120px] md:h-[100px]" />
    </>
  );
}