"use client";

import { useEffect, useState } from "react";
import { Blocks, Building2, Truck } from "lucide-react";

export default function AboutSection() {

  const [blocks, setBlocks] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {

    let b = 0;
    let p = 0;

    const interval = setInterval(() => {

      if (b < 500) {
        b += 10;
        setBlocks(b);
      }

      if (p < 120) {
        p += 3;
        setProjects(p);
      }

      if (b >= 500 && p >= 120) clearInterval(interval);

    }, 30);

    return () => clearInterval(interval);

  }, []);

  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div>

          <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
            Who We Are
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Building Reliable Construction Materials
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Difference Construction (MW) Ltd manufactures durable concrete
            blocks, interlocking pavers and garden tiles used in residential,
            commercial and infrastructure projects across Malawi.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our commitment to quality materials and reliable supply has made
            us a trusted partner for contractors, developers and construction
            companies nationwide.
          </p>

        </div>


        {/* RIGHT CARD */}
        <div className="flex justify-center">

          <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.08)] p-10 space-y-8">

            {/* BLOCKS */}
            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-xl bg-green-600/10 text-green-600 flex items-center justify-center">
                <Blocks size={28} />
              </div>

              <div>
                <p className="text-3xl font-bold text-gray-900">
                  {blocks}+
                </p>
                <p className="text-gray-500">
                  Blocks Produced
                </p>
              </div>

            </div>


            {/* PROJECTS */}
            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-xl bg-green-600/10 text-green-600 flex items-center justify-center">
                <Building2 size={28} />
              </div>

              <div>
                <p className="text-3xl font-bold text-gray-900">
                  {projects}+
                </p>
                <p className="text-gray-500">
                  Projects Completed
                </p>
              </div>

            </div>


            {/* SUPPLY */}
            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-xl bg-green-600/10 text-green-600 flex items-center justify-center">
                <Truck size={28} />
              </div>

              <div>
                <p className="text-3xl font-bold text-gray-900">
                  Nationwide
                </p>
                <p className="text-gray-500">
                  Supply Coverage
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}