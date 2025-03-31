import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
// Team data structure
type TeamMember = {
  name: string;
  role: string;
  photo?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  phone?: string;
};

type TeamSection = {
  title: string;
  members: TeamMember[];
};

const teamData: TeamSection[] = [
  {
    title: "Technical Team",
    members: [
      {
        name: "Bipin Khatri",
        role: "Technical Co Lead",
        photo: "https://placehold.co/300x300?text=Alex",
        email: "alex@example.com",
        linkedin: "alexjohnson",
        github: "alexjohnson",
        phone: "+977 9867418196",
      },
      {
        name: "Sanchit Pandey",
        role: "Technical Co Lead",
        photo: "https://placehold.co/300x300?text=Sarah",
        email: "sarah@example.com",
        linkedin: "sarahwilliams",
        github: "sarahwilliams",
        phone: "+5566778899",
      },
    ],
  },
  {
    title: "Promotion Team",
    members: [
      {
        name: "Jane Smith",
        role: "Hackathon Lead",
        photo: "https://placehold.co/300x300?text=Jane",
        email: "jane.smith@example.com",
        linkedin: "janesmith",
        github: "janesmith",
        phone: "+1234567890",
      },
      {
        name: "John Doe",
        role: "Hackathon Co-Lead",
        photo: "https://placehold.co/300x300?text=John",
        email: "john.doe@example.com",
        linkedin: "johndoe",
        github: "johndoe",
        phone: "+0987654321",
      },
    ],
  },
];

const ocMembers: TeamMember[] = [
  {
    name: "David Wilson",
    role: "Technical Team",
    linkedin: "davidwilson",
  },
  {
    name: "Sophia Martinez",
    role: "Design Team",
    linkedin: "sophiamartinez",
  },
  {
    name: "James Taylor",
    role: "Sponsor Team",
    linkedin: "jamestaylor",
  },
  {
    name: "Olivia Anderson",
    role: "Marketing Team",
    linkedin: "oliviaanderson",
  },
  {
    name: "Daniel Thomas",
    role: "Logistics Team",
    linkedin: "danielthomas",
  },
  {
    name: "Emma Jackson",
    role: "Content Team",
    linkedin: "emmajackson",
  },
  {
    name: "William White",
    role: "Technical Team",
    linkedin: "williamwhite",
  },
  {
    name: "Ava Harris",
    role: "Design Team",
    linkedin: "avaharris",
  },
];

export default function Teams() {
  return (
    <section className="py-12 mt-10 sm:py-16 lg:py-20 bg-gradient-to-b overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-[#0A9AAB]/5 rounded-full blur-3xl -mr-20 sm:-mr-32 -mt-20 sm:-mt-32"></div>
        <div className="absolute bottom-0 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-[#FFB800]/5 rounded-full blur-3xl -ml-20 sm:-ml-32 -mb-20 sm:-mb-32"></div>

        {/* Header with styled underline */}
        <div className="relative text-center mb-10 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 relative inline-block">
            Our LineUps
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated individuals who make this hackathon possible. Our
            team works tirelessly to create an amazing experience for all
            participants.
          </p>
        </div>

        <div className="rounded-xl shadow- overflow-hidden">
          <div className="text-center py-4">
            <h3 className="inline-block text-lg font-semibold text-gray-700 px-10 py-1.5 bg-white rounded-full shadow-sm border border-gray-100">
              BMC InnovateX
              <p className="text-gray-500 text-sm">Co Leads</p>
            </h3>
            <div className="px-4 sm:px-6 py-6">
              <div className="flex w-1/2 m-auto gap-2">
                <MemberCard
                  member={{
                    name: "Suman Bhattarai",
                    role: "Event Co Lead",
                    photo: "https://placehold.co/300x300?text=Jane",
                    linkedin: "janesmith",
                    github: "janesmith",
                    phone: "+1234567890",
                  }}
                />
                <MemberCard
                  member={{
                    name: "Sujan Khatri",
                    role: "Event Co Lead",
                    photo: "https://placehold.co/300x300?text=Jane",
                    linkedin: "janesmith",
                    github: "janesmith",
                    phone: "+1234567890",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid  md:grid-cols-2 gap-2">
          {teamData.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="rounded-xl shadow- overflow-hidden"
            >
              <div className="text-center py-4">
                <h3 className="inline-block text-lg font-semibold text-gray-700 px-10 py-1.5 bg-white rounded-full shadow-sm border border-gray-100">
                  {section.title}
                  <p className="text-gray-500 text-sm">Co Leads</p>
                </h3>
              </div>

              <div className="px-4 sm:px-6 pb-6">
                {section.title !== "Organizing Committee" && (
                  <div className="grid grid-cols-2  gap-4">
                    {section.members.map((member, memberIndex) => (
                      <MemberCard key={memberIndex} member={member} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center py-4">
          <h3 className="inline-block text-lg font-semibold text-gray-700 px-10 py-1.5 mb-4 bg-white rounded-full shadow-sm border border-gray-100">
            Organizing Committee Members
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {ocMembers.map((member, memberIndex) => (
              <OCMembersCard key={memberIndex} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const MemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col w-full">
      {member.photo && (
        <div className="relative w-full pt-[100%] overflow-hidden bg-gray-50">
          <div className="absolute inset-2 rounded-xl overflow-hidden">
            <Image
              src={member.photo || "/placeholder.svg"}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
      <div className="p-3 text-center flex-1 flex flex-col">
        <h4 className="font-semibold text-sm text-gray-800">{member.name}</h4>
        <p className="text-[#0A9AAB] text-xs font-medium mb-2">{member.role}</p>

        {member.phone && (
          <p className="text-xs text-gray-600 mb-3">{member.phone}</p>
        )}

        <div className="flex justify-center space-x-2 mt-auto">
          {member.email && (
            <div className="relative group/tooltip">
              <Link
                href={`mailto:${member.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-7 w-7 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-800/10 hover:text-gray-800 transition-colors"
                aria-label={`${member.name}'s Email ID`}
              >
                <Mail className="h-3.5 w-3.5" />
              </Link>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                GitHub
              </span>
            </div>
          )}
          {member.linkedin && (
            <div className="relative group/tooltip">
              <Link
                href={`https://linkedin.com/in/${member.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-7 w-7 rounded-full bg-gray-100 text-gray-500 hover:bg-[#0277b5]/20 hover:text-[#0277b5] transition-colors"
                aria-label={`${member.name}'s LinkedIn profile`}
              >
                <Linkedin className="h-3.5 w-3.5" />
              </Link>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                LinkedIn
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const OCMembersCard = ({ member }: { member: TeamMember }) => {
  return (
    <Link
      href={`https://linkedin.com/in/${member.linkedin}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-3 text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
        <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-[#0A9AAB]/10 flex items-center justify-center text-[#0A9AAB] font-semibold">
          {member.name.charAt(0)}
        </div>
        <h4 className="font-medium text-gray-800 text-sm">{member.name}</h4>
        <div className="flex justify-center"></div>
      </div>
    </Link>
  );
};
