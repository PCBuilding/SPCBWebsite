// src/components/about/TeamSection.tsx
import { TeamCard, TeamMemberProps } from "./TeamCard";

type TeamSectionProps = {
  title: string;
  members: TeamMemberProps[];
};

export const TeamSection: React.FC<TeamSectionProps> = ({ title, members }) => {
  return (
    <div className="mt-16 first:mt-8">
      <h3 className="mb-6 border-b border-gray-800 pb-2 text-xl font-semibold sm:text-2xl">
        {title}
      </h3>
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {members.map((member, index) => (
          <TeamCard
            key={`${title}-${index}`}
            name={member.name}
            role={member.role}
            imageSrc={member.imageSrc}
            linkedinUrl={member.linkedinUrl}
            altText={member.altText}
          />
        ))}
      </div>
    </div>
  );
};
