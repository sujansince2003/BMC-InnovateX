import React from "react";
import { Laptop } from "lucide-react";
const Track = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Hackathon Tracks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <Laptop className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI/ML</h3>
            <p className="text-gray-600">
              Build innovative solutions using artificial intelligence and
              machine learning.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <Laptop className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Web3</h3>
            <p className="text-gray-600">
              Create decentralized applications and blockchain solutions.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="bg-purple-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <Laptop className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Open Innovation</h3>
            <p className="text-gray-600">
              Build anything that solves real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Track;
