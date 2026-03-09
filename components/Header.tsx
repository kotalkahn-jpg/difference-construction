"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Facebook, Instagram, Twitter, Youtube, Menu, X } from "lucide-react";
import ProductCards from "@/components/ProductCards";
import SlideInLeft from "@/components/animations/SlideInLeft";
import FadeIn from "@/components/animations/FadeIn";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative h-[110vh] w-full">

      {/* HERO IMAGE */}
      <Image
        src="/hero.jpg"
        alt="Difference Construction"
        fill
        priority
        className="object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>


      {/* NAVBAR */}
      <div className="absolute top-8 left-0 w-full flex justify-center z-20">

        <div className="bg-white shadow-lg rounded-md flex items-center justify-between px-6 md:px-10 py-3 w-[95%] md:w-[900px]">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Difference Construction"
              width={120}
              height={50}
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-8 uppercase text-sm font-semibold text-gray-700">

            <Link href="/" className="hover:text-green-600 transition">
              Home
            </Link>

            <Link href="/about" className="hover:text-green-600 transition">
              About
            </Link>

            <Link href="/services" className="hover:text-green-600 transition">
              Products
            </Link>

            <Link href="/blog" className="hover:text-green-600 transition">
              Blog
            </Link>

            <Link href="/contact" className="hover:text-green-600 transition">
              Contact
            </Link>

          </div>

          {/* DESKTOP ICONS */}
          <div className="hidden md:flex items-center gap-5 text-gray-600">

            <Search size={18} className="hover:text-green-600 cursor-pointer" />
            <Twitter size={18} className="hover:text-green-600 cursor-pointer" />
            <Facebook size={18} className="hover:text-green-600 cursor-pointer" />
            <Instagram size={18} className="hover:text-green-600 cursor-pointer" />
            <Youtube size={18} className="hover:text-green-600 cursor-pointer" />

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
<div className="relative z-10 h-full flex items-center pt-32">
  <div className="max-w-7xl mx-auto px-6 text-white">

    <SlideInLeft>
      <h4 className="text-2xl md:text-4xl font-bold leading-tight max-w-2xl">
        Quality Bricks &
        <span className="text-green-400"> Construction Materials</span>
      </h4>
    </SlideInLeft>

    <SlideInLeft delay={0.2}>
      <p className="mt-6 text-lg max-w-xl text-gray-200">
        Difference Construction Ltd manufactures durable bricks,
        pavers and building materials trusted by contractors
        across Malawi.
      </p>
    </SlideInLeft>

    <FadeIn delay={0.4}>
      <div className="mt-8 flex gap-4">

        <Link href="/services">
          <button className="bg-green-600 hover:bg-green-700 px-7 py-3 rounded-md font-semibold transition">
            View Products
          </button>
        </Link>

        <Link href="/contact">
          <button className="border border-white px-7 py-3 rounded-md hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </Link>

      </div>
    </FadeIn>

  </div>
</div>

      <ProductCards />

    </header>
  );
}