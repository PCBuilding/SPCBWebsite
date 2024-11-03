'use client';
import Link from "next/link";
import { useState } from 'react';

export default function PublicNavbar() {
  // State to manage dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu on click
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-600 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/" className="font-semibold text-2xl tracking-tight">The Society of PC Building</Link>
      </div>
      
      {/* Hamburger menu button for small screens */}
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Menu items - hidden by default on small screens, shown if toggled */}
      <div className={`w-full block lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
        <div className="text-base lg:flex-grow">
          <Link href="/projects" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-6">
            Projects
          </Link>
          <Link href="/events" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-6">
            Events
          </Link>
          <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
