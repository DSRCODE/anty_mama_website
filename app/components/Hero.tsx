"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <div className="max-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#3f3f3f] text-white">
        {/* Soft Gradient Glows */}
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#cbb58b]/20 blur-3xl"></div>
        <div className="absolute bottom-0 -right-32 h-[400px] w-[400px] rounded-full bg-[#cbb58b]/10 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-18 grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block mb-5 px-5 py-2 text-sm rounded-full bg-[#cbb58b]/20 text-[#cbb58b] tracking-wide">
              Premium Textile & Printing
            </span>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Fabrics Crafted With
              <span className="block text-[#cbb58b] mt-2">
                Elegance & Precision
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl leading-relaxed">
              High-quality textiles, expert fabric printing, and refined garment
              solutions designed for brands, businesses, and creators.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-6">
              <Link
                href="/contact"
                className="px-10 py-4 bg-[#cbb58b] text-black rounded-full font-medium hover:opacity-90 transition"
              >
                Get a Custom Quote
              </Link>

              <Link
                href="/categories"
                className="px-10 py-4 border border-[#cbb58b]/40 rounded-full text-[#cbb58b] hover:bg-[#cbb58b]/10 transition"
              >
                Explore Collections
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden md:block">
            <div className="relative z-10 rounded-3xl bg-[#2f2f2f] p-6 shadow-2xl border border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-36 rounded-xl bg-[#cbb58b]/20"></div>
                <div className="h-36 rounded-xl bg-[#cbb58b]/30"></div>
                <div className="h-36 rounded-xl bg-gray-700"></div>
                <div className="h-36 rounded-xl bg-black"></div>
              </div>
            </div>

            {/* Subtle Glow */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-[#cbb58b]/30 blur-2xl opacity-30"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
