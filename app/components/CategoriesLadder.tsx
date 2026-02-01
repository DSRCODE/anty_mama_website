"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Category {
  name: string;
  description: string;
  image: string;
  ctaText: string;
  link: string;
}

const categories: Category[] = [
  {
    name: "T-Shirts",
    description:
      "Premium cotton tees with custom prints. Perfect for casual wear.",
    image:
      "https://originalluxury.ca/cdn/shop/articles/top-mens-luxury-clothes.jpg?v=1681720926&width=1024",
    ctaText: "Shop Now",
    link: "/categories",
  },
  {
    name: "Hoodies",
    description:
      "Cozy oversized hoodies with premium fabric. Ideal for winter.",
    image:
      "https://italianartisan.com/wp-content/uploads/2024/11/10-Best-Luxury-Clothing-Manufacturers-For-Your-Business-scaled.webp",
    ctaText: "Explore",
    link: "/categories",
  },
  {
    name: "Traditional Wear",
    description: "Authentic ethnic wear with modern twists. Celebrate culture.",
    image: "https://m.media-amazon.com/images/I/81lbVk0AZ6L._AC_UY1100_.jpg",
    ctaText: "Discover",
    link: "/categories",
  },
  {
    name: "Corporate Uniforms",
    description:
      "Professional uniforms tailored for businesses. Bulk orders welcome.",

    image:
      "https://digi-texx.com/wp-content/uploads/2024/08/02.-The-Challenges-Of-Entering-The-Pre-owned-Luxury-Clothing-Market-1.jpg",
    ctaText: "Get Quote",
    link: "/categories",
  },
];

const CategoriesLadder = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-linear-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
        >
          Shop by Categories
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 text-center mb-20 max-w-2xl mx-auto"
        >
          Discover our premium collection crafted with quality fabric and custom
          design options
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 h-[500px] lg:h-[550px] flex flex-col ${
                index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative overflow-hidden bg-linear-to-br from-gray-50 to-gray-100">
                <motion.img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  whileHover={{ scale: 1.1 }}
                />

                {/* Overlay */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent flex items-end p-8"
                    >
                      <div className="text-white space-y-2">
                        <h4 className="text-2xl font-bold">{category.name}</h4>
                        <p className="opacity-90">{category.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Static overlay for non-hovered state */}
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 h-1/2 lg:h-full p-8 lg:p-12 flex flex-col justify-center">
                <motion.div
                  animate={{ y: hoveredIndex === index ? -10 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="space-y-4"
                >
                  <h4 className="text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                    {category.name}
                  </h4>

                  <p className="text-lg text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {category.description}
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="pt-4"
                  >
                    <a
                      href={category.link}
                      className="inline-flex items-center px-8 py-4 bg-linear-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-lg font-semibold text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:translate-x-2"
                    >
                      {category.ctaText}
                      <svg
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesLadder;
