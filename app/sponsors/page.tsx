export const dynamic = "force-dynamic";
import React from "react";
import { Mail, Building, ExternalLink } from "lucide-react";
import Sponsors from "../component/Sponsor";

export default function SponsorsPage() {
  return (
    <div className="bg-[#f4f4f4]">
      <div className="container mx-auto px-4 py-16">
        <Sponsors />
        {/* Become a Sponsor */}
        <div className="max-w-4xl mt-10 mx-auto">
          <div className="p-8 rounded-xl text-center">
            <div className="flex items-center justify-center mb-6">
              <Building className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-2xl font-semibold">Become a Sponsor</h2>
            </div>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our mission to foster innovation and support the next
              generation of tech leaders. Various sponsorship tiers are
              available with different benefits and exposure opportunities.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4699aa] transition flex items-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                Contact for Sponsorship
              </a>
              <a href="#" className="text-primary flex items-center">
                View Sponsorship Deck <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
