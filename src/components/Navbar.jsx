import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa";

import logo from "../assets/logo.jpg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#111620] text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
       <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="House of Specials Logo"
            className="h-10 w-14 rounded-2xl object-cover sm:h-16 sm:w-24"
          />

          <span className="text-lg font-semibold">House Of Specials</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-white font-semibold">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
          <a href="/archive" className="hover:text-gray-300">
            Archive
          </a>
          <a href="/services" className="hover:text-gray-300">
            Services
          </a>
          <a href="/careers" className="hover:text-gray-300">
            Careers
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#111620] px-6 pb-4 space-y-3 font-semibold text-white">
          <a href="/" className="block hover:text-gray-300" onClick={toggleMenu}>
            Home
          </a>
          <a href="/about" className="block hover:text-gray-300" onClick={toggleMenu}>
            About
          </a>
          <a href="/archive" className="block hover:text-gray-300" onClick={toggleMenu}>
            Archive
          </a>
          <a href="services" className="block hover:text-gray-300" onClick={toggleMenu}>
            Services
          </a>
          <a href="careers" className="block hover:text-gray-300" onClick={toggleMenu}>
            Careers
          </a>
          <a href="contact" className="block hover:text-gray-300" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
