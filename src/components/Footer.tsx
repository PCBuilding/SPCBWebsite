import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-48 min-h-96 border-t border-gray-900 text-white">
      <Image
        src="/hero/hero-background.png"
        alt="Lights Background"
        fill
        priority
        sizes="100vw"
        quality={100} // Increase image quality (0-100)
        className="absolute left-0 right-0 top-0 z-0 object-cover"
      />
      <div className="absolute inset-0 z-10 bg-[#080d14ec] backdrop-blur-md" />
      <div className="relative z-20 mx-auto flex max-w-6xl px-6 pb-12 pt-16 sm:px-10">
        <div className="max-w-[250px]">
          <div>
            <Image src={"/navbar/logo.png"} width={100} height={100} alt="" />
            <p className="pt-4 text-2xl font-medium">Proudly Building PCs.</p>
            <p className="border-b border-gray-800 py-2 text-sm text-dull">
              © 2025 The Society of PC Building. <br />
              All rights reserved.
            </p>
          </div>
          <div className="mt-4">
            <p className="text-sm">
              Made in Collaboration with Gator User Design.{" "}
              <a
                href="https://www.instagram.com/gatoruserdesign/"
                target="_blank"
                className="hover:underline"
              >
                Check us out <ArrowUpRight size={16} className="inline" />
              </a>
            </p>
            <div className="w-14">
              <a
                href="https://www.instagram.com/gatoruserdesign/"
                target="_blank"
              >
                <Image
                  src={"/iconography/gud-color.png"}
                  width={56}
                  height={56}
                  alt=""
                  className="mt-4 rounded-full border border-gray-700"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 items-start gap-12 pl-32 pt-[116px]">
          <div className="grid gap-4">
            <p className="text-dull">Socials</p>
            <a target="_blank" href="https://discord.com/invite/jfq9phWqTF">
              Discord
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/the-society-of-pc-building"
            >
              LinkedIn
            </a>
            <a target="_blank" href="https://www.instagram.com/pcbuildinguf/">
              Instagram
            </a>
            <a target="_blank" href="https://linktr.ee/pcbuildinguf">
              LinkTree
            </a>
          </div>
          <div className="grid gap-4">
            <p className="text-dull">Pages</p>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
            <Link href="/projects">Projects</Link>
          </div>
          <div className="grid gap-4">
            <p className="text-dull">Other</p>
            <a href="https://github.com/PCBuilding/SPCBWebsite" target="_blank">
              Source Code
            </a>
            <a
              href="https://www.instagram.com/gatoruserdesign/"
              target="_blank"
            >
              Gator User Design
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
