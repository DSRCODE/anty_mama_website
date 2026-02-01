"use client";

import { AnimatePresence, motion } from "framer-motion";

export function CartBadge({
  count,
  themeColor,
}: {
  count: number;
  themeColor?: string;
}) {
  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.span
          key={count} // Animate on count change
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1 rounded-full text-xs font-semibold flex items-center justify-center"
          style={{
            backgroundColor: themeColor || "#F87171", // fallback red
            color: "#fff",
          }}
        >
          {count}
        </motion.span>
      )}
    </AnimatePresence>
  );
}
