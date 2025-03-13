import React from "react";

const Timeline = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Event Timeline</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <h3 className="font-semibold text-lg">Opening Ceremony</h3>
                  <p className="text-gray-600">TBA</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full"></div>
                <div className="w-5/12 pl-8">
                  <p className="text-gray-600">
                    Kickoff event with keynote speakers and track announcements
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <h3 className="font-semibold text-lg">Hacking Begins</h3>
                  <p className="text-gray-600">TBA</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full"></div>
                <div className="w-5/12 pl-8">
                  <p className="text-gray-600">
                    Start building your innovative solutions
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <h3 className="font-semibold text-lg">Mentorship Sessions</h3>
                  <p className="text-gray-600">TBA</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full"></div>
                <div className="w-5/12 pl-8">
                  <p className="text-gray-600">
                    One-on-one sessions with industry experts
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <h3 className="font-semibold text-lg">Project Submission</h3>
                  <p className="text-gray-600">TBA</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full"></div>
                <div className="w-5/12 pl-8">
                  <p className="text-gray-600">
                    Submit your projects for evaluation
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-5/12 text-right pr-8">
                  <h3 className="font-semibold text-lg">Closing Ceremony</h3>
                  <p className="text-gray-600">TBA</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full"></div>
                <div className="w-5/12 pl-8">
                  <p className="text-gray-600">
                    Winners announcement and prize distribution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
