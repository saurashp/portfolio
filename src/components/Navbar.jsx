import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-slate-900 backdrop-blur-sm shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-indigo-600 font-bold text-3xl sm:text-4xl">
          Saurash Preet
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-white text-lg font-semibold">
          <a
            href="#home"
            className="hover:text-indigo-500 transition duration-300"
          >
            Home
          </a>
          <a
            href="#skills"
            className="hover:text-indigo-500 transition duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-indigo-500 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-indigo-500 transition duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Animated Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1.5 focus:outline-none group"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-7 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-7 h-0.5 bg-white transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-7 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu (Animated Fade) */}
      <div
        className={`md:hidden bg-slate-900 border-t border-gray-700 px-6 pb-4 text-center transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <a
          href="#home"
          className="block py-2 text-gray-100 hover:text-indigo-500 transition duration-300"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#skills"
          className="block py-2 text-gray-100 hover:text-indigo-500 transition duration-300"
          onClick={() => setMenuOpen(false)}
        >
          Skills
        </a>
        <a
          href="#projects"
          className="block py-2 text-gray-100 hover:text-indigo-500 transition duration-300"
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </a>
        <a
          href="#contact"
          className="block py-2 text-gray-100 hover:text-indigo-500 transition duration-300"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
