"use client";
import { sortSponsors } from "@/lib/sponsor";
import Image from "next/image";
const data = [
  {
    title: "The Municipality",
    logo: "https://placehold.co/400x200?text=TechInnovate",
    category: "Government Patron",
    description:
      "Leading global techLeading global technology solutions provider specializing in digital transformation and innovative enterprise strategiesLeading global technology solutions provider specializing in digital transformation and innovative enterprise strategiesLeading global technology solutions provider specializing in digital transformation and innovative enterprise strategiesnology solutions provider specializing in digital transformation and innovative enterprise strategies.",
    url: "#",
  },
  {
    title: "The Sub-Metro",
    logo: "https://placehold.co/400x200?text=TechInnovate",
    category: "Government Patron",
    description:
      "Leading global techLeading global technology solutions provider specializing in digital transformation and innovative enterprise strategiesLeading global technology solutions provider specializing in digital transformation and innovative enterprise strategiesLeading global technology solutions provider specializing in digital transformation and innovative enterprise strategiesnology solutions provider specializing in digital transformation and innovative enterprise strategies.",
    url: "#",
  },
  {
    title: "Narvina Technologies",
    logo: "https://placehold.co/400x200?text=TechInnovate",
    category: "Technology Partner",
    description:
      "Leading global techLeading global technology solutions provider specializing in digital transformation and innovative enterprise strategiesLeading global technology solutions provider specializing in digital transformation and innovative enterprise strategiesLeading global technology solutions provider specializing in digital transformation and innovative enterprise strategiesnology solutions provider specializing in digital transformation and innovative enterprise strategies.",
    url: "#",
  },
  {
    title: "Develope The shit",
    logo: "https://placehold.co/400x200?text=TechInnovate",
    category: "Networking Partner",
    description:
      "Leading global techLeading global technology solutions provider specializing in digital transformation and innovative enterprise strategiesLeading global technology solutions provider specializing in digital transformation and innovative enterprise strategiesLeading global technology solutions provider specializing in digital transformation and innovative enterprise strategiesnology solutions provider specializing in digital transformation and innovative enterprise strategies.",
    url: "#",
  },
];
const sponsors = sortSponsors(data);

export default function Sponsors() {
  return (
    <section className="py-20 bg-gradient-to-b bg-[#f4f4f4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0A9AAB]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFB800]/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div className="relative text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
            Our <span className="">Sponsors</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re grateful to our sponsors who make this event possible.
            Their support enables innovation and growth in our community.
          </p>
        </div>

        {/* Title Sponsor */}
        <div className="mb-10 p-4 rounded-lg bg-gray-50 ">
          <div className="p-4">
            <div className="text-center mb-8">
              <h3 className="inline-block text-xl font-semibold text-gray-700 px-6 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                Organizer
              </h3>
            </div>
            <div className="flex gap-8 mx-auto">
              <SponsorCard
                title="CSIT Association of BMC"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dolorum ipsam ipsa ea, nihil exercitationem ut error mollitia quas dolor! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt.ng elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt."
                url="#"
              />
            </div>
          </div>
        </div>
        <div className="mb-20 p-4 rounded-lg grid lg:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4">
            <div className="text-center mb-8">
              <h3 className="inline-block text-xl font-semibold text-gray-700 px-6 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                Title Sponsor
              </h3>
            </div>
            <div className="flex gap-8 mx-auto">
              <SponsorCard
                title="Butwal Multiple Campus"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dolorum ipsam ipsa ea, nihil exercitationem ut error mollitia quas dolor! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt.ng elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt."
                url="#"
              />
            </div>
          </div>
          <div className="bg-gray-50 p-4">
            <div className="text-center mb-8">
              <h3 className="inline-block text-xl font-semibold text-gray-700 px-6 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                Powered By
              </h3>
            </div>
            <div className="flex gap-8 mx-auto">
              <SponsorCard
                title="CSIT Association of BMC"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dolorum ipsam ipsa ea, nihil exercitationem ut error mollitia quas dolor! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt.ng elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt."
                url="#"
              />
            </div>
          </div>
        </div>
        {/* Sponsor Section */}
        <div className="flex flex-wrap gap-4 ">
          {Object.keys(sponsors).map((sponsorTitle, i) => {
            const sponsor = sponsors[sponsorTitle];
            return (
              <div
                key={i}
                className={`bg-gray-50 rounded-lg 
                  ${sponsor.length >= 3 && " w-full p-4"} 
                  ${
                    sponsor.length == 2 &&
                    " w-full py-4 lg:w-[60%] lg:p-4 lg:m-2"
                  } 
                  ${
                    sponsor.length === 1 &&
                    "w-full py-4 m-auto md:w-[48%] lg:p-4 lg:m-2 lg:w-[30%]"
                  } 
                  `}
              >
                <div className="text-center mb-8">
                  <h3 className="inline-block text-xl font-semibold text-gray-700 px-6 py-2 bg-white rounded-full shadow-sm border border-gray-100">
                    {sponsorTitle}
                  </h3>
                </div>
                <div
                  className={`grid md:grid-cols-2 ${
                    sponsor.length >= 3 && "lg:grid-cols-3"
                  } gap-4`}
                >
                  {sponsor.map((spon, i) => (
                    <SponsorCard
                      key={i}
                      title={spon.title}
                      description={spon.description}
                      url={spon.url}
                      className="p-4 min-w-[20rem] mb-10 rounded-xl"
                    />
                    // <div className="p-4 w-[30rem] bg-red-500" key={i}>
                    //   Helo
                    // </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SponsorCard({
  title,
  description,
  url,
  logo,
  className,
}: {
  title: string;
  description: string;
  url: string;
  logo?: string;
  className?: string;
}) {
  return (
    <div className={` ${className}`}>
      <Image
        width={200}
        height={200}
        src={
          logo
            ? logo
            : "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=200&fit=crop&q=80"
        }
        alt="TechCorp"
        className="h-4w-40 w-40 object-contain border border-primary rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className={`text-gray-600 mb-4 line-clamp-5 `}>{description}</p>
      <a href={url} className="text-primary underline flex items-center">
        Visit Website
      </a>
    </div>
  );
}
