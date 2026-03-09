"use client";

import { useState } from "react";
import QuoteModal from "./QuoteModal";
import Bounce from "@/components/animations/Bounce";

export default function GetQuoteCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-green-600 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold">
            Need Construction Materials?
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-white/90">
            Request a quotation for bricks, pavers or tiles and our sales team
            will respond with pricing and availability.
          </p>

          <div className="mt-8">
            <Bounce>
              <button
                onClick={() => setOpen(true)}
                className="bg-white text-green-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
              >
                Get A Quotation
              </button>
            </Bounce>
          </div>

        </div>
      </section>

      {open && <QuoteModal close={() => setOpen(false)} />}
    </>
  );
}