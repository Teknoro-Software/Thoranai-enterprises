"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";


const links = [
    { name: "Home", href: "/" },
    { name: "Our Services", href: "/services" },
    { name: "Shop", href: "/shop" },
];

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const { cart } = useCart();

    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`fixed top-0 w-full z-50 transition-all duration-300 
        ${scrolled
                        ? "bg-[#F1E4DB]/70 backdrop-blur-xl shadow-md"
                    : "bg-[#F1E4DB]/70 backdrop-blur-xl shadow-md"}`}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                    <motion.h1
                        whileHover={{ scale: 1.05 }}
                        className="text-xl font-semibold text-[#92333C]"
                    >
                        Thoranai enterprises
                    </motion.h1>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex gap-10 text-sm text-[#372937]">
                        {links.map((link) => {
                            const active = pathname === link.href;

                            return (
                                <motion.div
                                    key={link.name}
                                    whileHover={{ y: -2 }}
                                    className="relative"
                                >
                                    <Link href={link.href}>
                                        <span className={active ? "text-[#92333C]" : ""}>
                                            {link.name}
                                        </span>
                                    </Link>

                                    {active && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#92333C]"
                                        />
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-4">

                        <motion.div
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                            onClick={() => router.push("/cart")}
                            className="relative cursor-pointer group"
                        >
                            <ShoppingCart className="w-5 h-5 text-[#372937]" />
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-[#92333C] text-white text-xs px-1.5 rounded-full">
                                    {cart.length}
                                </span>
                            )}


                        </motion.div>

                        {/* CTA */}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}
                            className="hidden md:block bg-[#92333C] text-white px-4 py-2 rounded-full text-sm"
                        >
                            Shop Now
                        </motion.button>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            className="md:hidden flex flex-col gap-1"
                            onClick={() => setOpen(!open)}
                        >
                            <span className={`w-6 h-[2px] bg-[#372937] transition ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
                            <span className={`w-6 h-[2px] bg-[#372937] transition ${open ? "opacity-0" : ""}`} />
                            <span className={`w-6 h-[2px] bg-[#372937] transition ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
                        </button>

                    </div>
                </div>
            </motion.nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        className="fixed top-0 right-0 w-2/3 h-full bg-[#F1E4DB] z-40 p-10 flex flex-col gap-6"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-lg text-[#372937]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}   