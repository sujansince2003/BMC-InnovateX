import React from "react";
import { Gift } from "lucide-react";
const Prizes = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Prizes & Rewards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 border-2 border-yellow-400 rounded-xl">
            <Gift className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">TBA</h3>
            <p className="text-gray-600">First Prize</p>
          </div>
          <div className="text-center p-8 border-2 border-gray-300 rounded-xl">
            <Gift className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">TBA</h3>
            <p className="text-gray-600">Second Prize</p>
          </div>
          <div className="text-center p-8 border-2 border-orange-300 rounded-xl">
            <Gift className="h-12 w-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">TBA</h3>
            <p className="text-gray-600">Third Prize</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
