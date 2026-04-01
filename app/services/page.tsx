"use client";

import { motion } from "framer-motion";
import { Factory, Globe, Layers, Package, Scissors, Shirt, Sparkles, Truck } from "lucide-react";

const services = [
  {
    title: "Wholesale Fabrics",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157",
    icon: Shirt,
  },
  {
    title: "Retail Fabric Sales",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    icon: Layers,
  },
  {
    title: "Fabric Export",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    icon: Globe,
  },
  {
    title: "Bulk Orders",
    image: "/images/bulk.jpg",
    icon: Package,
  },

  {
    title: "Cotton Threads",
    image: "/images/cotton.jpg",
    icon: Scissors,
  },
  {
    title: "Polyester Threads",
    image: "/images/poly.jpg",
    icon: Factory,
  },
  {
    title: "Silk Threads",
    image: "/images/silk.jpg",
    icon: Sparkles,
  },

  // 🧥 FABRICS TYPES
  {
    title: "Denim Fabrics",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    icon: Layers,
  },
  {
    title: "Silk Fabrics",
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0",
    icon: Shirt,
  },

  {
    title: "Custom Fabric Orders",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    icon: Scissors,
  },
  {
    title: "Fashion Supply Chain",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
    icon: Truck,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#F5F5F5] text-[#372937]">

      {/* 🔥 HERO */}
      <section className="relative h-[55vh] flex items-center px-6 md:px-16 text-white overflow-hidden ">
        <motion.img
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
          className="absolute inset-0 w-full h-full object-cover mt-16"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <p className="text-sm text-gray-300">Home / Services</p>
          <h1 className="text-4xl md:text-5xl font-semibold mt-2">
            Our Services
          </h1>
        </motion.div>
      </section>

      {/* 💎 SERVICES GRID */}
      <section className="px-6 md:px-16 py-20 bg-gradient-to-r from-[#E1A49A]/20 via-transparent to-[#92333C]/20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-semibold mb-10"
        >
          Explore Our Services
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden group"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={item.image}
                  className="h-48 w-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>

                {/* ICON */}
                <div className="absolute bottom-[-20px] left-5 bg-[#92333C] text-white p-3 rounded shadow text-lg">
                  <item.icon className="w-5 h-5" />
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 mt-4">
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  Premium fabrics curated for modern fashion and wholesale excellence.
                </p>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-[#92333C] text-sm mt-3"
                >
                  Explore →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⭐ FEATURE STRIP */}
      <section className="grid md:grid-cols-3 gap-6 px-6 md:px-16 pb-20 bg-gradient-to-r from-[#E1A49A]/20 via-transparent to-[#92333C]/20">
        {[
          "Premium Fabrics",
          "Expert Craftsmanship",
          "Modern Collections",
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            className={`p-8 text-center rounded ${i === 1
                ? "bg-[#92333C] text-white shadow-lg"
                : "bg-white shadow"
              }`}
          >
            <h3 className="font-semibold">{item}</h3>
          </motion.div>
        ))}
      </section>

      {/* 🧊 TESTIMONIALS */}
      <section className="bg-black text-white py-20 text-center relative overflow-hidden">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-semibold mb-6"
        >
          What Our Clients Say
        </motion.h2>

        <p className="max-w-xl mx-auto text-gray-300">
          Trusted by fashion retailers and customers for premium textile quality.
        </p>

        {/* AVATARS */}
        <div className="mt-10 flex justify-center gap-4">
          {[1, 2, 3, 4].map((i) => (
            <motion.img
              key={i}
              src={`https://randomuser.me/api/portraits/women/${i}.jpg`}
              className="w-10 h-10 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 + i }}
            />
          ))}
        </div>
      </section>

      {/* 🏢 BRANDS */}
      <section className="py-16 text-center bg-gradient-to-r from-[#E1A49A]/40 via-transparent to-[#92333C]/40">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-6 text-gray-600"
        >
          Trusted by Leading Fashion Brands
        </motion.h3>

        <div className="flex justify-center gap-10 text-gray-500">
          {["Zara", "H&M", "Lifestyle", "Trends"].map((b, i) => (
            <motion.span key={i} whileHover={{ scale: 1.1 }}>
              {b}
            </motion.span>
          ))}
        </div>
      </section>

      

    </div>
  );
}