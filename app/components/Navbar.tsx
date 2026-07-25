"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-10">
        {/* Logo */}
        <a href="#" className="select-none">
          <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
            ADSWAY{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              DIGITAL
            </span>
          </h1>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-10 text-[15px] font-medium text-gray-600 lg:flex">
          <a href="#" className="transition hover:text-purple-600">
            Home
          </a>

          <a href="#services" className="transition hover:text-purple-600">
            Services
          </a>

          <a href="#portfolio" className="transition hover:text-purple-600">
            Portfolio
          </a>

          <a href="#about" className="transition hover:text-purple-600">
            About
          </a>

          <a href="#contact" className="transition hover:text-purple-600">
            Contact
          </a>
        </nav>

        {/* Desktop Button */}
        <a
          href="/contact"
          className="hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl lg:inline-flex"
        >
          Book Free Consultation
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-gray-200 p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5">
          <a
            href="#"
            className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>

          <a
            href="#services"
            className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>

          <a
            href="#portfolio"
            className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </a>

          <a
            href="#about"
            className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>

          <a
            href="#contact"
            className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>

          <a
            href="/contact"
            className="mt-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-center font-semibold text-white"
            onClick={() => setIsOpen(false)}
          >
            Book Free Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}