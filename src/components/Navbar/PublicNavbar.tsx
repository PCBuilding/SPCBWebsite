"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Add Michroma font */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Michroma&display=swap");
      `}</style>

      <nav className="fixed left-0 right-0 top-0 z-50 bg-black">
        {/* Main navbar */}
        <div className="mx-auto px-12">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/navbar/logo.png"
                  alt="SPCB Logo"
                  width={50}
                  height={50}
                  className="h-12 w-12"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden space-x-12 lg:flex">
              <Link
                href="/projects"
                className="font-['Michroma'] text-[20px] text-white transition-colors hover:text-orange-300"
              >
                Projects
              </Link>
              <Link
                href="/events"
                className="font-['Michroma'] text-[20px] text-white transition-colors hover:text-orange-300"
              >
                Events
              </Link>
              <Link
                href="/about"
                className="font-['Michroma'] text-[20px] text-white transition-colors hover:text-orange-300"
              >
                About
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center rounded-md p-2 text-white transition-colors hover:text-gray-300"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6 transition-transform duration-200"
                  style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0)" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`transform overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"} `}
        >
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/about"
              className="block transform py-2 font-['Michroma'] text-[20px] text-white transition-all duration-200 hover:pl-2 hover:text-gray-300"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="block transform py-2 font-['Michroma'] text-[20px] text-white transition-all duration-200 hover:pl-2 hover:text-gray-300"
            >
              Projects
            </Link>
            <Link
              href="/events"
              className="block transform py-2 font-['Michroma'] text-[20px] text-white transition-all duration-200 hover:pl-2 hover:text-gray-300"
            >
              Events
            </Link>
          </div>
        </div>

        {/* Red and blue lines at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-[4px] w-full bg-orange-600"></div>
        </div>
      </nav>
    </>
  );
}
