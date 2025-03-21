import React from "react";
import { Brain, Database, Globe, Shield, Cpu, Smartphone } from "lucide-react";

export default function TracksPage() {
  return (
    <div className="min-h-screen mt-10 bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16">
          Hackathon Tracks
        </h1>

        {/* Main Tracks */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI/ML Track */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Brain className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold">AI/ML Innovation</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Develop cutting-edge solutions using artificial intelligence and
                machine learning.
              </p>
              <div className="space-y-4">
                <h3 className="font-semibold">Problem Statements:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Healthcare diagnosis assistance using AI</li>
                  <li>• Smart city traffic management systems</li>
                  <li>• Personalized education platforms</li>
                  <li>• Natural language processing applications</li>
                </ul>
              </div>
            </div>

            {/* Web3 Track */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Database className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-semibold">Web3 & Blockchain</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Build decentralized applications and explore blockchain
                technology.
              </p>
              <div className="space-y-4">
                <h3 className="font-semibold">Problem Statements:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Decentralized finance solutions</li>
                  <li>• Smart contract applications</li>
                  <li>• NFT marketplace innovations</li>
                  <li>• Blockchain-based supply chain tracking</li>
                </ul>
              </div>
            </div>

            {/* FinTech Track */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-semibold">FinTech Solutions</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Innovate in financial technology and digital banking solutions.
              </p>
              <div className="space-y-4">
                <h3 className="font-semibold">Problem Statements:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Personal finance management tools</li>
                  <li>• Investment analysis platforms</li>
                  <li>• Payment gateway innovations</li>
                  <li>• Financial inclusion solutions</li>
                </ul>
              </div>
            </div>

            {/* Cybersecurity Track */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-semibold">Cybersecurity</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Create solutions for digital security and privacy protection.
              </p>
              <div className="space-y-4">
                <h3 className="font-semibold">Problem Statements:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Threat detection systems</li>
                  <li>• Privacy-preserving applications</li>
                  <li>• Secure communication platforms</li>
                  <li>• Identity protection solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Special Categories */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-center mb-12">
            Special Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Cpu className="h-6 w-6 text-indigo-600 mr-2" />
                <h3 className="text-xl font-semibold">Hardware Innovation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Combine software with hardware to create innovative IoT
                solutions.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Smart home automation</li>
                <li>• Environmental monitoring</li>
                <li>• Wearable technology</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Smartphone className="h-6 w-6 text-indigo-600 mr-2" />
                <h3 className="text-xl font-semibold">Mobile Solutions</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Develop innovative mobile applications for real-world problems.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Health and fitness apps</li>
                <li>• Social impact solutions</li>
                <li>• Educational platforms</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Evaluation Criteria */}
        <div className="max-w-4xl mx-auto">
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
