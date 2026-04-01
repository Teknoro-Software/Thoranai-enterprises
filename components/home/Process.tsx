"use client";

import { motion } from "framer-motion";

const steps = [
    {
        title: "Browse Collection",
        desc: "Explore our wide range of premium textile products.",
    },
    {
        title: "Place Order",
        desc: "Add products to cart and complete secure checkout.",
    },
    {
        title: "Fast Delivery",
        desc: "Get your fabrics delivered quickly and safely.",
    },
];

export default function Process() {
    return (
        <section className="relative px-6 md:px-10 py-20 overflow-hidden">

            {/* 🌈 BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E1A49A]/40 via-transparent to-[#92333C]/40 -z-10"></div>

            {/* TITLE */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#372937]">
                    How It Works
                </h2>
                <p className="text-gray-600 mt-2">
                    Simple process to get premium textiles
                </p>
            </div>

            {/* TIMELINE */}
            <div className="relative">

                {/* LINE (desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-[#92333C]/20"></div>

                {/* STEPS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            {/* STEP NUMBER */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#92333C] text-white font-semibold mb-6 shadow-lg">
                                {i + 1}
                            </div>

                            {/* 🧊 CARD */}
                            <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-lg">
                                <h3 className="text-lg font-semibold text-[#372937]">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm mt-2">
                                    {step.desc}
                                </p>
                            </div>

                            {/* ✨ HOVER GLOW */}
                            <div className="absolute inset-0 bg-[#92333C]/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl blur-xl"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}