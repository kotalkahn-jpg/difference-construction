import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="relative h-[60vh] w-full">

      {/* HERO IMAGE */}
      <Image
        src="/about/product.jpg"
        alt="Difference Construction"
        fill
        priority
        className="object-cover"
        
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* NAVBAR */}
      <div className="absolute top-8 left-0 w-full flex justify-center z-20">

        <div className="bg-white shadow-lg rounded-md flex items-center justify-center px-10 py-2 gap-10 w-[900px]">

          <Link href="/" className="hover:text-green-600 font-semibold uppercase text-sm text-gray-700">
            Home
          </Link>

          <Link href="/about" className="hover:text-green-600 font-semibold uppercase text-sm text-gray-700">
            About
          </Link>

          <Link href="/services" className="hover:text-green-600 font-semibold uppercase text-sm text-gray-700">
            Products
          </Link>

          <Link href="/blog" className="hover:text-green-600 font-semibold uppercase text-sm text-gray-700">
            Blog
          </Link>

          <Link href="/contact" className="hover:text-green-600 font-semibold uppercase text-sm text-gray-700">
            Contact
          </Link>

        </div>
      </div>

      {/* PAGE TITLE */}
<div className="absolute inset-0 flex items-center justify-center text-white z-10 pointer-events-none">
  <h1 className="text-4xl md:text-5xl font-bold">
    Our Products
  </h1>
</div>


{/* HERO BUTTONS */}
<div className="absolute bottom-12 left-0 w-full flex justify-center gap-6 z-20">

  <a
    href="#products"
    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold transition"
  >
    View Products
  </a>

  <a
    href="#quote"
    className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
  >
    Get Quote
  </a>

</div>

    </header>
  );
}