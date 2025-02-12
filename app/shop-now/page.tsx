// app/page.tsx
"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import Image from "next/image";
import { useState } from 'react';

interface Product {
    id: number;
    name: string;
    originalPrice: number;
    discountedPrice: number;
    discountPercentage: number;
    rating: number;
    reviews: number;
    isBestSeller: boolean;
}

function ProductCard({ product }: { product: Product }) {
    const [showAddToCart, setShowAddToCart] = useState(false);

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-4 rounded-xl shadow-lg relative group"
            onHoverStart={() => setShowAddToCart(true)}
            onHoverEnd={() => setShowAddToCart(false)}
        >
            {product.isBestSeller && (
                <div className="absolute top-2 left-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                    BEST SELLER 🔥
                </div>
            )}

            <div className="aspect-square bg-transparent rounded-xl mb-4 relative overflow-hidden">
                <Image src="/z.png" alt="Product Image" width={200} height={50} />
                {showAddToCart && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute bottom-2 right-2 bg-purple-600 text-white p-2 rounded-lg shadow-md text-sm"
                    >
                        Add to Cart 🛒
                    </motion.button>
                )}
            </div>

            <h3 className="font-bold mb-2 text-gray-800">{product.name}</h3>
            <div className="flex items-center gap-2">
                <span className="text-purple-600 font-bold">
                    ₹{product.discountedPrice.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                )}
                {product.discountPercentage && (
                    <span className="text-green-600 text-sm font-medium">
                        ({product.discountPercentage}% off)
                    </span>
                )}
            </div>
            <div className="flex items-center gap-1 mt-2">
                ⭐ {product.rating} <span className="text-gray-500 text-sm">({product.reviews})</span>
            </div>
        </motion.div>
    )
}

export default function Home() {

    const products = [
        // Sample product data
        {
            id: 1,
            name: "Designer Kurti 👗",
            originalPrice: 2999,
            discountedPrice: 1999,
            discountPercentage: 33,
            rating: 4.8,
            reviews: 1245,
            isBestSeller: false
        },
        // ... more products
    ];
    return (
        <div className="flex-1">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-purple-600 text-white rounded-xl p-8 mb-8 relative overflow-hidden"
            >
                <div className="relative z-10 max-w-2xl">
                    <h1 className="text-4xl font-bold mb-4">
                        New Collection Alert! 🚨<br />
                        Slay for Less 💸
                    </h1>
                    <p className="text-lg mb-6">
                        Fresh fits that'll make your ex go "Wait, what?!" 😱<br />
                        50% off for first 100 orders! ⏳
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold flex items-center gap-2"
                    >
                        👗 Shop Now <Zap className="w-4 h-4 animate-bounce" />
                    </motion.button>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-purple-700" />
            </motion.section>

            {/* Products Grid */}
            <div className="flex-1">
                {/* Product Categories */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Trending Now 🔥</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {products.slice(0, 5).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Best Sellers 🏆</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {products.filter(p => p.isBestSeller).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

