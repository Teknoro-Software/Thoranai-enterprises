"use client";

import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Cotton Overshirt",
    price: "₹2,999",
    category: "Cotton",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    hover:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  },
  {
    id: 2,
    name: "Silk Blend Shirt",
    price: "₹3,899",
    category: "Silk",
    image:
      "https://images.unsplash.com/photo-1593032465175-481ac7f401a0",
    hover:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03",
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: "₹1,599",
    category: "Denim",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    hover:
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070",
  },
  {
    id: 4,
    name: "Relaxed Fit Tee",
    price: "₹1,299",
    category: "Casual",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157",
    hover:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7",
  },
];

export default function ShopPage() {
  const { addToCart } = useCart();

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
        {["ALL", "COTTON", "SILK", "DENIM"].map((item, i) => (
          <span
            key={i}
            className="cursor-pointer hover:text-[#92333C] tracking-wide"
          >
            {item}
          </span>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-14">

        {products.map((product, index) => (
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
                className="absolute bottom-0 left-0 w-full bg-[#92333C] text-black text-sm py-3 translate-y-full group-hover:translate-y-0 transition duration-300"
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