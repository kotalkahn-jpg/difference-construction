import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex items-center">

      {/* overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-white">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-2xl">
          Building Malawi With <span className="text-green-400">Quality Materials</span>
        </h1>

        <p className="mt-6 text-lg max-w-xl text-gray-200">
          Difference Construction Ltd produces durable bricks, interlocking
          pavers and garden tiles trusted by contractors and developers
          across Malawi.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap">

          <Link href="/services">
            <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-md font-semibold transition">
              View Products
            </button>
          </Link>

          <Link href="/contact">
            <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-md transition">
              Contact Us
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
}