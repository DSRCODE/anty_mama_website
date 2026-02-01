"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  Truck,
  ShieldCheck,
  Scissors,
  Palette,
  Award,
  Shirt,
  Zap,
} from "lucide-react";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  gradient: string;
}

const features: FeatureItem[] = [
  {
    icon: <ShoppingBag className="w-20 h-20" />,
    title: "Unlimited Variety",
    description: "Comprehensive textile solutions for every need",
    details: [
      "100+ fabric types & weights",
      "All clothing styles covered",
      "Custom sizing available",
      "Bulk & retail orders",
    ],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: <Scissors className="w-20 h-20" />,
    title: "Multi-Purpose Printing",
    description: "Advanced printing technology for all fabrics",
    details: [
      "DTG • DTF • Screen Print",
      "Sublimation & Vinyl",
      "High-resolution graphics",
      "Colorfast & durable",
    ],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: <Truck className="w-20 h-20" />,
    title: "Nationwide Delivery",
    description: "Fast, reliable shipping across India",
    details: [
      "Same-day dispatch",
      "Pan-India coverage",
      "Express options available",
      "Real-time tracking",
    ],
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: <Palette className="w-20 h-20" />,
    title: "Handcrafted Excellence",
    description: "Artisan craftsmanship meets modern technology",
    details: [
      "Hand embroidery options",
      "Custom embellishments",
      "Bespoke detailing",
      "Premium finishing",
    ],
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: <ShieldCheck className="w-20 h-20" />,
    title: "Quality Certified",
    description: "Premium materials with guaranteed durability",
    details: [
      "OEKO-TEX certified fabrics",
      "Wash-tested prints",
      "Strict QC processes",
      "100% satisfaction",
    ],
    gradient: "from-amber-500 to-yellow-600",
  },
  {
    icon: <Award className="w-20 h-20" />,
    title: "Branding Solutions",
    description: "Complete corporate branding packages",
    details: [
      "Logo embroidery & prints",
      "Uniform design service",
      "Event merchandise",
      "Marketing collateral",
    ],
    gradient: "from-rose-500 to-pink-600",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 lg:py-32 bg-linear-to-b from-white via-gray-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 lg:mb-28"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-linear-to-r from-gray-900 via-gray-800 to-black bg-clip-text text-transparent mb-6 leading-tight">
            Why{" "}
            <span className="text-transparent bg-linear-to-r from-yellow-500 to-orange-500 bg-clip-text">
              Choose
            </span>{" "}
            Us
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your complete textile partner - from custom printing to premium
            handcrafted apparel and professional branding solutions
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:bg-white border border-white/50 transition-all duration-500 overflow-hidden h-full"
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  delay: index * 0.1,
                }}
                className="w-24 h-24 mx-auto mb-8 p-6 bg-white/90 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-white/50 flex items-center justify-center"
              >
                <div
                  className={`p-4 rounded-2xl bg-linear-to-r ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
              </motion.div>

              {/* Content */}
              <div className="text-center space-y-4 relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-gray-800 mb-4 leading-tight">
                  {feature.title}
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-sm mx-auto">
                  {feature.description}
                </p>

                <ul className="space-y-2 text-sm text-gray-500">
                  {feature.details.map((detail, detailIndex) => (
                    <motion.li
                      key={detail}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + detailIndex * 0.05 }}
                      className="flex items-center gap-3 pl-6 relative before:absolute before:left-0 before:w-2 before:h-2 before:bg-linear-to-r before:from-gray-400 before:to-gray-500 before:rounded-full"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-500 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {detail}
                    </motion.li>
                  ))}
                </ul>

                <motion.div whileHover={{ scale: 1.05 }} className="pt-6">
                  <div className="w-24 h-1 bg-linear-to-r from-gray-200 to-gray-300 rounded-full mx-auto group-hover:scale-x-125 origin-center transition-transform duration-300" />
                </motion.div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-linear-to-br from-white/30 to-transparent rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-linear-to-br from-yellow-200/50 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-90 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 pt-20 border-t border-gray-100"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { num: "10K+", label: "Happy Customers" },
              { num: "500K+", label: "Garments Delivered" },
              { num: "50+", label: "Printing Techniques" },
              { num: "24h", label: "Express Dispatch" },
            ].map((stat, index) => (
              <div key={stat.label} className="group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-4xl md:text-5xl font-black bg-linear-to-r from-gray-900 to-black bg-clip-text text-transparent mb-2"
                >
                  {stat.num}
                </motion.div>
                <p className="text-sm font-medium text-gray-600 tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
