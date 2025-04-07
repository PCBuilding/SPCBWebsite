//src > app > about > page.tsx
import Contact from "@/components/about/Contact";
import Team from "@/components/about/Team";
import GlowingLine from "@/components/decorations/GlowingLine";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <div className="flex items-center justify-center pt-32 text-[#eaeaea] sm:pt-48">
        <div className="">
          <GlowingLine
            xPoints={["3", "20"]}
            yPoints={["65", "65"]}
            color="#1E90FF"
            thickness={2}
            circleSize={6}
          />

          <GlowingLine
            xPoints={["-2", "30"]}
            yPoints={["70", "70"]}
            color="#1E90FF"
            thickness={2}
            circleSize={6}
          />
          <GlowingLine
            xPoints={["40", "56"]}
            yPoints={["25", "25"]}
            color="#1E90FF"
            thickness={2}
            circleSize={6}
            className="hidden md:block"
          />
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 md:grid-cols-2">
          <div className="space-y-4 text-left">
            <h1 className="text-3xl font-bold sm:text-4xl">
              About Us
            </h1>
            <p className="text-balance pt-1 text-lg leading-relaxed">
              The Society of PC Building helps students learn to build PCs,
              regardless of experience, through hands-on workshops and events,
              fostering knowledge and confidence among its members.
            </p>
          </div>

          <div className="about-bg relative flex justify-center rounded-md bg-black">
            <div className="-translate-x-6 -translate-y-6 overflow-hidden rounded-lg shadow-[0_0_15px_6px_rgba(255,255,255,0.3)] sm:-translate-x-10 sm:-translate-y-10">
              <Image
                src="/about-images/ethan.jpg"
                alt="Ethan holding the graphics card"
                width={600}
                height={358}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
