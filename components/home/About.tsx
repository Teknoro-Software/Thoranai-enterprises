"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="relative px-6 md:px-10 py-20 overflow-hidden">

            {/* 🌈 BACKGROUND GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E1A49A]/20 via-transparent to-[#92333C]/10 -z-10"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* 🖼 IMAGE SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* IMAGE */}
                    <motion.img
                        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
                        className="rounded-2xl shadow-2xl"
                        whileHover={{ scale: 1.03 }}
                    />

                    {/* GLOW */}
                    <div className="absolute -z-10 top-5 left-5 w-full h-full bg-[#E1A49A]/30 rounded-2xl blur-3xl"></div>

                    {/* FLOATING CARD */}
                    <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="absolute bottom-6 left-6 bg-white/70 backdrop-blur-lg px-4 py-3 rounded-xl shadow-md text-sm"
                    >
                        ⭐ Trusted by 500+ Clients
                    </motion.div>
                </motion.div>

                {/* 📄 CONTENT SIDE */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* BADGE */}
                    <div className="inline-block px-4 py-2 mb-4 rounded-full bg-white/60 backdrop-blur-md text-sm">
                        About Us
                    </div>

                    {/* TITLE */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#372937] leading-snug">
                        Crafting Premium Textile <br />
                        Experiences
                    </h2>

                    {/* TEXT */}
                    <p className="mt-4 text-gray-600 max-w-md">
                        Thoranai Enterprises is a trusted name in textile wholesale
                        and retail, delivering premium quality fabrics with a focus
                        on modern fashion and reliability.
                    </p>

                    {/* FEATURES */}
                    <div className="mt-6 space-y-3">
                        {[
                            "High-quality fabrics",
                            "Affordable wholesale pricing",
                            "Fast & secure delivery",
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-2 text-[#372937]"
                            >
                                ✔ {item}
                            </motion.div>
                        ))}
                    </div>

                    {/* 📊 STATS */}
                    <div className="grid grid-cols-3 gap-6 mt-10">
                        {[
                            { value: "500+", label: "Clients" },
                            { value: "10+", label: "Years" },
                            { value: "1000+", label: "Products" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/70 backdrop-blur-md p-4 rounded-xl text-center shadow"
                            >
                                <h3 className="text-xl font-semibold text-[#92333C]">
                                    {stat.value}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 bg-[#92333C] text-white px-6 py-3 rounded-full"
                    >
                        Learn More
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}