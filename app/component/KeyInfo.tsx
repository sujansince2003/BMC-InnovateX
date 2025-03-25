"use client";
import React from "react";
import { Calendar, Clock, Trophy, Users } from "lucide-react";

const KeyInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard
            icon={<Calendar className="w-8 h-8 text-[#0A9AAB]" />}
            title="Date"
            value="24 - 26 Falgun"
          />
          <InfoCard
            icon={<Clock className="w-8 h-8 text-[#0A9AAB]" />}
            title="Duration"
            value="48 Hours"
          />
          <InfoCard
            icon={<Users className="w-8 h-8 text-[#0A9AAB]" />}
            title="Participants"
            value="60+"
          />
          <InfoCard
            icon={<Trophy className="w-8 h-8 text-[#0A9AAB]" />}
            title="Prizes"
            value="1,00,000+"
          />
        </div>
      </div>
    </section>
  );
};

export default KeyInfo;

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(10,154,171,0.3)] border border-gray-100">
      <div className="flex items-center h-full space-x-4">
        <div className="bg-gray-50 p-3 rounded-lg">{icon}</div>
        <div>
          <h3 className="text-gray-700 font-medium">{title}</h3>
          <p className="text-[#0A9AAB] font-bold text-xl">{value}</p>
        </div>
      </div>
    </div>
  );
}
