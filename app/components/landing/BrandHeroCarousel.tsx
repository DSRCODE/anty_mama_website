"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useBrand } from "@/app/providers/BrandProvider";
import clsx from "clsx";

type HeroSlide = {
  title: string;
  subtitle?: string;
  image: string;
};

// Define slides per brand (unchanged)
const HERO_SLIDES: Record<"ANTY_MAMA" | "NURSE_CAM", HeroSlide[]> = {
  ANTY_MAMA: [
    {
      title: "Welcome to Anty Mama",
      subtitle: "Premium cookware for your kitchen",
      image:
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cook Like a Pro",
      subtitle: "High-quality products for every chef",
      image:
        "https://images.unsplash.com/photo-1598511726159-5dcf0eaaef6f?auto=format&fit=crop&w=800&q=80",
    },
  ],
  NURSE_CAM: [
    {
      title: "Monitor Patients Easily",
      subtitle: "Crystal-clear visuals, reliable performance",
      image:
        "https://images.unsplash.com/photo-1588776814546-0e0a5dc26812?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Peace of Mind Anytime",
      subtitle: "Keep your hospital running smoothly",
      image:
        "https://images.unsplash.com/photo-1581092580493-43d3bb2c25c5?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export default function BrandHeroCarousel() {
  const { brand } = useBrand();
  const slides = HERO_SLIDES[brand];

  const [index, setIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const carouselHeight = "h-[45rem]";

  return (
    <section className="py-0 bg-gray-50">
      <div className="max-w-full mx-auto">
        {/* Fixed height wrapper prevents layout shift */}
        <div className="h-[50vh] md:h-[60vh]  shadow-md overflow-hidden bg-white">
          <AnimatePresence mode="wait">
            {slides.map((slide, i) =>
              i === index ? (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.6 }}
                  className="h-full" // Fill fixed parent height
                >
                  {/* Fixed aspect ratio container */}
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover  md:object-cover"
                      priority={i === 0} // Preload first slide
                    />
                    <div className="absolute inset-0 bg-black/25 flex flex-col justify-center items-center text-center px-6">
                      <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
                        {slide.title}
                      </h2>
                      {slide.subtitle && (
                        <p className="text-md md:text-xl text-white">
                          {slide.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>

        {/* Dots (unchanged) */}
        <div className="flex justify-center gap-3 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={clsx(
                "h-2.5 rounded-full transition-all",
                i === index ? "w-8 bg-black" : "w-2.5 bg-gray-300"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
