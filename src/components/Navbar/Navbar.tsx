"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Nav() {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const [isMobileAdminNavOpen, setIsMobileAdminNavOpen] =
    useState<boolean>(false);
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/dashboard");

  if (isAdminRoute) {
    return (
      <>
        <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-10">
          <a href="/">
            <Image
              src={"/iconography/spcb-color.png"}
              height={40}
              width={40}
              alt=""
              className="hidden lg:block"
            />
          </a>
          <div className="hidden gap-6 md:flex">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/events"}>Events</Link>
            <Link href={"/projects"}>Projects</Link>
          </div>
          <button className="text-2xl md:hidden" onClick={() => setIsMobileAdminNavOpen(true)}>
            <FaBars />
          </button>
        </div>
        {isMobileAdminNavOpen && (
          <div className="fixed inset-0 z-50 bg-white">
            <div className="relative h-full w-full flex flex-col items-center justify-center text-4xl gap-10">
              <button onClick={() => setIsMobileAdminNavOpen(false)} className="text-4xl absolute top-4 right-4"><FaXmark/></button>
             
              <Link href={"/"} onClick={() => setIsMobileAdminNavOpen(false)}>Home</Link>
              <Link href={"/projects"} onClick={() => setIsMobileAdminNavOpen(false)}>Projects</Link>
              <Link href={"/events"} onClick={() => setIsMobileAdminNavOpen(false)}>Events</Link>
              <Link href={"/about"} onClick={() => setIsMobileAdminNavOpen(false)}>About</Link>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <nav className="fixed left-1/2 z-30 w-full max-w-5xl -translate-x-1/2 px-0 text-[#f1f1f1] md:top-4 md:px-4">
      <div className="border-b border-[#B0B8FF] border-opacity-30 bg-[#03080e] bg-opacity-40 py-3 backdrop-blur-lg md:rounded-full md:border md:py-1.5">
        <div className="flex justify-between px-6 md:pl-6 md:pr-4">
          <figure>
            <Link href="/">
              <img
                src="/iconography/spcb-color.png"
                alt=""
                className="w-11 md:h-10 md:w-10"
              />
            </Link>
          </figure>
          <div className="hidden items-center gap-6 text-sm md:flex">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
            <Link href="/projects">Projects</Link>
            <a
              href="https://discord.gg/CmqKbnBDBG"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#B0B8FF] px-4 py-2 text-black"
            >
              SPCB Discord
            </a>
          </div>
          <button
            className="flex cursor-pointer items-center text-2xl md:hidden"
            onClick={() => setShowMobileNav((prev) => !prev)}
            aria-label={showMobileNav ? "Close menu" : "Open menu"}
          >
            {showMobileNav ? <FaXmark /> : <FaBars />}
          </button>
        </div>

        <AnimatePresence>
          {showMobileNav && (
            <motion.div
              className="mt-3 flex flex-col overflow-hidden text-lg md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link
                href="/"
                onClick={() => setShowMobileNav(false)}
                className="border-t border-gray-800 px-6 py-3"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setShowMobileNav(false)}
                className="border-t border-gray-800 px-6 py-3"
              >
                About
              </Link>

              <Link
                href="/events"
                onClick={() => setShowMobileNav(false)}
                className="border-t border-gray-800 px-6 py-3"
              >
                Events
              </Link>

              <Link
                href="/projects"
                onClick={() => setShowMobileNav(false)}
                className="border-t border-gray-800 px-6 py-3"
              >
                Projects
              </Link>

              <a
                href="https://discord.gg/CmqKbnBDBG"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowMobileNav(false)}
                className="border-t border-gray-800 px-6 pt-3"
              >
                SPCB Discord
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
