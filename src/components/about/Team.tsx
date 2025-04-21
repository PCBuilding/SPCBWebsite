// src/components/about/Team.tsx - Main team component with team data
import { TeamSection } from "./TeamSection";
import { TeamMemberProps } from "./TeamCard";

// Define team data structure - easy to update with new members or sections
type TeamData = {
  [key: string]: TeamMemberProps[];
};

// Team data populated from the images you shared
const teamData: TeamData = {
  "Executive Team": [
    {
      name: "Megan Mendez",
      role: "President",
      imageSrc: "/about-images/people/megan.jpg",
      linkedinUrl: "https://www.linkedin.com/in/megan-mendez-870826257/",
    },
    {
      name: "Ethan Ruddell",
      role: "Vice-President",
      imageSrc: "/about-images/people/ethan.png",
      linkedinUrl: "https://www.linkedin.com/in/ethan-ruddell/",
    },
    {
      name: "Nathan Kim",
      role: "Secretary",
      imageSrc: "/about-images/people/matthew-li.jpg",
    },
    {
      name: "Angela Ung",
      role: "Member Involvement",
      imageSrc: "/about-images/people/angela.png",
      linkedinUrl: "https://www.linkedin.com/in/angelaunguf/",
    },
    {
      name: "Caity Beasley",
      role: "Event Coordinator",
      imageSrc: "/about-images/people/caity.png",
    },
    {
      name: "William Zhu",
      role: "Build Director",
      imageSrc: "/about-images/people/william.png",
      linkedinUrl: "https://www.linkedin.com/in/william-zhu-uf/",
    },
    {
      name: "Taran",
      role: "Build Director",
      imageSrc: "/about-images/people/taran.png",
    },
  ],
  TechTeam: [
    {
      name: "Claudio Sciotto",
      role: "Lead Developer",
      imageSrc: "/about-images/people/claudio.png",
      linkedinUrl: "https://www.linkedin.com/in/claudiosciotto/",
    },
    {
      name: "Cole Morgan",
      role: "Developer",
      imageSrc: "/about-images/people/cole.png",
      linkedinUrl: "https://www.linkedin.com/in/cole-morgan-/",
    },
    {
      name: "Wilbert Hernandez",
      role: "Product Manager",
      imageSrc: "/about-images/people/wilbert.png",
      linkedinUrl: "https://www.linkedin.com/in/hernandez-wilbert/",
    },
  ],
  UIUXTeam: [
    {
      name: "Colin Mendoza",
      role: "UI/UX Product Manager",
      imageSrc: "/about-images/people/colin.png",
      linkedinUrl: "https://www.linkedin.com/in/colin-mendoza/",
    },
    {
      name: "Dayanita Kumar",
      role: "UI/UX Designer",
      imageSrc: "/about-images/people/dayanita.png",
      linkedinUrl: "https://www.linkedin.com/in/dayanita-kumar/",
    },
    {
      name: "Hana Checketts",
      role: "UI/UX Designer",
      imageSrc: "/about-images/people/hana.png",
      linkedinUrl: "https://www.linkedin.com/in/hanachecketts/",
    },
    {
      name: "Ankita Narayan",
      role: "UI/UX Designer",
      imageSrc: "/about-images/people/ankita.png",
      linkedinUrl: "https://www.linkedin.com/in/narayanankita/",
    },
    {
      name: "Lena Nguyen",
      role: "UI/UX Designer",
      imageSrc: "/about-images/people/lena.png",
      linkedinUrl: "https://www.linkedin.com/in/lena-t-nguyen/",
    },
  ],
  // You can easily add more sections as needed
  // "Web Team": [],
  // "Build Team": [],
};

export default function Team() {
  return (
    <div className="sm:pt-6">
      <div className="grad h-32" />
      <div className="px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-7xl text-white">
          <h2 className="text-2xl sm:text-4xl">Meet Our Team</h2>
          <p className="text-balance pt-4 opacity-80 sm:pt-6 sm:text-lg">
            Behind the Society of PC Building is a passionate team of officers
            who work hard to bring our community together, organize events, and
            foster a love for PC building.
          </p>

          {/* Render team sections dynamically from data */}
          {Object.entries(teamData).map(([sectionTitle, members]) => (
            <TeamSection
              key={sectionTitle}
              title={sectionTitle}
              members={members}
            />
          ))}
        </div>
      </div>
      <div className="grad h-32 -scale-y-[1]" />
    </div>
  );
}
