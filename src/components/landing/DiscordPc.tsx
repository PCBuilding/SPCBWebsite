import Image from "next/image";

export default function DiscordPC() {
  return (
    <div className="overflow-hidden py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <h3 className="text-balance text-center text-3xl font-medium tracking-tight sm:text-[40px]">
          Stay Connected with SPCB on Discord!
        </h3>
        <p className="text-balance pt-4 text-center text-dull">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, alias?
          <br className="hidden sm:inline" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum!
        </p>
        <div className="pt-20 sm:pt-28">
          <Mac />
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
      <div className="border-gray-900 bg-primary-900  z-10 mx-auto rounded-xl border overflow-hidden">
        <div className="h-[450px] w-[850px] p-2.5 overflow-hidden relative bg-black">
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
    <div className="bg-gray-950 text-primary-300 flex h-5 w-full items-center justify-between px-4 text-[7px] font-thin tracking-wide">
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
        <img src="/landing/discord-app.png" alt="" className="pb-4"/>
    </div>
  );
};
