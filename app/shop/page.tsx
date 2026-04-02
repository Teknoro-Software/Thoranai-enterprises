"use client";

import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { useState } from "react";

const products = [
  // 🧵 COTTON
  {
    id: 1,
    name: "Cotton Overshirt",
    price: "₹2,999",
    category: "Cotton",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    hover: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
  },
  {
    id: 2,
    name: "Cotton Casual Shirt",
    price: "₹2,199",
    category: "Cotton",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1",
    hover: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53",
  },
  {
    id: 3,
    name: "Cotton Summer Wear",
    price: "₹1,899",
    category: "Cotton",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
    hover: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?q=80&w=800&auto=format&fit=crop",
  },


  // ✨ SILK
  {
    id: 4,
    name: "Silk Blend Shirt",
    price: "₹3,899",
    category: "Silk",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03",
    hover: "https://images.unsplash.com/photo-1594736797933-d0c6a2c1c87b",
  },
  {
    id: 5,
    name: "Premium Silk Fabric",
    price: "₹4,299",
    category: "Silk",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7",
    hover: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
  },
  {
    id: 6,
    name: "Luxury Silk Wear",
    price: "₹5,199",
    category: "Silk",
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0",
    hover: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03",
  },

  // 👖 DENIM
  {
    id: 7,
    name: "Denim Jacket",
    price: "₹1,599",
    category: "Denim",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    hover: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
  },
  {
    id: 8,
    name: "Denim Shirt",
    price: "₹1,899",
    category: "Denim",
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c",
    hover: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
  },
  {
    id: 9,
    name: "Denim Casual Wear",
    price: "₹2,299",
    category: "Denim",
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=800&auto=format&fit=crop",
    hover: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
  },

  // 👕 CASUAL
  {
    id: 10,
    name: "Relaxed Fit Tee",
    price: "₹1,299",
    category: "Casual",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157",
    hover: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7",
  },
  {
    id: 11,
    name: "Casual Hoodie",
    price: "₹2,499",
    category: "Casual",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    hover: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  },
  {
    id: 12,
    name: "Street Casual Wear",
    price: "₹1,799",
    category: "Casual",
    image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
    hover: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03",
  },
];

export default function ShopPage() {
  const { addToCart } = useCart();

  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProducts =
    activeCategory === "ALL"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#F1E4DB] min-h-screen px-6 md:px-20 py-24">

      {/* HEADER */}
      <div className="mb-16 flex justify-between items-end">
        <div>
          <h1 className="text-2xl md:text-3xl tracking-wide text-black">
            COLLECTION
          </h1>
          <p className="text-xs text-[#92333C] mt-1">
            {products.length} PRODUCTS
          </p>
        </div>

        <span className="text-sm text-[#92333C] cursor-pointer hover:text-black">
          SORT ⌄
        </span>
      </div>

      {/* FILTER */}
      <div className="flex gap-8 text-sm text-black mb-16">
        {["ALL", "Cotton", "Silk", "Denim", "Casual"].map((item, i) => (
          <span
            key={i}
            onClick={() => setActiveCategory(item)}
            className={`cursor-pointer tracking-wide transition ${activeCategory === item
                ? "text-[#92333C] font-medium"
                : "hover:text-[#92333C]"
              }`}
          >
            {item.toUpperCase()}
          </span>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-14">

        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
            className="group"
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden bg-[#f6f6f6]">

              {/* MAIN */}
              <img
                src={product.image}
                className="w-full h-[320px] object-cover transition duration-500 group-hover:opacity-0"
              />

              {/* HOVER IMAGE */}
              <img
                src={product.hover}
                className="absolute inset-0 w-full h-[320px] object-cover opacity-0 group-hover:opacity-100 transition duration-500"
              />

              {/* ADD TO CART SLIDE */}
              <button
                onClick={() =>
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: Number(product.price.replace(/[^0-9]/g, "")),
                    image: product.image,
                  })
                }
                className="
  absolute bottom-0 left-0 w-full 
  bg-[#92333C] text-white text-sm py-3 
  translate-y-0 md:translate-y-full 
  md:group-hover:translate-y-0 
  transition duration-300
"
              >
                ADD TO CART
              </button>
            </div>

            {/* TEXT */}
            <div className="mt-4 space-y-1">
              <p className="text-[10px] text-[#92333C] uppercase tracking-widest">
                {product.category}
              </p>

              <h3 className="text-[13px] text-black">
                {product.name}
              </h3>

              <p className="text-[13px] text-black">
                {product.price}
              </p>
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}