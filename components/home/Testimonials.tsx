"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Rahul Menon",
        role: "Retail Buyer",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Exceptional fabric quality and reliable service. Truly a premium textile partner.",
    },
    {
        name: "Anjali Nair",
        role: "Boutique Owner",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "Affordable wholesale pricing with amazing quality. Highly recommended!",
    },
    {
        name: "Arjun Kumar",
        role: "Designer",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
        text: "Their collections are modern, stylish, and always on trend.",
    },
];

export default function Testimonials() {
    return (
        <section className="relative px-6 md:px-10 py-20 overflow-hidden">

            {/* 🌈 BACKGROUND GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E1A49A]/20 via-transparent to-[#92333C]/10 -z-10"></div>

            {/* TITLE */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#372937]">
                    What Our Clients Say
                </h2>
                <p className="text-gray-600 mt-2">
                    Trusted by hundreds of satisfied customers
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="relative group"
                    >
                        {/* 🧊 GLASS CARD */}
                        <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/40">

                            {/* ⭐ RATING */}
                            <div className="flex mb-3 text-[#92333C]">
                                ⭐⭐⭐⭐⭐
                            </div>

                            {/* TEXT */}
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {t.text}
                            </p>

                            {/* USER */}
                            <div className="flex items-center gap-3 mt-6">
                                <img
                                    src={t.image}
                                    className="w-10 h-10 rounded-full object-cover"
                                />

                                <div>
                                    <h4 className="text-[#372937] font-medium text-sm">
                                        {t.name}
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ✨ HOVER GLOW */}
                        <div className="absolute inset-0 bg-[#92333C]/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl blur-xl"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}