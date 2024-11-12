"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  // State to manage dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu on click
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex flex-wrap items-center justify-between bg-gray-600 p-6">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        <Link href="/" className="text-2xl font-semibold tracking-tight">
          The Society of PC Building
        </Link>
      </div>

      {/* Hamburger menu button for small screens */}
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center rounded border border-teal-400 px-3 py-2 text-teal-200 hover:border-white hover:text-white"
        >
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Menu items - hidden by default on small screens, shown if toggled */}
      <div
        className={`block w-full lg:flex lg:w-auto lg:items-center ${isOpen ? "block" : "hidden"}`}
      >
        <div className="text-base lg:flex-grow">
          <Link
            href="/projects"
            className="mr-6 mt-4 block text-white hover:text-gray-300 lg:mt-0 lg:inline-block"
          >
            Projects
          </Link>
          <Link
            href="/events"
            className="mr-6 mt-4 block text-white hover:text-gray-300 lg:mt-0 lg:inline-block"
          >
            Events
          </Link>
          <Link
            href="/about"
            className="mt-4 block text-white hover:text-gray-300 lg:mt-0 lg:inline-block"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
