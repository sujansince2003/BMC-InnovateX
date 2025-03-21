import React from "react";
import { Trophy, Gift, Award, Briefcase } from "lucide-react";

export default function PrizesPage() {
  return (
    <div className="min-h-screen mt-10 bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16">
          Prizes & Rewards
        </h1>

        {/* Main Prizes */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-center mb-12">
            Main Prizes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl border-2 border-yellow-400">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Trophy className="h-12 w-12 text-yellow-400" />
              </div>
              <div className="text-center pt-8">
                <h3 className="text-3xl font-bold mb-2">TBA</h3>
                <p className="text-xl font-semibold text-gray-800 mb-4">
                  First Prize
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>Direct internship offers</li>
                  <li>Premium dev tools subscription</li>
                  <li>Mentorship program access</li>
                </ul>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border-2 border-gray-300">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Trophy className="h-12 w-12 text-gray-400" />
              </div>
              <div className="text-center pt-8">
                <h3 className="text-3xl font-bold mb-2">TBA</h3>
                <p className="text-xl font-semibold text-gray-800 mb-4">
                  Second Prize
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>Interview fast-track</li>
                  <li>Dev tools subscription</li>
                  <li>Cloud credits</li>
                </ul>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl border-2 border-orange-300">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <Trophy className="h-12 w-12 text-orange-400" />
              </div>
              <div className="text-center pt-8">
                <h3 className="text-3xl font-bold mb-2">TBA</h3>
                <p className="text-xl font-semibold text-gray-800 mb-4">
                  Third Prize
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li>Resume spotlight</li>
                  <li>Dev tools starter pack</li>
                  <li>Training vouchers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Track Prizes */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-8">
            <Award className="h-8 w-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-semibold">Track Prizes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">
                Best AI/ML Solution
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>•TBA cash prize</li>
                <li>• 1-year AI platform subscription</li>
                <li>• GPU credits worth TBA</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Best Web3 Project</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• TBA cash prize</li>
                <li>• Blockchain development kit</li>
                <li>• Crypto wallet credits</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">
                Most Innovative Solution
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• TBA cash prize</li>
                <li>• Innovation lab membership</li>
                <li>• Patent filing assistance</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Best UI/UX Design</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• TBA cash prize</li>
                <li>• Design tools subscription</li>
                <li>• UX certification course</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Special Awards */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-8">
            <Gift className="h-8 w-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-semibold">Special Awards</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-4">
                People&apos;s Choice
              </h3>
              <p className="text-gray-600 mb-4">Voted by fellow participants</p>
              <p className="font-semibold text-indigo-600">
                TBA + Special Recognition
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-4">Best Freshman Team</h3>
              <p className="text-gray-600 mb-4">First-year students special</p>
              <p className="font-semibold text-indigo-600">
                TBA + Mentorship Program
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-4">
                Sustainability Award
              </h3>
              <p className="text-gray-600 mb-4">Best eco-friendly solution</p>
              <p className="font-semibold text-indigo-600">
                TBA + Green Tech Partnership
              </p>
            </div>
          </div>
        </div>

        {/* Internship Opportunities */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Briefcase className="h-8 w-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-semibold">Internship Opportunities</h2>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <p className="text-gray-600 mb-6 text-center">
              Top performing teams will get fast-tracked internship
              opportunities with our sponsor companies
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-semibold mb-2">
                  Summer Internship Program
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 3-month paid internship</li>
                  <li>• Work with industry experts</li>
                  <li>• Project ownership</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-semibold mb-2">Research Internship</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• 6-month research position</li>
                  <li>• Publication opportunities</li>
                  <li>• Lab access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
