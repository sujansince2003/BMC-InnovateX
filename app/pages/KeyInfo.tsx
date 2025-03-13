import React from "react";
import { Calendar, Clock, Trophy, Users } from "lucide-react";

const KeyInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center p-6 bg-gray-50 rounded-xl">
            <Calendar className="h-10 w-10 text-indigo-600" />
            <div className="ml-4">
              <h3 className="font-semibold">Date</h3>
              <p className="text-gray-600">TBA</p>
            </div>
          </div>
          <div className="flex items-center p-6 bg-gray-50 rounded-xl">
            <Clock className="h-10 w-10 text-indigo-600" />
            <div className="ml-4">
              <h3 className="font-semibold">Duration</h3>
              <p className="text-gray-600">48 Hours</p>
            </div>
          </div>
          <div className="flex items-center p-6 bg-gray-50 rounded-xl">
            <Users className="h-10 w-10 text-indigo-600" />
            <div className="ml-4">
              <h3 className="font-semibold">Participants</h3>
              <p className="text-gray-600">TBA</p>
            </div>
          </div>
          <div className="flex items-center p-6 bg-gray-50 rounded-xl">
            <Trophy className="h-10 w-10 text-indigo-600" />
            <div className="ml-4">
              <h3 className="font-semibold">Prizes</h3>
              <p className="text-gray-600">TBA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyInfo;
