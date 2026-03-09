"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="text-white text-2xl"
      >
        ☰
      </button>

      {open && (
        <div className="absolute top-20 left-0 w-full bg-black/95 flex flex-col items-center gap-6 py-10 text-lg uppercase">

          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Products</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>

        </div>
      )}
    </div>
  );
}