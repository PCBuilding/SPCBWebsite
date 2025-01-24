import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-50 mt-28 flex justify-end ">
      <div className="grid min-h-[420px] w-full max-w-[1600px]  grid-cols-1 lg:grid-cols-3 items-center">
        <div className="flex flex-col gap-6 text-white pl-10">
          <figure>
            <Image src={"/navbar/logo.png"} width={160} height={160} alt="" className="w-24 h-24 sm:w-40 sm:h-40"/>
          </figure>
          <p className="text-2xl sm:text-4xl font-semibold">Proudly Building PCs.</p>
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
          <p className="text-sm opacity-80">&copy; {new Date().getFullYear()} The Society of PC Building. All
          rights reserved.</p>
        </div>
        <div className="footer-clip-path lg:col-span-2 flex h-full flex-col items-center justify-center gap-1 bg-white pl-12 sm:pl-0 xl:pl-20 pt-20 min-h-80">
          <p className="max-w-[417px] text-2xl sm:text-4xl font-bold ">
            Gator User Design{" "}
            <Image
              src={"/iconography/gud-color.png"}
              width={80}
              height={80}
              alt=""
              className="ml-2 inline w-14 h-14 sm:h-20 sm:w-20"
            />{" "}
          </p>
          <div className="flex w-full max-w-[416px] justify-center sm:justify-start items-start">
            <Link
              href="https://www.instagram.com/gatoruserdesign/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xl sm:text-2xl  hover:underline text-black"
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
