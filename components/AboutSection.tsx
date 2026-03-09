"use client";

import Image from "next/image";
import { Blocks, Building2, Truck } from "lucide-react";
import { useEffect, useState } from "react";

import FadeIn from "@/components/animations/FadeIn";
import SlideInRight from "@/components/animations/SlideInRight";
import SlideIn from "@/components/animations/SlideIn";

export default function AboutSection() {

  const [projects, setProjects] = useState(0);
  const [blocks, setBlocks] = useState(0);

  useEffect(() => {
    let p = 0;
    let b = 0;

    const interval = setInterval(() => {
      if (p < 120) {
        p += 4;
        setProjects(p);
      }

      if (b < 500) {
        b += 10;
        setBlocks(b);
      }

      if (p >= 120 && b >= 500) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-6 auto-rows-[200px]">

          {/* TALL IMAGE */}
          <div className="relative row-span-2 rounded-2xl overflow-hidden shadow-lg group">
            <FadeIn>
              <Image
                src="/about/4.jpg"
                alt="Factory"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </FadeIn>
          </div>

          {/* IMAGE */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <FadeIn delay={0.1}>
              <Image
                src="/about/2.jpg"
                alt="Brick production"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </FadeIn>
          </div>

          {/* IMAGE */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <FadeIn delay={0.2}>
              <Image
                src="/about/3.jpg"
                alt="Construction materials"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </FadeIn>
          </div>

          {/* WIDE IMAGE */}
          <div className="col-span-2 relative rounded-2xl overflow-hidden shadow-lg group">
            <FadeIn delay={0.3}>
              <Image
                src="/about/5.png"
                alt="Transport"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </FadeIn>
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-xl">

          <SlideInRight>
            <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
              About Us
            </p>
          </SlideInRight>

          <SlideIn direction="up" delay={0.1}>
            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              About Difference Construction
            </h2>
          </SlideIn>

          <SlideIn direction="up" delay={0.2}>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Difference Construction (MW) Ltd manufactures durable concrete
              blocks, interlocking pavers, and garden tiles used in residential,
              commercial and infrastructure projects across Malawi.
            </p>
          </SlideIn>

          <SlideIn direction="up" delay={0.3}>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our commitment to quality materials and reliable supply has made
              us a trusted partner for contractors, developers and construction
              companies nationwide.
            </p>
          </SlideIn>

          {/* ACHIEVEMENTS */}
          <SlideIn direction="up" delay={0.4}>
            <div className="mt-10 grid grid-cols-3 gap-8">

              <div className="flex flex-col items-center text-center">
                <Blocks className="text-green-600 mb-3" size={32} />
                <p className="text-2xl font-bold">{blocks}+</p>
                <p className="text-sm text-gray-500">Blocks Produced</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Building2 className="text-green-600 mb-3" size={32} />
                <p className="text-2xl font-bold">{projects}+</p>
                <p className="text-sm text-gray-500">Projects Completed</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <Truck className="text-green-600 mb-3" size={32} />
                <p className="text-2xl font-bold">Nationwide</p>
                <p className="text-sm text-gray-500">Supply Coverage</p>
              </div>

            </div>
          </SlideIn>

        </div>

      </div>

    </section>
  );
}