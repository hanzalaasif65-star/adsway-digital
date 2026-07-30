"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center transition duration-300 hover:opacity-90"
        >
          <Image
            src="/logo.png"
            alt="Adsway Digital"
            width={840}
            height={240}
            priority
            className="h-20 w-auto md:h-25"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 text-[15px] font-medium text-gray-600 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition duration-300 hover:text-purple-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl lg:inline-flex"
        >
          Book Free Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-gray-200 p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[500px] py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-purple-50 hover:text-purple-600"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:opacity-90"
          >
            Book Free Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}