import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Initiatives", path: "/initiatives" },
  { name: "Impact", path: "/impact" },
  { name: "Team", path: "/team" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-2xl text-green-600"
        >
          {/* Logo Placeholder */}
          <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
            🌿
          </span>
          Girls in Tech & Green
        </Link>
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-medium hover:text-green-600 transition-colors ${
                  isActive ? "text-green-600" : "text-gray-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <button
          className="md:hidden flex items-center text-green-600 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `block py-2 font-medium hover:text-green-600 transition-colors ${
                  isActive ? "text-green-600" : "text-gray-700"
                }`
              }
              onClick={() => setOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
