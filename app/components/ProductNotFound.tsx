"use client";

import { IoCubeOutline } from "react-icons/io5";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br bg-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white border shadow-xl rounded-2xl p-10 max-w-lg w-full text-center"
      >
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-amber-50">
          <IoCubeOutline className="text-amber-600 text-4xl" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Product Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          The product you are looking for may have been removed, renamed, or is
          temporarily unavailable.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/products"
            className="px-6 py-3 rounded-xl bg-amber-600 text-white font-semibold hover:bg-amber-700 transition"
          >
            Browse Products
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:border-amber-500 transition"
          >
            Contact Support
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
