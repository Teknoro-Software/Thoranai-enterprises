"use client";

import { motion } from "framer-motion";

const services = [
    {
        title: "Wholesale Supply",
        desc: "Bulk textile supply with competitive pricing for businesses.",
        icon: "📦",
    },
    {
        title: "Retail Store",
        desc: "Premium fabrics available for direct customer purchase.",
        icon: "🛍️",
    },
    {
        title: "Custom Orders",
        desc: "Tailored textile solutions based on your requirements.",
        icon: "✂️",
    },
];

export default function Services() {
    return (
        <section className="relative px-6 md:px-10 py-20 overflow-hidden">

            {/* 🌈 BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E1A49A]/40 via-transparent to-[#92333C]/40 -z-10"></div>

            {/* TITLE */}
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#372937]">
                    Our Services
                </h2>
                <p className="text-gray-600 mt-2">
                    Premium textile solutions tailored for your needs
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="relative group"
                    >
                        {/* 🧊 GLASS CARD */}
                        <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-lg">

                            {/* ICON */}
                            <div className="text-3xl mb-4">
                                {service.icon}
                            </div>

                            {/* TITLE */}
                            <h3 className="text-lg font-semibold text-[#372937]">
                                {service.title}
                            </h3>

                            {/* DESC */}
                            <p className="text-gray-600 text-sm mt-2">
                                {service.desc}
                            </p>

                            {/* CTA */}
                            <button className="mt-4 text-[#92333C] text-sm font-medium">
                                Learn More →
                            </button>
                        </div>

                        {/* ✨ HOVER GLOW */}
                        <div className="absolute inset-0 bg-[#92333C]/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl blur-xl"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}