"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative mt-20 ">
            <div className="mx-6 md:mx-10 mb-10 rounded-2xl bg-[#92333C] text-white px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Stay Updated
                    </h2>
                    <p className="text-sm text-white/80 mt-1">
                        Get latest textile trends & offers
                    </p>
                </div>

                <div className="flex w-full md:w-auto gap-3">
                    <input
                        placeholder="Enter your email"
                        className="px-4 py-3 rounded-full text-black w-full md:w-64"
                    />
                    <button className="bg-white text-[#92333C] px-5 py-3 rounded-full font-medium">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* 🧊 MAIN FOOTER */}
            <div className="bg-[#92333C] text-white backdrop-blur-xl border-t border-white/40 px-6 md:px-10 py-12">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                    {/* BRAND */}
                    <div>
                        <h3 className="text-xl font-semibold text-[#fff]">
                            Thoranai enterprises
                        </h3>
                        <p className="text-white mt-3 text-sm">
                            Premium textile wholesale & retail business delivering
                            quality fabrics with trust and reliability.
                        </p>
                    </div>

                    {/* LINKS */}
                    <div>
                        <h4 className="font-medium text-[#E1A49A] mb-3">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-[#fff] text-sm">
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Cart</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* BUSINESS */}
                    <div>
                        <h4 className="font-medium text-[#E1A49A] mb-3">
                            Business
                        </h4>
                        <ul className="space-y-2 text-[#fff] text-sm">
                            <li>Wholesale</li>
                            <li>Retail</li>
                            <li>Kotak Mahindra Bank</li>
                            <li>Secure Payments</li>
                        </ul>
                    </div>

                    {/* SOCIAL */}
                    <div>
                        <h4 className="font-medium text-[#E1A49A] mb-3">
                            Follow Us
                        </h4>

                        <div className="flex gap-4 text-xl">
                            <motion.span whileHover={{ scale: 1.2 }}>🌐</motion.span>
                            <motion.span whileHover={{ scale: 1.2 }}>📘</motion.span>
                            <motion.span whileHover={{ scale: 1.2 }}>📸</motion.span>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="border-t border-gray-300 mt-10 pt-6 text-center text-sm text-[#E1A49A]">
                    © 2026 Thoranai Enterprises. All rights reserved.
                </div>
            </div>
        </footer>
    );
}