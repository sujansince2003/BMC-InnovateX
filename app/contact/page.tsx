import { Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GetInTouch() {
  return (
    <>
      <div className="py-16 bg-primary/90 text-white">
        <div className="relative h-[30rem] overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/20"></div>
            <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] rounded-full bg-white/10"></div>
          </div>

          <div className="relative h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get In Touch
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Have questions about the hackathon? Connect with us directly.
              </p>
            </div>

            <div className="flex align-center justify-center space-x-4">
              <Link
                className="px-10 py-2 flex gap-2 bg-white text-primary border-2 rounded-md font-medium items-center justify-center"
                href="tel:+9779841148149"
              >
                <Phone className="h-5 w-5" />
                Call Us
              </Link>
              <Link
                className="px-10 py-2 flex gap-2 border-white border-2 rounded-md font-medium items-center justify-center"
                href="mailto:innovatex@csitabmc.com"
              >
                <Mail className="h-5 w-5" />
                Mail Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Discord Join Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-primary p-10 flex flex-col justify-center text-white">
                <div className="mb-4">
                  <div className="inline-block p-3 bg-primary rounded-xl">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Join Our Discord Community
                </h3>
                <p className="text-indigo-100 mb-6">
                  Connect with mentors, organizers, and fellow participants. Get
                  real-time updates and support.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-300 mr-2"></div>
                    <span>Exclusive announcements</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-300 mr-2"></div>
                    <span>Connect with mentors</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-300 mr-2"></div>
                    <span>Find team members</span>
                  </li>
                </ul>
              </div>

              <div className="p-10 flex flex-col justify-center ">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Ready to join?
                </h3>
                <p className="text-gray-600 mb-8">
                  Our Discord server is the central hub for all hackathon
                  communication and networking.
                </p>
                <div className="space-y-4">
                  <Link
                    href="https://discord.com/invite/DHAKx3Aees"
                    className="cursor-pointer"
                  >
                    <Button
                      className="w-full bg-primary text-white py-6 flex items-center justify-center gap-2"
                      size="lg"
                    >
                      <MessageSquare className="h-5 w-5" />
                      Join Discord Server
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
