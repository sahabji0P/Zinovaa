"use client";

import { playfair } from "@/components/layout/fonts";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center p-4">
            <div className="container max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-8"
                >
                    {/* 404 Text */}
                    <motion.h1
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className={`${playfair.className} text-8xl md:text-9xl font-bold text-red-600`}
                    >
                        404
                    </motion.h1>

                    {/* Main Heading */}
                    <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-gray-800`}>
                        Oops! Page Not Found
                    </h2>

                    {/* Subheading with fashion-related message */}
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Looks like this page took a fashion detour! Don&apos;t worry, our trendsetting collection is just a click away.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/">
                            <Button
                                variant="outline"
                                className="group flex items-center gap-2 text-lg px-6 py-6 border-2"
                            >
                                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                Go Back Home
                            </Button>
                        </Link>
                        <Link href="/products">
                            <Button
                                className="bg-red-600 hover:bg-red-700 text-lg px-6 py-6 flex items-center gap-2"
                            >
                                Continue Shopping
                                <ShoppingBag className="w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}