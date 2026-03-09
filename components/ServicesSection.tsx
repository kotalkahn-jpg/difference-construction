import { getProducts } from "@/lib/services";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideIn";

export default async function ServicesSection() {
  const products = await getProducts();

  return (
    <section id="products"  className="relative py-32 text-white overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 blur-sm"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <FadeIn>
        <div className="relative max-w-7xl mx-auto px-6">

          {/* SECTION HEADER */}
          <div className="text-center mb-16 max-w-2xl mx-auto -mt-16">

            <p className="text-sm uppercase tracking-widest text-green-400 font-semibold">
              Our Materials
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Construction Products
            </h2>

            <div className="w-16 h-[3px] bg-green-500 mx-auto mt-4 mb-6"></div>

            <p className="text-gray-200">
              We manufacture high-quality construction materials trusted by
              contractors and developers across Malawi.
            </p>

          </div>

          {/* PRODUCT GRID */}
          <div className="grid md:grid-cols-3 gap-10">

            {products.length === 0 ? (
              <p className="text-center col-span-3 text-gray-200">
                No products available.
              </p>
            ) : (
              products.map((product, index) => (
                <SlideUp key={product.id} delay={index * 0.2}>
                  <ServiceCard product={product} />
                </SlideUp>
              ))
            )}

          </div>

          {/* CTA */}
          <SlideUp delay={0.3}>
            <div className="mt-20 text-center">

              <p className="text-gray-200 mb-6">
                Need custom construction materials for your next project?
              </p>

              <Link
                href="/contact"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-md transition"
              >
                Request a Quote
              </Link>

            </div>
          </SlideUp>

        </div>
      </FadeIn>

    </section>
  );
}