import React from "react";
import { Linkedin, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function JudgesPage() {
  return (
    <div className="min-h-screen mt-10 bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16">
          Judges & Mentors
        </h1>

        {/* Judges Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-center mb-12">
            Meet Our Judges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <Image
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80"
                alt="Sarah Johnson"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-indigo-600 mb-3">CTO at TechCorp</p>
              <p className="text-gray-600 mb-4">
                AI/ML Expert with 15+ years of experience in building scalable
                solutions. Previously led engineering teams at Google and
                Microsoft.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://linkedin.com"
                  className="text-gray-600 hover:text-indigo-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 flex items-center"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <Image
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80"
                alt="David Chen"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">David Chen</h3>
              <p className="text-indigo-600 mb-3">Founder of BlockChain Labs</p>
              <p className="text-gray-600 mb-4">
                Web3 pioneer and blockchain technology expert. Advisor to
                multiple successful crypto startups and DeFi projects.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://linkedin.com"
                  className="text-gray-600 hover:text-indigo-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 flex items-center"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <Image
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&q=80"
                alt="Emily Rodriguez"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Emily Rodriguez</h3>
              <p className="text-indigo-600 mb-3">
                Innovation Director at Future Labs
              </p>
              <p className="text-gray-600 mb-4">
                Specializes in emerging technologies and innovation strategy.
                Led multiple successful startup accelerator programs.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://linkedin.com"
                  className="text-gray-600 hover:text-indigo-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 flex items-center"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mentors Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-center mb-12">
            Expert Mentors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                name: "Alex Kumar",
                role: "Senior AI Engineer",
                company: "TechCorp",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
                expertise: "Machine Learning",
              },
              {
                name: "Maria Garcia",
                role: "UX Director",
                company: "DesignHub",
                image:
                  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&q=80",
                expertise: "UI/UX Design",
              },
              {
                name: "John Smith",
                role: "Tech Lead",
                company: "WebScale",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80",
                expertise: "Cloud Architecture",
              },
              {
                name: "Lisa Chen",
                role: "Product Manager",
                company: "InnovateCo",
                image:
                  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&q=80",
                expertise: "Product Strategy",
              },
            ].map((mentor, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl text-center"
              >
                <Image
                  width={200}
                  height={200}
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold mb-1">{mentor.name}</h3>
                <p className="text-indigo-600 text-sm mb-2">{mentor.role}</p>
                <p className="text-gray-600 text-sm mb-3">{mentor.company}</p>
                <p className="text-gray-500 text-sm">
                  Expert in {mentor.expertise}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mentorship Schedule */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Mentorship Schedule
          </h2>
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-4">Day 1 - March 15, 2025</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">10:00 AM - 12:00 PM</span>
                    <span className="text-gray-800">
                      Technical Architecture Review
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">2:00 PM - 4:00 PM</span>
                    <span className="text-gray-800">UI/UX Consultation</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Day 2 - March 16, 2025</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">11:00 AM - 1:00 PM</span>
                    <span className="text-gray-800">
                      Code Review & Optimization
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">3:00 PM - 5:00 PM</span>
                    <span className="text-gray-800">Pitch Preparation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
