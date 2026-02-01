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
        "https://images.unsplash.com/photo-1588167056547-c183313da47c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "2",
      name: "Cast Iron Kadai",
      price: "$3,299",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "3",
      name: "Cookware Combo Set",
      price: "$6,999",
      image:
        "https://images.unsplash.com/photo-1604908554265-7b3b7d593c97?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "4",
      name: "Premium Frying Pan",
      price: "$1,899",
      image:
        "https://images.unsplash.com/photo-1598515213692-7a3c13b7fef3?auto=format&fit=crop&w=800&q=80",
    },
  ],

  NURSE_CAM: [
    {
      id: "101",
      name: "Nurse Cam Pro",
      price: "$12,999",
      image:
        "https://images.unsplash.com/photo-1580281657521-6bd6c85d6e10?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "102",
      name: "Patient Monitoring Camera",
      price: "$18,499",
      image:
        "https://images.unsplash.com/photo-1581092334631-90c87d4b04cc?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "103",
      name: "ICU Vision System",
      price: "$29,999",
      image:
        "https://images.unsplash.com/photo-1582719478141-1ff5cbd35c09?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "104",
      name: "Wireless Hospital Cam",
      price: "$21,999",
      image:
        "https://images.unsplash.com/photo-1588774069170-3c1f42e0e9a4?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export default function ProductSection() {
  const { brand } = useBrand();
  const theme = brandTheme[brand];
  const products = PRODUCTS[brand];

  return (
    <section className="py-20" style={{ backgroundColor: theme.subtext }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: theme.text }}
            >
              {brand === "ANTY_MAMA" ? "Our Cookware" : "Our Devices"}
            </h2>
            <p className="mt-3" style={{ color: theme.muted }}>
              {brand === "ANTY_MAMA"
                ? "Crafted for everyday cooking & lasting performance"
                : "Smart monitoring solutions for healthcare professionals"}
            </p>
          </div>

          {/* View all (desktop) */}
          <Link
            href="/products"
            className="hidden md:inline-flex mt-6 md:mt-0 items-center gap-2 text-sm font-semibold border-b transition"
            style={{ color: theme.primary, borderColor: theme.primary }}
          >
            View All →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border overflow-hidden transition hover:shadow-lg"
              style={{ borderColor: theme.border }}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3
                  className="text-sm md:text-base font-semibold line-clamp-2"
                  style={{ color: theme.text }}
                >
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mt-3">
                  <span
                    className="text-lg font-bold"
                    style={{ color: theme.primary }}
                  >
                    {product.price}
                  </span>

                  <Link
                    href={`/products`}
                    className="text-sm font-medium transition"
                    style={{ color: theme.muted }}
                  >
                    View →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all (mobile) */}
        <div className="flex justify-center mt-12 md:hidden">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition"
            style={{
              backgroundColor: theme.primary,
              color: theme.subtext,
            }}
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
