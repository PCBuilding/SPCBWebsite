import Image from "next/image";
import { FaDiscord } from "react-icons/fa";

export default function DiscordPC() {
  return (
    <div className="overflow-hidden py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <h3 className="text-balance text-center text-3xl font-medium tracking-tight sm:text-[40px]">
          Stay Connected with SPCB on Discord!
        </h3>
        <p className="text-balance pt-5 text-center text-dull">
          Discord is how we communicate with each other and discuss everything
          related to PC building.
          <br className="hidden sm:inline" />
          It’s our main channel for sharing builds, troubleshooting, and
          exchanging ideas.
        </p>
        <div className="pt-20 sm:pt-24">
          <Mac />
          <div className="group flex justify-center pt-24">
            <div className="relative w-[850px] overflow-hidden rounded-md border border-gray-800">
              <img
                src="/hero/hero-background.png"
                alt=""
                className="absolute inset-0 z-0 -translate-y-12 transition-all duration-500 group-hover:-translate-y-20"
              />
              <div className="relative z-10 flex flex-col md:flex-row min-h-[200px] items-center justify-center md:justify-between bg-[#080d14bb] px-6 sm:px-10 py-4 backdrop-blur-md gap-4">
                <p className="text-xl sm:text-2xl md:text-3xl font-medium text-center md:text-start">
                  Join the Society of <br  className="hidden md:inline"/>
                  PC Building Discord!
                </p>
                <a
                  href="https://discord.gg/CmqKbnBDBG"
                  target="_blank"
                  className="cta-btn transition-all duration-300 flex items-center gap-2 rounded-md bg-blue px-12 py-2.5 md:text-lg font-medium text-black"
                >
                  Join Now <FaDiscord />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Mac: React.FC = () => {
  return (
    <div className="flex flex-col md:items-center">
      <div className="flex w-[800px] flex-col items-center">
        <Screen />
        <div className="pc-stand h-40 w-[260px]" />
        <div className="pc-base relative h-4 w-[260px]">
          <div className="bg-primary-700 absolute top-0 h-0.5 w-full"></div>
        </div>
      </div>
    </div>
  );
};

const Screen: React.FC = () => {
  return (
    <div className="relative">
      <div
        className="absolute bottom-2 left-9 right-9 z-0 hidden h-2 bg-blue sm:block"
        style={{ filter: "blur(20px)" }}
      />
      <div className="bg-primary-900 z-10 mx-auto overflow-hidden rounded-xl border border-gray-900">
        <div className="relative h-[450px] w-[850px] overflow-hidden bg-black p-2.5">
          <Image
            height={440}
            width={800}
            unoptimized
            src="/landing/discord-pc-bg.png"
            alt=""
            className="absolute bottom-2.5 z-0"
          />

          <div className="relative h-full w-full">
            <Taskbar />
            <ScreenMain />
          </div>
        </div>
      </div>
    </div>
  );
};

const Taskbar: React.FC = () => {
  function getFormattedDate(): string {
    const date = new Date();

    const year = date.getFullYear();

    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }
  return (
    <div className="text-primary-300 flex h-5 w-full items-center justify-between bg-gray-950 px-4 text-[7px] font-thin tracking-wide">
      <div className="flex gap-4 pt-px">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Window</span>
      </div>
      <div className="pt-px">
        <span>{getFormattedDate()}</span>
      </div>
    </div>
  );
};

const ScreenMain: React.FC = () => {
  return (
    <div className="flex h-full w-full items-center rounded-sm pl-10 backdrop-blur-sm md:justify-center md:pl-0">
      <img src="/landing/discord-app.png" alt="" className="pb-4" />
    </div>
  );
};
