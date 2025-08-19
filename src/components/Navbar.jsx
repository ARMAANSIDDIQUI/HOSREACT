import React, { useState } from "react";
import { FaGlobe } from "react-icons/fa";

import logo from "../assets/logo.jpg";
const Navbar = () => {
  // `useState` creates a state variable `isOpen` to track if the mobile menu is open or closed.
  const [isOpen, setIsOpen] = useState(false);

  // This function toggles the `isOpen` state between `true` and `false`.
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
        {/* The `hidden md:flex` classes hide this menu on mobile and display it as a flex container on medium screens and up. */}
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
          {/* These spans create the hamburger icon. The classes conditionally change based on the `isOpen` state to create the animated "X" shape when clicked. */}
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
      {/* This section is conditionally rendered based on the `isOpen` state. It's only visible when `isOpen` is true. */}
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