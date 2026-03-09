"use client";

import { useState, useRef } from "react";
import { generateQuote } from "@/lib/generateQuote";
import { motion, AnimatePresence } from "framer-motion";
import Bounce from "@/components/animations/Bounce";

export default function QuoteModal({ close }: { close: () => void }) {
  const [loading, setLoading] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(e: any) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    generateQuote(data);

    setLoading(false);
    close();
  }

  function handleBackdropClick(e: any) {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      close();
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        onClick={handleBackdropClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-6"
      >

        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ duration: 0.35 }}
          className="bg-white text-gray-900 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl p-8 relative shadow-xl"
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={close}
            className="sticky top-0 float-right text-gray-500 hover:text-gray-700 text-lg"
          >
            ✕
          </button>

          {/* TITLE */}
          <h3 className="text-2xl font-bold mb-6">
            Request A Quotation
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 bg-white text-gray-900 rounded-md p-3"
            />

            {/* PRODUCT TYPE */}
            <select
              name="product"
              required
              className="w-full border border-gray-300 bg-white text-gray-900 rounded-md p-3"
            >
              <option value="">Select Brick Type</option>
              <option>Concrete Blocks</option>
              <option>Interlocking Pavers</option>
              <option>Garden Tiles</option>
            </select>

            {/* QUANTITY */}
            <input
              type="number"
              name="quantity"
              placeholder="Quantity Required"
              required
              className="w-full border border-gray-300 bg-white text-gray-900 rounded-md p-3"
            />

            {/* PHONE */}
            <input
              type="tel"
              name="phone"
              placeholder="+265"
              required
              className="w-full border border-gray-300 bg-white text-gray-900 rounded-md p-3"
            />

            {/* COMPANY */}
            <input
              type="text"
              name="company"
              placeholder="Company Name (optional)"
              className="w-full border border-gray-300 bg-white text-gray-900 rounded-md p-3"
            />

            {/* NOTES */}
            <textarea
              name="details"
              placeholder="Project details or delivery location"
              rows={3}
              className="w-full border border-gray-300 bg-white text-gray-900 rounded-md p-3"
            />

            {/* SUBMIT */}
            <Bounce>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition font-medium"
              >
                {loading ? "Generating Quote..." : "Generate Quotation"}
              </button>
            </Bounce>

          </form>

        </motion.div>

      </motion.div>
    </AnimatePresence>
  );
}