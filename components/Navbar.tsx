"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 text-white">

      {/* TOP BAR */}
      <div className="bg-black/40 backdrop-blur-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2 text-sm">

          <div className="flex gap-6">
            <span>📞 +265 999 000 000</span>
            <span>✉ info@differenceconstruction.mw</span>
          </div>

          <div>
            <span>⏰ Mon - Fri : 08:00 - 17:00</span>
          </div>

        </div>
      </div>

      {/* MAIN NAV */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Difference Construction"
            width={150}
            height={70}
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-10 font-medium uppercase text-sm tracking-wide">

          <Link href="/" className="hover:text-green-400 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-green-400 transition">
            About
          </Link>

          <Link href="/services" className="hover:text-green-400 transition">
            Products
          </Link>

          <Link href="/blog" className="hover:text-green-400 transition">
            Blog
          </Link>

          <Link href="/contact" className="hover:text-green-400 transition">
            Contact
          </Link>

        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg flex flex-col items-center gap-8 py-10 text-lg uppercase">

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

    </header>
  );
}