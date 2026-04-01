/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CheckoutPage() {
    const { cart } = useCart();
    const router = useRouter();

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    );

    
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        pin: "",
        phone: "",
        email: "",
    });
    const [errors, setErrors] = useState<any>({});

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors: any = {};

        if (!form.firstName) newErrors.firstName = "Required";
        if (!form.lastName) newErrors.lastName = "Required";
        if (!form.address) newErrors.address = "Required";
        if (!form.city) newErrors.city = "Required";
        if (!form.state) newErrors.state = "Required";
        if (!form.pin) newErrors.pin = "Required";
        if (!form.phone) newErrors.phone = "Required";
        if (!form.email) newErrors.email = "Required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handlePlaceOrder = () => {
        if (!validate()) return;

        localStorage.setItem("lastOrder", JSON.stringify(cart));
        localStorage.removeItem("cart");

        router.push("/success");
    };

    return (
        <div className="bg-[white] min-h-screen px-6 md:px-24 py-24">

            {/* HEADER */}
            <div className="mb-5">
                <h1 className="text-[22px] tracking-wide text-black">
                    CHECKOUT
                </h1>
            </div>

            {cart.length === 0 ? (
                <div className="text-center mt-40 space-y-4">
                    <p className="text-sm text-gray-400 tracking-wide">
                        YOUR CART IS EMPTY
                    </p>

                    <button
                        onClick={() => router.push("/shop")}
                        className="text-sm border border-black px-6 py-2 hover:bg-black hover:text-white transition"
                    >
                        CONTINUE SHOPPING
                    </button>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 gap-20">

                    {/* LEFT - FORM */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-10"
                    >

                        <h2 className="text-[14px] tracking-wide">
                            DELIVERY DETAILS
                        </h2>

                            <form className="space-y-6">

                                {/* FIRST + LAST */}
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <input
                                            name="firstName"
                                            value={form.firstName}
                                            onChange={handleChange}
                                            placeholder="First name"
                                            className={`input4 ${errors.firstName ? "border-red-500" : ""}`}
                                        />
                                        {errors.firstName && (
                                            <p className="text-[11px] text-red-500 mt-1">
                                                {errors.firstName}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <input
                                            name="lastName"
                                            value={form.lastName}
                                            onChange={handleChange}
                                            placeholder="Last name"
                                            className={`input4 ${errors.lastName ? "border-red-500" : ""}`}
                                        />
                                        {errors.lastName && (
                                            <p className="text-[11px] text-red-500 mt-1">
                                                {errors.lastName}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* ADDRESS */}
                                <div>
                                    <input
                                        name="address"
                                        value={form.address}
                                        onChange={handleChange}
                                        placeholder="Street address"
                                        className={`input4 ${errors.address ? "border-red-500" : ""}`}
                                    />
                                    {errors.address && (
                                        <p className="text-[11px] text-red-500 mt-1">
                                            {errors.address}
                                        </p>
                                    )}
                                </div>

                                {/* CITY / STATE / PIN */}
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <input
                                            name="city"
                                            value={form.city}
                                            onChange={handleChange}
                                            placeholder="Town / City"
                                            className={`input4 ${errors.city ? "border-red-500" : ""}`}
                                        />
                                        {errors.city && (
                                            <p className="text-[11px] text-red-500 mt-1">
                                                {errors.city}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <input
                                            name="state"
                                            value={form.state}
                                            onChange={handleChange}
                                            placeholder="State"
                                            className={`input4 ${errors.state ? "border-red-500" : ""}`}
                                        />
                                        {errors.state && (
                                            <p className="text-[11px] text-red-500 mt-1">
                                                {errors.state}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <input
                                            name="pin"
                                            value={form.pin}
                                            onChange={handleChange}
                                            placeholder="PIN Code"
                                            className={`input4 ${errors.pin ? "border-red-500" : ""}`}
                                        />
                                        {errors.pin && (
                                            <p className="text-[11px] text-red-500 mt-1">
                                                {errors.pin}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* PHONE */}
                                <div>
                                    <input
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="Phone"
                                        className={`input4 ${errors.phone ? "border-red-500" : ""}`}
                                    />
                                    {errors.phone && (
                                        <p className="text-[11px] text-red-500 mt-1">
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>

                                {/* EMAIL */}
                                <div>
                                    <input
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        className={`input4 ${errors.email ? "border-red-500" : ""}`}
                                    />
                                    {errors.email && (
                                        <p className="text-[11px] text-red-500 mt-1">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <textarea rows={4} placeholder="Notes (optional)" className="input4" />

                            </form>

                    </motion.div>

                    {/* RIGHT - SUMMARY */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="border p-8 h-fit"
                    >

                        <h2 className="text-[14px] tracking-wide mb-8">
                            ORDER SUMMARY
                        </h2>

                        {/* ITEMS */}
                        <div className="space-y-4 border-b pb-6">

                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between text-[13px]"
                                >
                                    <span className="text-gray-600">
                                        {item.name} × {item.qty}
                                    </span>

                                    <span>
                                        ₹{(item.price * item.qty).toLocaleString()}
                                    </span>
                                </div>
                            ))}

                        </div>

                        {/* TOTAL */}
                        <div className="flex justify-between text-[13px] mt-6 mb-10">
                            <span>Total</span>
                            <span className="font-medium">
                                ₹{total.toLocaleString()}
                            </span>
                        </div>

                        {/* PAYMENT */}
                        <div className="space-y-4 text-[13px] mb-10">

                            <label className="flex items-center justify-between cursor-pointer border p-3">
                                <span>Cash on Delivery</span>
                                <input type="radio" name="payment" defaultChecked />
                            </label>

                            <label className="flex items-center justify-between cursor-pointer border p-3">
                                <span>Online Payment</span>
                                <input type="radio" name="payment" />
                            </label>

                        </div>

                            <button
                                onClick={handlePlaceOrder}
                                className="w-full bg-black text-white py-4 text-[13px] tracking-widest hover:opacity-80 transition"
                            >
                                PLACE ORDER
                            </button>

                    </motion.div>

                </div>
            )}
        </div>
    );
}