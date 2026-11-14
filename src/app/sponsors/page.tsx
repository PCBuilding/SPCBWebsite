"use client";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

const sponsors = [
  { name: "Company Name", description: "Short blurb here" },
  { name: "Company 2", description: "Short blurb here" },
  { name: "Company 3", description: "Short blurb here" },
  { name: "Company 4", description: "Short blurb here" },
  { name: "Company 5", description: "Short blurb here" },
  { name: "Company 6", description: "Short blurb here" },
];

export default function Sponsors() {

  const [selected, setSelected] = useState<(typeof sponsors)[number] | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <>
      <section className="relative min-h-screen bg-[#080d14]">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-28 text-white sm:pt-36 md:px-10">
          <h1 className="text-3xl sm:text-4xl font-semibold">Sponsors</h1>
          <h2 className="max-w-2xl sm:text-balance pt-4 text-xl sm:text-2xl text-gray-200">
            Partner with UF&apos;s{" "}
            <span className="text-blue">PC building community</span> and reach{" "}
            <span className="text-blue">future engineers.</span>
          </h2>
        </div>

        {/* Spinning sponsor row */}
        <div className="group mt-24 flex overflow-hidden py-20 text-white">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex min-w-full shrink-0 animate-marquee items-center justify-around group-hover:[animation-play-state:paused]"
              aria-hidden={copy === 1}
            >
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  onClick={() => setSelected(sponsor)}
                  className="cursor-pointer group/card relative mx-3 flex w-56 shrink-0 flex-col items-center gap-3 rounded-lg border border-gray-700 bg-gray-900 p-6 text-center transition-all duration-300 hover:z-10 hover:w-80 hover:scale-110 hover:border-blue"
                >
                  <div className="flex h-24 w-full items-center justify-center rounded-md bg-gray-800 text-gray-500">
                    Company Logo
                  </div>
                  <h3 className="text-xl font-semibold">{sponsor.name}</h3>
                  <p className="max-h-0 overflow-hidden text-gray-300 opacity-0 transition-all duration-300 group-hover/card:max-h-40 group-hover/card:opacity-100">
                    {sponsor.description}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative flex h-full max-h-[90vh] w-full max-w-5xl animate-pop flex-col items-center gap-6 overflow-y-auto rounded-xl border border-blue bg-gray-900 p-10 text-center text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 rounded-md px-3 py-1 text-2xl text-gray-400 hover:bg-gray-800 hover:text-white"
              aria-label="Close"
            >
              ×
            </button>
            <div className="flex h-48 w-96 max-w-full items-center justify-center rounded-lg bg-gray-800 text-gray-500">
              Company Logo
            </div>
            <h2 className="text-4xl font-semibold">{selected.name}</h2>
            <p className="max-w-2xl text-lg text-gray-300">{selected.description}</p>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}