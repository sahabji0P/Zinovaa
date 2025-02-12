// app/layout.tsx
"use client";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { MapPin, Search, ShoppingCart, User } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from 'react';
import "../globals.css";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [cartTotal, setCartTotal] = useState(0);
    const [cartItems, setCartItems] = useState(0);

    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} bg-purple-50`}>
                {/* Animated Navbar */}
                <motion.nav
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    className="bg-white shadow-lg sticky top-0 z-50"
                >
                    <div className="container mx-auto px-4 py-3 flex items-center gap-6">
                        {/* Logo */}
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <Link href="/">
                                <img
                                    src="/z.png"
                                    alt="Zinovaa"
                                    className="h-12 w-auto"
                                />
                            </Link>
                        </motion.div>

                        {/* Location */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="hidden md:flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full"
                        >
                            <MapPin className="w-5 h-5 text-purple-600" />
                            <span className="text-sm">Delivering to: Party Central 🎉</span>
                        </motion.div>

                        {/* Search */}
                        <motion.div
                            className="flex-1 max-w-2xl mx-4"
                            whileFocus={{ scale: 1.02 }}
                        >
                            <div className="relative">
                                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search for drip... 🔍"
                                    className="w-full pl-10 pr-4 py-2 rounded-full border border-purple-200 focus:outline-purple-500"
                                />
                            </div>
                        </motion.div>

                        {/* Account Dropdown */}
                        <AccountDropdown />

                        {/* Cart */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="relative p-2 text-purple-600 flex items-center gap-1"
                        >
                            <ShoppingCart className="w-6 h-6" />
                            <span className="text-sm font-medium">
                                ₹{cartTotal.toLocaleString('en-IN')}
                            </span>
                            <span className="absolute -top-1 -right-1 bg-purple-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                                {cartItems}
                            </span>
                        </motion.button>
                    </div>
                </motion.nav>

                {/* Main Content */}
                <main className="container mx-auto px-4 py-8">
                    {/* Sidebar and Content */}
                    <div className="flex gap-8">
                        <Sidebar />
                        {children}
                    </div>
                </main>
                <Footer />
            </body>
        </html>
    )
}

function AccountDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 p-2 text-purple-600"
            >
                <User className="w-6 h-6" />
                <span className="hidden md:inline">Account</span>
            </button>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-purple-100"
                >
                    {/* Dropdown items */}

                    {[
                        { icon: '📦', text: 'Orders' },
                        { icon: '🏠', text: 'Addresses' },
                        { icon: '🎁', text: 'Gift Cards' },
                        { icon: '❓', text: 'FAQs' },
                        { icon: '🚪', text: 'Logout' },
                    ].map((item, i) => (
                        <motion.button
                            key={i}
                            whileHover={{ x: 5 }}
                            className="w-full px-4 py-2 text-left hover:bg-purple-50 flex items-center gap-2"
                        >
                            <span>{item.icon}</span>
                            {item.text}
                        </motion.button>
                    ))}
                </motion.div>
            )}
        </motion.div>
    )
}

// Sidebar.tsx
function Sidebar() {
    return (
        <motion.aside
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            className="w-64 hidden md:block sticky top-20 h-[calc(100vh-5rem)]"
        >
            <div className="bg-white p-4 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-4">Categories 🛍️</h3>
                {[
                    '👗 Daily Drip',
                    '👔 Office Swag',
                    '🕶️ Night Out',
                    '👟 Sneakerhead',
                    '💍 Bling Zone'
                ].map((category, i) => (
                    <motion.button
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="w-full text-left p-2 rounded-lg hover:bg-purple-50 mb-2"
                    >
                        {category}
                    </motion.button>
                ))}

                <h3 className="text-lg font-bold mt-6 mb-4">Filters 🔍</h3>
                {['Price 💰', 'Size 📏', 'Color 🎨', 'Rating ⭐'].map((filter, i) => (
                    <motion.button
                        key={i}
                        whileHover={{ x: 5 }}
                        className="w-full text-left p-2 rounded-lg hover:bg-purple-50"
                    >
                        {filter}
                    </motion.button>
                ))}
            </div>
        </motion.aside>
    )
}