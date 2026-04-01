"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const yImage = useTransform(scrollYProgress, [0, 1], [0, -60]);

    return (
        <section
            ref={ref}
            className="relative grid grid-cols-1 md:grid-cols-2 items-center 
      px-6 md:px-10 py-16 md:py-39 gap-10 overflow-hidden"
        >
            
            <div className="absolute inset-0 bg-gradient-to-br from-[#F1E4DB] via-[#E1A49A]/20 to-transparent -z-10" />

            {/* ✨ PARTICLES (hidden on small screens for performance) */}
            <div className="hidden md:block absolute inset-0 -z-10 opacity-30">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                        }}
                        className="absolute w-2 h-2 bg-[#92333C] rounded-full blur-sm"
                        style={{
                            top: `${20 + i * 10}%`,
                            left: `${10 + i * 15}%`,
                        }}
                    />
                ))}
            </div>

            {/* LEFT CONTENT */}
            <motion.div
                style={{ y: yText }}
                className="text-center md:text-left"
            >
                {/* BADGE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block px-4 py-2 mb-4 rounded-full 
          bg-white/60 backdrop-blur-md border border-white/40 text-xs md:text-sm"
                >
                    ✨ Premium Textile Brand
                </motion.div>

                {/* TITLE */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
          font-semibold text-[#372937] leading-tight"
                >
                    Elevate Your <br />
                    Style With Luxury
                </motion.h1>

                {/* TEXT */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0 text-sm md:text-base"
                >
                    Discover premium fabrics and clothing collections from
                    Thoranai Enterprises — crafted for modern fashion.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-8 justify-center md:justify-start"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#92333C] text-white px-6 py-3 rounded-full w-full sm:w-auto"
                    >
                        Shop Collection
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-6 py-3 rounded-full border border-[#92333C] text-[#92333C] w-full sm:w-auto"
                    >
                        Explore
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
                style={{ y: yImage }}
                className="relative flex justify-center"
            >
                <motion.img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
                    className="rounded-2xl shadow-xl w-full max-w-md md:max-w-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.03 }}
                />

                {/* GLOW */}
                <div className="absolute -z-10 w-[80%] h-[80%] bg-[#E1A49A]/30 rounded-full blur-3xl"></div>
            </motion.div>
        </section>
    );
}