"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SuccessPage() {
    const router = useRouter();

    const [orderId] = useState(() =>
        Math.floor(100000 + Math.random() * 900000)
    );

    return (
        <div className="bg-white min-h-screen flex items-center justify-center px-6">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-md w-full"
            >

                {/* ✔ ICON */}
                <div className="w-16 h-16 mx-auto mb-8 border border-black flex items-center justify-center text-xl">
                    ✓
                </div>

                {/* TITLE */}
                <h1 className="text-[20px] tracking-wide text-black">
                    ORDER CONFIRMED
                </h1>

                {/* SUBTEXT */}
                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                    Thank you for your purchase.
                    Your order has been successfully placed.
                </p>

                {/* ORDER INFO */}
                <div className="mt-8 text-sm text-gray-600">
                    Order ID:{" "}
                    <span className="text-black font-medium">
                        #{orderId}
                    </span>
                </div>

                {/* DIVIDER */}
                <div className="border-t my-10"></div>

                {/* ACTIONS */}
                <div className="space-y-4">

                    <button
                        onClick={() => router.push("/shop")}
                        className="w-full border border-black py-3 text-sm tracking-wide hover:bg-black hover:text-white transition"
                    >
                        CONTINUE SHOPPING
                    </button>

                    <button
                        onClick={() => router.push("/")}
                        className="w-full text-sm text-gray-500 hover:text-black transition"
                    >
                        BACK TO HOME
                    </button>

                </div>

            </motion.div>
        </div>
    );
}