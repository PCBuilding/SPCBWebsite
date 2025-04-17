import { Plus, PlusCircle, Send } from "lucide-react";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";

export default function DiscordPC() {
  return (
    <div className="overflow-hidden px-6 py-28 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h3 className="text-balance text-center text-3xl font-medium tracking-tight sm:text-[40px]">
          Stay Connected with SPCB on Discord!
        </h3>
        <p className="text-balance pt-4 text-center text-lg text-dull">
          Discord is how we communicate with each other and discuss everything
          related to PC building.
        </p>
        <div className="pt-20 sm:pt-24">
          <Screen />
        </div>
        <div className="group mt-24 flex justify-center">
          <div className="relative w-[850px] overflow-hidden rounded-md border border-gray-800">
            <img
              src="/hero/hero-background.png"
              alt=""
              className="absolute inset-0 z-0 -translate-y-12 transition-all duration-500 group-hover:-translate-y-20"
            />
            <div className="relative z-10 flex min-h-[200px] flex-col items-center justify-center gap-4 bg-[#080d14bb] px-6 py-4 backdrop-blur-md sm:px-10 md:flex-row md:justify-between">
              <p className="text-center text-xl font-medium sm:text-2xl md:text-start md:text-3xl">
                Join the Society of <br className="hidden md:inline" />
                PC Building Discord!
              </p>
              <a
                href="https://discord.gg/CmqKbnBDBG"
                target="_blank"
                className="cta-btn flex items-center gap-2 rounded-md bg-blue px-12 py-2.5 font-medium text-black transition-all duration-300 md:text-lg"
              >
                Join Now <FaDiscord />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const messages = [
  {
    user: "Cole",
    content: "Welcome to the SPCB Discord! 👋 Introduce yourself!",
    time: "10:01 AM",
    color: "#1f2937",
  },
  {
    user: "Claudio",
    content: "Hey everyone, I’m Claudio. Just built my first PC last month 🔥",
    time: "10:03 AM",
    color: "#111827",
  },
  {
    user: "Angela",
    content:
      "Reminder: Our build showcase event is this Friday @ 6PM in CSE-101!",
    time: "10:10 AM",
    color: "#334155",
  },
  {
    user: "Wilbert",
    content: "Does anyone want to help me build my computer?",
    time: "10:15 AM",
    color: "#1e293b",
  },
];

const Screen: React.FC = () => {
  return (
    <div className="relative h-[600px] sm:h-[700px] w-[1152px] rounded-2xl border border-gray-800 p-2 -translate-x-12 sm:translate-x-0">
      <div className="relative z-10 flex h-full w-full items-center lg:justify-center overflow-hidden rounded-lg border border-gray-800 px-6 sm:px-20">
        <img
          src="/hero/hero-background.png"
          alt=""
          className="absolute inset-0"
        />
        <div className="relative z-20 flex sm:h-[65%] sm:w-4/5 overflow-hidden rounded-xl border border-gray-800 bg-[rgba(0,0,0,0.85)] p-4 backdrop-blur-lg">
          <div className="min-w-[53px] border-r border-gray-800 pr-4">
            <Image
              src={"/iconography/spcb-color.png"}
              height={36}
              width={36}
              unoptimized
              quality={100}
              alt=""
            />
          </div>
          <div className="hidden sm:block min-w-[237px] border-r border-gray-800 px-4">
            <p>The Society of PC Building</p>
            <div className="mt-4 space-y-3 text-sm text-gray-300">
              {/* SPCB Main section */}
              <div className="grid gap-1.5">
                <p className="mb-1 text-xs font-semibold uppercase text-gray-500">
                  SPCB Main
                </p>
                <div className="flex cursor-pointer items-center gap-2 rounded pl-2 hover:bg-gray-700/40">
                  <span>📢</span>
                  <p>announcements</p>
                </div>
                <div className="flex cursor-pointer items-center gap-2 rounded pl-2 hover:bg-gray-700/40">
                  <span>✅</span>
                  <p>rules-and-info</p>
                </div>
                <div className="flex cursor-pointer items-center gap-2 rounded pl-2 hover:bg-gray-700/40">
                  <span>👋</span>
                  <p>welcome</p>
                </div>
              </div>

              {/* General Club Affairs section */}
              <div className="grid gap-1.5">
                <p className="mb-1 mt-4 text-xs font-semibold uppercase text-gray-500">
                  General Club Affairs
                </p>
                <div className="flex cursor-pointer items-center gap-2 rounded bg-gray-700/60 pl-2 font-semibold hover:bg-gray-700/40">
                  <span>💬</span>
                  <p>general</p>
                  <span className="ml-auto text-gray-400">👥</span>
                </div>
                <div className="flex cursor-pointer items-center gap-2 rounded pl-2 hover:bg-gray-700/40">
                  <span>🧑‍🤝‍🧑</span>
                  <p>introductions</p>
                </div>
                <div className="flex cursor-pointer items-center gap-2 rounded pl-2 hover:bg-gray-700/40">
                  <span>🗣️</span>
                  <p>event-suggestions</p>
                </div>
                <div className="flex cursor-pointer items-center gap-2 rounded pl-2 hover:bg-gray-700/40">
                  <span>📷</span>
                  <p>picture-gallery</p>
                </div>
                <div className="flex cursor-pointer items-center gap-2 rounded pl-2 hover:bg-gray-700/40">
                  <span>📄</span>
                  <p>slides-and-recordings</p>
                </div>
                <div className="flex cursor-pointer items-center gap-2 rounded pl-2 hover:bg-gray-700/40">
                  <span>🧟</span>
                  <p>swamp-monster</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[340px] sm:max-w-full flex w-full flex-col justify-between px-4">
            <div className="text-dull">
              <p>#general</p>
              {/* Sample messages */}
              <div className="mt-4 flex max-h-[290px] flex-col gap-2 overflow-y-hidden pr-2">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-sm text-white pb-1"
                  >
                    <div
                      style={{ backgroundColor: msg.color }}
                      className="min-h-8 min-w-8 rounded-full"
                    />
                    <div>
                      <p className="mb-0.5">
                        <span className="font-semibold text-white">
                          {msg.user}
                        </span>{" "}
                        <span className="text-xs text-gray-400">
                          {" "}
                          {msg.time}
                        </span>
                      </p>
                      <p className="text-gray-200 leading-normal">{msg.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 w-full rounded-sm bg-gray-900 bg-opacity-80 px-4 py-2 backdrop-blur-md">
              <div className="flex items-center justify-between text-dull">
                <p className="flex items-center gap-2 text-sm">
                  <span className="rounded-full bg-dull p-0.5 text-black">
                    <Plus size={12} />
                  </span>
                  Message #general
                </p>
                <Send size={15} className="opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-10 bg-white opacity-30"
        style={{ filter: "blur(40px)" }}
      ></div>
    </div>
  );
};
