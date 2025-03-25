import { Brain, Globe, Globe2 } from "lucide-react";

export default function HackathonTracks() {
  return (
    <div className="bg-[#f3f2f2] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-300 py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            Hackathon Tracks
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-16">
            <TrackCard
              icon={
                <Brain className="w-12 h-12 dark:text-[#0A9AAB] text-[#0A9AAB]" />
              }
              title="AI/ML"
              description="Build innovative solutions using artificial intelligence and machine learning."
            />
            <TrackCard
              icon={
                <Globe className="w-12 h-12 dark:text-[#0A9AAB] text-[#0A9AAB]" />
              }
              title="Web3"
              description="Create decentralized applications and blockchain solutions."
            />
            <TrackCard
              icon={
                <Globe2 className="w-12 h-12 dark:text-[#0A9AAB] text-[#0A9AAB]" />
              }
              title="Open Innovation"
              description="Build anything that solves real-world problems."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg p-8 bg-gray-100 transition-colors duration-300 hover:shadow-lg">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h2 className="text-2xl font-bold mb-3  text-gray-800">{title}</h2>
        <p className=" text-gray-600">{description}</p>
      </div>
    </div>
  );
}
