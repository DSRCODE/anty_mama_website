"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useBrand } from "@/app/providers/BrandProvider";
import { brandTheme } from "@/lib/brandTheme";
import { useCart } from "@/app/providers/CartProvider";
import { PRODUCT_DATA } from "../productData";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;

  const { brand } = useBrand();
  const theme = brandTheme[brand];
  const { addToCart } = useCart();

  const product = PRODUCT_DATA[brand].find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-sm">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        {/* Page Heading */}
        <div className="space-y-2">
          <h1
            className="text-3xl md:text-4xl font-semibold tracking-tight"
            style={{ color: theme.text }}
          >
            Product Details
          </h1>
          <p
            className="text-sm md:text-base max-w-2xl"
            style={{ color: theme.muted }}
          >
            Explore detailed information, specifications, and pricing for this
            product. Designed to meet professional standards with premium
            quality.
          </p>
        </div>

        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image */}
          <div
            className="relative aspect-3/4 rounded-xl overflow-hidden"
            style={{ border: `1px solid ${theme.border}` }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2
                className="text-2xl md:text-3xl font-semibold leading-snug"
                style={{ color: theme.text }}
              >
                {product.name}
              </h2>

              <p
                className="mt-2 text-sm uppercase tracking-wide"
                style={{ color: theme.muted }}
              >
                {product.category}
              </p>
            </div>

            <p
              className="text-xl font-semibold"
              style={{ color: theme.primary }}
            >
              ${product.price}
            </p>

            {/* Description */}
            <div className="space-y-2">
              <h3
                className="text-sm font-semibold uppercase tracking-wide"
                style={{ color: theme.text }}
              >
                Description
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: theme.muted }}
              >
                {product.description}
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={() =>
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  brand,
                })
              }
              className="w-full md:w-auto px-10 py-3 rounded-xl text-sm font-semibold transition hover:opacity-90"
              style={{
                backgroundColor: theme.primary,
                color: theme.subtext,
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
