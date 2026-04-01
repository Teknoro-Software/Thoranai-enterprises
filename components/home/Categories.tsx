/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
    {
        name: "Cotton",
        image:
            "https://images.unsplash.com/photo-1603252109303-2751441dd157",
    },
    {
        name: "Silk",
        image:
            "https://images.unsplash.com/photo-1593032465175-481ac7f401a0",
    },
    {
        name: "Denim",
        image:
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    },
    {
        name: "Casual Wear",
        image:
            "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    },
];

export default function Categories() {
    return (
        <section className="px-6 md:px-10 py-16 md:py-20">

            {/* TITLE */}
            <h2 className="text-2xl md:text-3xl font-semibold text-[#372937] mb-12 text-center">
                Explore Categories
            </h2>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {categories.map((cat, i) => (
                    <TiltCard key={i} cat={cat} index={i} />
                ))}
            </div>
        </section>
    );
}

function TiltCard({ cat, index }: any) {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMove = (e: any) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const midX = rect.width / 2;
        const midY = rect.height / 2;

        const rotateX = ((y - midY) / midY) * 8;
        const rotateY = ((x - midX) / midX) * -8;

        setRotate({ x: rotateX, y: rotateY });
    };

    const reset = () => setRotate({ x: 0, y: 0 });

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            style={{
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            }}
            className="relative group h-64 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300"
        >
            {/* IMAGE */}
            <img
                src={cat.image}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* DARK GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

            {/* 🧊 GLASS OVERLAY */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <div className="backdrop-blur-md bg-white/20 border border-white/30 px-6 py-3 rounded-full text-white text-sm">
                    View Collection
                </div>
            </div>

            {/* TEXT */}
            <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-lg font-semibold">
                    {cat.name}
                </h3>
            </div>

            {/* GLOW */}
            <div className="absolute inset-0 bg-[#92333C]/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
        </motion.div>
    );
}