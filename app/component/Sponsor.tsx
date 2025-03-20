"use client";
import Image from "next/image";

export default function ModernSponsors() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0A9AAB]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFB800]/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

        {/* Header with styled underline */}
        <div className="relative text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-800 mb-4 relative inline-block">
            Our <span className="text-[#0A9AAB]">Sponsors</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#0A9AAB] rounded-full"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re grateful to our sponsors who make this event possible.
            Their support enables innovation and growth in our community.
          </p>
        </div>

        {/* Title Sponsor */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="inline-block text-xl font-semibold text-gray-700 px-6 py-2 bg-white rounded-full shadow-sm border border-gray-100">
              Title Sponsor
            </h3>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-lg p-10 bg-white rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A9AAB]/10 via-transparent to-[#0A9AAB]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="flex justify-center items-center h-40 relative">
                <Image
                  src="/assets/logo.png"
                  alt="Title Sponsor"
                  width={300}
                  height={150}
                  className="object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="inline-block text-xl font-semibold text-gray-700 px-6 py-2 bg-white rounded-full shadow-sm border border-gray-100">
              <span className="text-[#FFB800]">Gold</span> Sponsors
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SponsorCard level="gold" />
            <SponsorCard level="gold" />
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="inline-block text-xl font-semibold text-gray-700 px-6 py-2 bg-white rounded-full shadow-sm border border-gray-100">
              <span className="text-[#B4B9C7]">Silver</span> Sponsors
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <SponsorCard level="silver" />
            <SponsorCard level="silver" />
            <SponsorCard level="silver" />
          </div>
        </div>

        {/* Bronze Sponsors */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="inline-block text-xl font-semibold text-gray-700 px-6 py-2 bg-white rounded-full shadow-sm border border-gray-100">
              <span className="text-[#FF8A00]">Bronze</span> Sponsors
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            <SponsorCard level="bronze" />
            <SponsorCard level="bronze" />
            <SponsorCard level="bronze" />
            <SponsorCard level="bronze" />
          </div>
        </div>

        {/* Supported By */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="inline-block text-xl font-semibold text-gray-700 px-6 py-2 bg-white rounded-full shadow-sm border border-gray-100">
              Supported By
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            <SponsorCard level="supported" />
            <SponsorCard level="supported" />
            <SponsorCard level="supported" />
            <SponsorCard level="supported" />
          </div>
        </div>

        {/* Other Partners */}
        <div>
          <div className="text-center mb-8">
            <h3 className="inline-block text-xl font-semibold text-gray-700 px-6 py-2 bg-white rounded-full shadow-sm border border-gray-100">
              Other Partners
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="w-32 h-32 bg-white rounded-lg shadow-md p-4 flex items-center justify-center border border-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105 group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A9AAB]/5 via-transparent to-[#0A9AAB]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src="/assets/logo.png"
                  alt={`Partner ${i}`}
                  width={80}
                  height={80}
                  className="object-contain relative z-10"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SponsorCard({
  level,
}: {
  level: "gold" | "silver" | "bronze" | "supported";
}) {
  const getStyles = () => {
    switch (level) {
      case "gold":
        return {
          containerClasses:
            "p-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-[#FFB800]/30 group",
          glowColor: "from-[#FFB800]/10 via-transparent to-[#FFB800]/10",
          height: 120,
          width: 240,
        };
      case "silver":
        return {
          containerClasses:
            "p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:border-[#B4B9C7]/30 group",
          glowColor: "from-[#B4B9C7]/10 via-transparent to-[#B4B9C7]/10",
          height: 100,
          width: 200,
        };
      case "bronze":
        return {
          containerClasses:
            "p-5 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-[#FF8A00]/30 group",
          glowColor: "from-[#FF8A00]/10 via-transparent to-[#FF8A00]/10",
          height: 80,
          width: 160,
        };
      case "supported":
      default:
        return {
          containerClasses:
            "p-5 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-[#0A9AAB]/30 group",
          glowColor: "from-[#0A9AAB]/10 via-transparent to-[#0A9AAB]/10",
          height: 80,
          width: 160,
        };
    }
  };

  const { containerClasses, glowColor, height, width } = getStyles();

  return (
    <div
      className={`${containerClasses} flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${glowColor} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
      ></div>
      <Image
        src="/assets/logo.png"
        alt={`${level} sponsor`}
        width={width}
        height={height}
        className="object-contain relative z-10"
      />
    </div>
  );
}
