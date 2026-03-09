"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="Difference Construction"
            width={120}
            height={50}
          />
        </Link>

        <nav className="hidden md:flex gap-8 font-semibold text-sm uppercase">

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Products</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>

        </nav>

      </div>

    </header>
  );
}