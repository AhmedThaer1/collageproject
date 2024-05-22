"use client";

import { useState } from "react";
import Link from "next/link";

const NavLinks = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Services", url: "/services" },
  { title: "Contact", url: "/contact" },
];

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">JACEAS</h1>
          </div>
          <div className="hidden space-x-4 md:flex">
            <Link href="/" className="rounded-md px-3 py-2 hover:bg-blue-700">
              Home
            </Link>
            <Link
              href="/about"
              className="rounded-md px-3 py-2 hover:bg-blue-700"
            >
              About
            </Link>
            <Link
              href="/services"
              className="rounded-md px-3 py-2 hover:bg-blue-700"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="rounded-md px-3 py-2 hover:bg-blue-700"
            >
              Contact
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="bg-blue-700 md:hidden">
          <Link href="/" className="block px-4 py-2 text-sm">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 text-sm">
            About
          </Link>
          <Link href="/services" className="block px-4 py-2 text-sm">
            Services
          </Link>
          <Link href="/contact" className="block px-4 py-2 text-sm">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default TopNav;
