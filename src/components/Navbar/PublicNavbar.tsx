import Link from "next/link";
import { FaBars } from "react-icons/fa";

export default function Nav() {
  return (
    <nav className="fixed left-1/2 z-30 flex w-full max-w-5xl -translate-x-1/2 justify-between border-b border-[#B0B8FF] border-opacity-30 bg-[#000] bg-opacity-30 px-8 py-3 text-[#f1f1f1] backdrop-blur-lg md:top-4 md:rounded-full md:border md:py-1.5 md:pl-6 md:pr-4">
      <figure>
        <img
          src="/iconography/spcb-color.png"
          alt=""
          className="w-11 md:h-10 md:w-10"
        />
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
      <div className="flex items-center text-2xl md:hidden">
        <FaBars />
      </div>
    </nav>
  );
}
