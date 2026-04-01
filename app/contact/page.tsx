"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen px-6 md:px-16 py-20">

      {/* ================= HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mb-16"
      >
        <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
          Let’s Talk About <span className="text-orange-500">Your Needs</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg">
          Have questions about our poultry feed or need bulk supply?
          Our team is here to help you grow better.
        </p>
      </motion.div>

      {/* ================= MAIN ================= */}
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT - CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-10"
        >

          {/* Info item */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xl">
              📍
            </div>
            <div>
              <h4 className="font-semibold text-lg">Our Location</h4>
              <p className="text-gray-600 text-sm mt-1">
                Palakkad, Kerala 678583
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xl">
              ✉️
            </div>
            <div>
              <h4 className="font-semibold text-lg">Email Us</h4>
              <p className="text-gray-600 text-sm mt-1">
                support@eg.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-xl">
              📞
            </div>
            <div>
              <h4 className="font-semibold text-lg">Call Us</h4>
              <p className="text-gray-600 text-sm mt-1">
                +91 9544250000
              </p>
            </div>
          </div>

          {/* Highlight box */}
          <div className="bg-white p-6 rounded-xl shadow-sm border mt-10">
            <p className="text-gray-600 text-sm">
              💡 We typically respond within 24 hours.
            </p>
          </div>

        </motion.div>

        {/* RIGHT - FORM CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-2xl shadow-lg border"
        >

          <h2 className="text-2xl font-semibold mb-6">
            Send a Message
          </h2>

          <form className="bg-white/80  space-y-6 max-w-3xl">

            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-6">
              <input className="input4" placeholder="First Name" />
              <input className="input4" placeholder="Last Name" />
            </div>

            {/* Row 2 */}
            <textarea
              rows={5}
              className="input4 resize-none"
              placeholder="Your Message"
            />

            {/* Row 3 */}
            <div className="grid grid-cols-2 gap-6">
              <input className="input4" placeholder="Email Address" />
              <input className="input4" placeholder="Phone Number" />
            </div>

            {/* Button */}
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition">
              Send Message
            </button>

          </form>

        </motion.div>

      </div>
    </div>
  );
}