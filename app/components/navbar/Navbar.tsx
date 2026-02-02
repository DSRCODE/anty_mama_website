"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useBrand } from "@/app/providers/BrandProvider";
import { brandTheme } from "@/lib/brandTheme";
import NavLinks from "./NavLinks";
import { CartBadge } from "./CartBadge";
import Image from "next/image";
import { useCartCount } from "@/app/providers/CartProvider";

export default function Navbar() {
  const { brand } = useBrand();
  const theme = brandTheme[brand];
  const cartCount = useCartCount();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b"
      style={{ borderColor: theme.border }}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/anty_logo.png"
            alt="Logo"
            width={60}
            height={40}
            priority
          />
          <span className="text-xl font-bold" style={{ color: theme.text }}>
            {brand === "ANTY_MAMA" ? "Anty Mama" : "Nurse Cam"}{" "}
            <span
              className="text-sm font-medium"
              style={{ color: theme.muted }}
            >
              LLC
            </span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex">
          <NavLinks />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 relative">
          {/* Cart */}
          <Link href="/cart" className="relative p-2" aria-label="Cart">
            <FiShoppingCart size={22} style={{ color: theme.primary }} />
            <CartBadge count={cartCount} themeColor={theme.primary} />
          </Link>

          {/* Mobile Menu */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2"
            aria-label="Open menu"
          >
            <FiMenu size={24} style={{ color: theme.primary }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-white flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <span
                className="text-lg font-semibold"
                style={{ color: theme.text }}
              >
                Menu
              </span>

              <div className="flex items-center gap-4">
                {/* Cart */}
                <Link
                  href="/cart"
                  onClick={() => setOpen(false)}
                  className="relative"
                >
                  <FiShoppingCart size={22} style={{ color: theme.primary }} />
                  <CartBadge count={cartCount} themeColor={theme.primary} />
                </Link>

                <button
                  onClick={() => setOpen(false)}
                  style={{ color: theme.primary }}
                >
                  <FiX size={26} />
                </button>
              </div>
            </div>

            {/* Links */}
            <div className="flex-1 px-6 py-10">
              <NavLinks mobile />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
