"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-[80px] md:bg-[#111111]/20 flex items-center justify-between px-8 md:px-[100px] fixed top-0 left-0 z-50 md:backdrop-blur-sm">
      {/* Desktop menu */}
      <ul className="hidden md:flex flex-row gap-8 text-[#F9F9F9]">
        <li>
          <a href="#about" className="hover:text-[#ffba00] transition">
            Despre Noi
          </a>
        </li>
        <li>
          <a href="#servicii" className="hover:text-[#ffba00] transition">
            Servicii
          </a>
        </li>
        <li>
          <a href="#galerie" className="hover:text-[#ffba00] transition hidden">
            Galerie
          </a>
        </li>
      </ul>

      {/* Desktop CTA */}
      <div className="hidden md:block">
        <a
          href="#contact"
          className="bg-[#ffba00] px-8 py-1 rounded-md text-[#111] hover:bg-[#111] hover:text-[#ffba00] hover:shadow-[0_4px_15px_0_rgba(255,186,0,0.75)] transition duration-300 "
        >
          Contact
        </a>
      </div>

      {/* Mobile burger */}
      <button
        className="md:hidden flex flex-col gap-1.5 cursor-pointer z-60"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={`block h-0.5 w-6 bg-[#F9F9F9] rounded transform transition duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-[#F9F9F9] rounded transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-[#F9F9F9] rounded transform transition duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* Mobile menu */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-[#111111]/75 backdrop-blur-md flex flex-col justify-center items-center py-6 gap-6 md:hidden z-50
          transition-all duration-300 ease-in-out 
          ${
            isOpen
              ? "opacity-100 pointer-events-auto max-h-screen "
              : "opacity-0 pointer-events-none max-h-0 overflow-hidden"
          }
        `}
      >
        <a
          href="#about"
          className="text-[#F9F9F9] text-lg hover:text-[#ffba00] transition"
          onClick={() => setIsOpen(false)}
        >
          Despre Noi
        </a>
        <a
          href="#servicii"
          className="text-[#F9F9F9] text-lg hover:text-[#ffba00] transition"
          onClick={() => setIsOpen(false)}
        >
          Servicii
        </a>
        <a
          href="#galerie"
          className="text-[#F9F9F9] text-lg hover:text-[#ffba00] transition hidden"
          onClick={() => setIsOpen(false)}
        >
          Galerie
        </a>
        <a
          href="#contact"
          className="bg-[#ffba00] px-10 py-2 rounded-md text-[#111] hover:bg-[#e6ac00] transition"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
