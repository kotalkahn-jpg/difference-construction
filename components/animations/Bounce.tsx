"use client";

import { motion } from "framer-motion";

export default function Bounce({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      animate={{
        y: [0, -6, 0]
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{
        scale: 1.05
      }}
      whileTap={{
        scale: 0.95
      }}
    >
      {children}
    </motion.div>
  );
}