"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CartPage() {
  const { cart, removeItem, updateQty } = useCart();
  const router = useRouter();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="bg-[#F1E4DB]  px-6 md:px-24 pt-24">

      {/* HEADER */}
      <div className="mb-10 flex justify-between items-end">
        <h1 className="text-[22px] tracking-wide text-black">
          SHOPPING BAG
        </h1>

        <p className="text-[11px] text-gray-400 tracking-widest">
          {cart.length} ITEMS
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="text-center mt-40 space-y-4">
          <p className="text-sm text-gray-400 tracking-wide">
            YOUR BAG IS EMPTY
          </p>

          <button
            onClick={() => router.push("/shop")}
            className="text-sm border border-black px-6 py-2 hover:bg-black hover:text-white transition"
          >
            CONTINUE SHOPPING
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-20">

          {/* LEFT */}
          <div className="md:col-span-2 space-y-10">

            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-6 border-b pb-10"
              >

                {/* IMAGE */}
                <img
                  src={item.image}
                  className="w-28 h-36 object-cover"
                />

                {/* DETAILS */}
                <div className="flex-1 flex flex-col justify-between">

                  <div>
                    <h3 className="text-[13px] text-black">
                      {item.name}
                    </h3>

                    <p className="text-[11px] text-gray-400 mt-1 uppercase tracking-wide">
                      PRODUCT
                    </p>

                    <p className="text-[13px] text-black mt-2">
                      ₹{item.price.toLocaleString()}
                    </p>
                  </div>

                  {/* ACTIONS */}
                  <div className="flex items-center justify-between mt-6">

                    {/* QTY */}
                    <div className="flex items-center border border-gray-300">

                      <button
                        onClick={() => updateQty(item.id, "dec")}
                        className="px-3 py-1 text-sm hover:bg-gray-100 transition"
                      >
                        −
                      </button>

                      <span className="px-4 text-sm">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => updateQty(item.id, "inc")}
                        className="px-3 py-1 text-sm hover:bg-gray-100 transition"
                      >
                        +
                      </button>

                    </div>

                    {/* REMOVE */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-[11px] text-gray-400 hover:text-black tracking-wide"
                    >
                      REMOVE
                    </button>
                  </div>

                </div>

                {/* TOTAL */}
                <div className="text-[13px] text-black">
                  ₹{(item.price * item.qty).toLocaleString()}
                </div>

              </motion.div>
            ))}

          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border p-8 h-fit"
          >

            <h3 className="text-[13px] tracking-wide mb-8">
              ORDER SUMMARY
            </h3>

            <div className="flex justify-between text-[13px] mb-4">
              <span className="text-gray-400">Subtotal</span>
              <span>₹{total.toLocaleString()}</span>
            </div>

            <div className="flex justify-between text-[13px] mb-8">
              <span className="text-gray-400">Shipping</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between text-[13px] border-t pt-4 mb-10">
              <span>Total</span>
              <span className="font-medium">
                ₹{total.toLocaleString()}
              </span>
            </div>

            <button
              onClick={() => router.push("/checkout")}
              className="w-full bg-black text-white py-3 text-[13px] tracking-widest hover:opacity-80 transition"
            >
              CONTINUE
            </button>

          </motion.div>

        </div>
      )}
    </div>
  );
}