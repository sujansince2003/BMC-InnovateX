import React from "react";
import HackathonTracks from "../component/Track";

export default function TracksPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <HackathonTracks />

        {/* Evaluation Criteria */}
        <div className="max-w-4xl mx-auto mt-10">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Evaluation Criteria
          </h2>
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">
                  Technical Evaluation (40%)
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Code quality and organization</li>
                  <li>• Technical complexity</li>
                  <li>• Scalability</li>
                  <li>• Performance</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Innovation (30%)</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Uniqueness of solution</li>
                  <li>• Market potential</li>
                  <li>• Creative approach</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Impact (20%)</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Problem-solution fit</li>
                  <li>• Social/environmental impact</li>
                  <li>• Scalability of impact</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Presentation (10%)</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Demo quality</li>
                  <li>• Pitch effectiveness</li>
                  <li>• Documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
