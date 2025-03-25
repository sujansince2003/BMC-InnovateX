"use client";
import Image from "next/image";

export default function Sponsors() {
  return (
    <section className="py-20 bg-gradient-to-b bg-[#f4f4f4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0A9AAB]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFB800]/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

        {/* Header with styled underline */}
        <div className="relative text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 relative inline-block">
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
              <span className="text-primary">Title</span> Sponsor
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

        {/* Gold Sponsors */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="inline-block text-xl font-semibold text-gray-700 px-6 py-2 bg-white rounded-full shadow-sm border border-gray-100">
              <span className="text-[#FFB800]">Gold</span> Sponsors
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SponsorCard
              title="CSIT Association of BMC"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dolorum ipsam ipsa ea, nihil exercitationem ut error mollitia quas dolor! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt.ng elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt."
              url="#"
            />{" "}
            <SponsorCard
              title="CSIT Association of BMC"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dolorum ipsam ipsa ea, nihil exercitationem ut error mollitia quas dolor! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt.ng elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt."
              url="#"
            />
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h3 className="inline-block text-xl font-semibold text-gray-700 px-6 py-2 bg-white rounded-full shadow-sm border border-gray-100">
              <span className="text-primary">Silver</span> Sponsors
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <SponsorCard
              title="CSIT Association of BMC"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dolorum ipsam ipsa ea, nihil exercitationem ut error mollitia quas dolor! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt.ng elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt."
              url="#"
            />{" "}
            <SponsorCard
              title="CSIT Association of BMC"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dolorum ipsam ipsa ea, nihil exercitationem ut error mollitia quas dolor! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt.ng elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt."
              url="#"
            />{" "}
            <SponsorCard
              title="CSIT Association of BMC"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dolorum ipsam ipsa ea, nihil exercitationem ut error mollitia quas dolor! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt.ng elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt."
              url="#"
            />
          </div>
        </div>

        {/* Bronze Sponsors */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="inline-block text-xl font-semibold text-gray-700 px-6 py-2 bg-white rounded-full shadow-sm border border-gray-100">
              <span className="text-[#FF8A00]">Bronze</span> Sponsors
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <SponsorCard
              title="CSIT Association of BMC"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dolorum ipsam ipsa ea, nihil exercitationem ut error mollitia quas dolor! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt.ng elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt."
              url="#"
            />{" "}
            <SponsorCard
              title="CSIT Association of BMC"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dolorum ipsam ipsa ea, nihil exercitationem ut error mollitia quas dolor! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt.ng elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt."
              url="#"
            />{" "}
            <SponsorCard
              title="CSIT Association of BMC"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto dolorum ipsam ipsa ea, nihil exercitationem ut error mollitia quas dolor! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt.ng elit. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et adipisici. Voluptatem quasi fugit quam deleniti omnis nulla suscipit cupiditate cumque, et nesciunt."
              url="#"
            />
          </div>
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
}: {
  title: string;
  description: string;
  url: string;
  logo?: string;
}) {
  return (
    <div className="bg-[#f9f9f9] p-10 rounded-xl w-full">
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
