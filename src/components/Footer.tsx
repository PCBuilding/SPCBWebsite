import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-20 mt-28 flex justify-end">
      <div className="grid min-h-[420px] w-full max-w-[1600px] grid-cols-1 items-center lg:grid-cols-3">
        <div className="flex flex-col gap-6 pl-10 text-white">
          <figure>
            <Image
              src={"/navbar/logo.png"}
              width={160}
              height={160}
              alt=""
              className="h-32 w-32 sm:h-48 sm:w-48"
            />
          </figure>
          <p className="text-2xl font-semibold sm:text-4xl">
            Proudly Building PCs.
          </p>
          <div className="flex gap-3 md:gap-4">
            <Link
              href="https://www.linkedin.com/company/the-society-of-pc-building"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Image
                src="/landing/linkedin.png"
                alt="LinkedIn"
                width={30}
                height={30}
                className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]"
              />
            </Link>
            <Link
              href="https://www.instagram.com/pcbuildinguf/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Image
                src="/landing/instagram.png"
                alt="Instagram"
                width={30}
                height={30}
                className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]"
              />
            </Link>
            <Link
              href="https://discord.com/invite/jfq9phWqTF"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Image
                src="/landing/discord.png"
                alt="Discord"
                width={30}
                height={30}
                className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]"
              />
            </Link>
            <Link
              href="https://linktr.ee/pcbuildinguf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <Image
                src="/landing/linktree.png"
                alt="Linktree"
                width={30}
                height={30}
                className="h-[30px] w-[30px] md:h-[40px] md:w-[40px]"
              />
            </Link>
          </div>
          <p className="text-sm opacity-80">
            &copy; {new Date().getFullYear()} The Society of PC Building. All
            rights reserved.
          </p>
        </div>
        <div className="footer-clip-path flex h-full min-h-80 flex-col items-center justify-center bg-white text-black px-16 sm:px-20 pt-20 lg:col-span-2">
          <p className="max-w-[417px] text-2xl font-bold sm:text-4xl flex flex-col-reverse sm:flex-row items-center gap-2">
            Gator User Design{" "}
            <Image
              src={"/iconography/gud-color.png"}
              width={80}
              height={80}
              alt=""
              className="h-14 w-14 sm:h-20 sm:w-20"
            />{" "}
          </p>
          <div className="flex w-full max-w-[416px] items-start justify-center sm:justify-start">
            <Link
              href="https://www.instagram.com/gatoruserdesign/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xl text-black hover:underline sm:text-2xl"
            >
              Check us out
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
