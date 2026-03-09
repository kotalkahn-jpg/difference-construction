"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative h-[80vh] w-full">

      {/* HERO IMAGE */}
      <Image
        src="/contact/login.png"
        alt="Contact Difference Construction"
        fill
        priority
        className="object-cover object-center"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* NAVBAR */}
      <div className="absolute top-8 left-0 w-full flex justify-center z-20">

        <div className="bg-white shadow-lg rounded-md flex items-center justify-between px-6 md:px-10 py-3 w-[95%] md:w-[900px]">

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-10">

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

            <Link href="/contact" className="text-green-600 font-semibold uppercase text-sm">
              Contact
            </Link>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[95%] bg-white rounded-md shadow-xl flex flex-col items-center gap-6 py-8 uppercase text-sm font-semibold text-gray-700 z-30 md:hidden">

          <Link onClick={() => setMenuOpen(false)} href="/">
            Home
          </Link>

          <Link onClick={() => setMenuOpen(false)} href="/about">
            About
          </Link>

          <Link onClick={() => setMenuOpen(false)} href="/services">
            Products
          </Link>

          <Link onClick={() => setMenuOpen(false)} href="/blog">
            Blog
          </Link>

          <Link onClick={() => setMenuOpen(false)} href="/contact">
            Contact
          </Link>

        </div>
      )}

      {/* HERO CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 text-center px-6">

        <h1 className="text-4xl md:text-5xl font-bold">
          Contact Our Team
        </h1>

        <p className="mt-4 max-w-2xl text-gray-200">
          Have questions about our construction materials or need a quotation?
          Our team is ready to assist with your project requirements.
        </p>

      </div>

    </header>
  );
}