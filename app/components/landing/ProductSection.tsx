"use client";

import Image from "next/image";
import Link from "next/link";
import { useBrand } from "@/app/providers/BrandProvider";
import { brandTheme } from "@/lib/brandTheme";

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
};

/* Brand-specific products */
const PRODUCTS: Record<"ANTY_MAMA" | "NURSE_CAM", Product[]> = {
  ANTY_MAMA: [
    {
      id: "1",
      name: "Premium Non-Stick Pan",
      price: "$2,499",
      image:
        "https://plus.unsplash.com/premium_photo-1714702844124-be1377d19666?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "2",
      name: "Cast Iron Kadai",
      price: "$3,299",
      image:
        "https://plus.unsplash.com/premium_photo-1714648165397-ff0ca4ec9ef4?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "3",
      name: "Cookware Combo Set",
      price: "$6,999",
      image:
        "https://plus.unsplash.com/premium_photo-1664007654112-a6a19547ae7b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "4",
      name: "Premium Frying Pan",
      price: "$1,899",
      image:
        "https://images.unsplash.com/photo-1738484708927-c1f45df0b56e?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],

  NURSE_CAM: [
    {
      id: "101",
      name: "Nurse Cam Pro",
      price: "$12,999",
      image:
        "https://images.unsplash.com/photo-1725869973689-425c74f79a48?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "102",
      name: "Patient Monitoring Camera",
      price: "$18,499",
      image:
        "https://images.unsplash.com/photo-1725870456828-139463fd90a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "103",
      name: "ICU Vision System",
      price: "$29,999",
      image:
        "https://images.unsplash.com/photo-1645684949347-58cb7ebfeaca?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "104",
      name: "Wireless Hospital Cam",
      price: "$21,999",
      image:
        "https://images.unsplash.com/photo-1644488483724-4daed4a30390?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

export default function ProductSection() {
  const { brand } = useBrand();
  const theme = brandTheme[brand];
  const products = PRODUCTS[brand];

  return (
    <section
      className="py-16 lg:py-20"
      style={{ backgroundColor: theme.subtext }}
    >
      {" "}
      {/* Reduced py */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Optimized px */}
        {/* Compact Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 lg:mb-12 gap-4">
          <div className="min-w-0">
            {" "}
            {/* Prevents overflow */}
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
              style={{ color: theme.text }}
            >
              {brand === "ANTY_MAMA" ? "Our Cookware" : "Our Devices"}
            </h2>
            <p
              className="mt-1 text-sm lg:text-base leading-relaxed"
              style={{ color: theme.muted }}
            >
              {brand === "ANTY_MAMA"
                ? "Crafted for everyday cooking & lasting performance"
                : "Smart monitoring solutions for healthcare professionals"}
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold border-b hover:opacity-80 transition-colors"
            style={{ color: theme.primary, borderColor: theme.primary }}
          >
            View All Products →
          </Link>
        </div>
        {/* Tight Grid - Auto-height cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group block p-4 md:p-5 lg:p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border hover:border-transparent bg-white/90 backdrop-blur-sm"
              style={{
                borderColor: theme.border,
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              {/* Optimized Image - Consistent aspect */}
              <div className="relative w-full aspect-[4/5] mb-3 overflow-hidden rounded-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Compact Content - Tight typography */}
              <div className="space-y-1.5">
                <h3
                  className="text-sm md:text-base lg:text-lg font-semibold leading-tight line-clamp-2 group-hover:text-primary transition-colors"
                  style={{ color: theme.text }}
                >
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span
                    className="text-base md:text-lg font-bold"
                    style={{ color: theme.primary }}
                  >
                    {product.price}
                  </span>
                  <span className="text-xs font-medium opacity-75 group-hover:opacity-100 transition-opacity">
                    View →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Compact Mobile CTA - Hidden on desktop */}
        <div className="flex justify-center mt-8 lg:hidden">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold border hover:shadow-md transition-all"
            style={{
              backgroundColor: theme.primary,
              color: theme.subtext,
              borderColor: theme.primary,
            }}
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
