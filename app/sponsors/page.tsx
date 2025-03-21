import React from "react";
import { Mail, Building, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function SponsorsPage() {
  return (
    <div className="min-h-screen mt-10 bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16">Our Sponsors</h1>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-12">
            Platinum Sponsors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl">
              <Image
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=200&fit=crop&q=80"
                alt="TechCorp"
                className="h-16  object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">TechCorp</h3>
              <p className="text-gray-600 mb-4">
                Leading technology solutions provider specializing in AI and
                cloud computing.
              </p>
              <a
                href="https://example.com"
                className="text-indigo-600 hover:text-indigo-700 flex items-center"
              >
                Visit Website <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <Image
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&h=200&fit=crop&q=80"
                alt="InnovateHub"
                className="h-16 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">InnovateHub</h3>
              <p className="text-gray-600 mb-4">
                Global innovation platform supporting startups and tech
                initiatives.
              </p>
              <a
                href="https://example.com"
                className="text-indigo-600 hover:text-indigo-700 flex items-center"
              >
                Visit Website <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-12">
            Gold Sponsors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl">
              <Image
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=300&h=150&fit=crop&q=80"
                alt="CloudTech"
                className="h-12 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">CloudTech</h3>
              <p className="text-gray-600 mb-4">
                Cloud infrastructure and services provider.
              </p>
              <a
                href="https://example.com"
                className="text-indigo-600 hover:text-indigo-700 flex items-center"
              >
                Learn More <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <Image
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=300&h=150&fit=crop&q=80"
                alt="DevTools"
                className="h-12 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">DevTools</h3>
              <p className="text-gray-600 mb-4">
                Developer productivity tools and platforms.
              </p>
              <a
                href="https://example.com"
                className="text-indigo-600 hover:text-indigo-700 flex items-center"
              >
                Learn More <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <Image
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=300&h=150&fit=crop&q=80"
                alt="SecureNet"
                className="h-12 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">SecureNet</h3>
              <p className="text-gray-600 mb-4">
                Cybersecurity solutions and services.
              </p>
              <a
                href="https://example.com"
                className="text-indigo-600 hover:text-indigo-700 flex items-center"
              >
                Learn More <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-12">
            Silver Sponsors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-xl text-center">
                <Image
                  width={200}
                  height={200}
                  src={`https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=200&h=100&fit=crop&q=80`}
                  alt={`Sponsor ${i}`}
                  className="h-8 object-contain mx-auto mb-2"
                />
                <h3 className="font-semibold">Sponsor {i}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Sponsor */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-xl text-center">
            <div className="flex items-center justify-center mb-6">
              <Building className="h-8 w-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-semibold">Become a Sponsor</h2>
            </div>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our mission to foster innovation and support the next
              generation of tech leaders. Various sponsorship tiers are
              available with different benefits and exposure opportunities.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                Contact for Sponsorship
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 flex items-center"
              >
                View Sponsorship Deck <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
