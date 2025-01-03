import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";


// TODO: Fix the navbar apperance when viewing admin dashboard

export default function Nav() {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  return (
    <nav className="fixed left-1/2 z-30 w-full max-w-5xl -translate-x-1/2 px-0 text-[#f1f1f1] md:top-4 md:px-4">
      <div className="border-b border-[#B0B8FF] border-opacity-30 bg-[#000] bg-opacity-40 py-3 backdrop-blur-lg md:rounded-full md:border md:py-1.5">
        <div className="flex justify-between px-6 md:pl-6 md:pr-4">
          <figure>
            <a href="/">
              <img
                src="/iconography/spcb-color.png"
                alt=""
                className="w-11 md:h-10 md:w-10"
              />
            </a>
          </figure>
          <div className="hidden items-center gap-6 text-sm md:flex">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/events"}>Events</Link>
            <Link href={"/projects"}>Projects</Link>
            <a
              href="https://discord.gg/CmqKbnBDBG"
              target="_blank"
              className="rounded-full bg-[#B0B8FF] px-4 py-2 text-black"
            >
              SPCB Discord
            </a>
          </div>
          <div
            className="flex cursor-pointer items-center text-2xl md:hidden"
            onClick={() => setShowMobileNav((prev) => !prev)}
          >
            {showMobileNav ? <FaXmark /> : <FaBars />}
          </div>
        </div>

        {/* Animate the mobile nav-links downward when clicked */}
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
                href={"/"}
                onClick={() => setShowMobileNav(false)}
                className="border-t border-gray-800 px-6 py-3"
              >
                Home
              </Link>

              <Link
                href={"/about"}
                onClick={() => setShowMobileNav(false)}
                className="border-t border-gray-800 px-6 py-3"
              >
                About
              </Link>

              <Link
                href={"/events"}
                onClick={() => setShowMobileNav(false)}
                className="border-t border-gray-800 px-6 py-3"
              >
                Events
              </Link>

              <Link
                href={"/projects"}
                onClick={() => setShowMobileNav(false)}
                className="border-t border-gray-800 px-6 py-3"
              >
                Projects
              </Link>

              <a
                href={"https://discord.gg/CmqKbnBDBG"}
                target="_blank"
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
