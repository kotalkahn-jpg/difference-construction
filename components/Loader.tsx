"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loaded = sessionStorage.getItem("siteLoaded");

    if (loaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem("siteLoaded", "true");
      setLoading(false);
    }, 2300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999]"
          >
            <div className="relative flex items-center justify-center">

              {/* rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "linear",
                }}
                className="absolute w-44 h-44 border-4 border-green-500 border-t-transparent rounded-full"
              />

              {/* breathing logo */}
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <Image
                  src="/logo.jpg"
                  alt="Difference Construction"
                  width={110}
                  height={110}
                  priority
                />
              </motion.div>
            </div>

            <p className="mt-8 text-gray-600 text-sm tracking-wide">
              Building Quality Materials
            </p>

            <div className="w-52 h-[3px] bg-gray-200 mt-6 overflow-hidden rounded">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.3,
                  ease: "easeInOut",
                }}
                className="h-full bg-green-500 w-1/2"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && children}
    </>
  );
}