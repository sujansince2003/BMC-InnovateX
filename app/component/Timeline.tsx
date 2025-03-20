import React from "react";

const Timeline = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Event Timeline</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line - centered on md+ screens, left-aligned on small screens */}
            <div className="absolute md:left-1/2 left-4 md:transform md:-translate-x-1/2 h-full w-0.5 bg-indigo-200"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Opening Ceremony */}
              <div className="flex items-start">
                {/* Timeline dot - centered on md+ screens, left-aligned on small screens */}
                <div className="absolute md:left-1/2 left-2 md:transform md:-translate-x-1/2 w-4 h-4 bg-[#008FAD] rounded-full mt-1.5"></div>

                {/* Left column - hidden on small screens */}
                <div className="md:w-5/12 md:text-right md:pr-8 hidden md:block">
                  <h3 className="font-semibold text-lg">Opening Ceremony</h3>
                  <p className="text-gray-600">TBA</p>
                </div>

                {/* Spacer for md+ screens */}
                <div className="md:w-1/12"></div>

                {/* Right column - full width on small screens */}
                <div className="md:w-5/12 md:pl-8 pl-12 w-full">
                  {/* Title and date shown only on small screens */}
                  <div className="md:hidden mb-2">
                    <h3 className="font-semibold text-lg">Opening Ceremony</h3>
                    <p className="text-gray-600">TBA</p>
                  </div>
                  <p className="text-gray-600">
                    Kickoff event with keynote speakers and track announcements
                  </p>
                </div>
              </div>

              {/* Hacking Begins */}
              <div className="flex items-start">
                <div className="absolute md:left-1/2 left-2 md:transform md:-translate-x-1/2 w-4 h-4 bg-[#008FAD] rounded-full mt-1.5"></div>

                <div className="md:w-5/12 md:text-right md:pr-8 hidden md:block">
                  <h3 className="font-semibold text-lg">Hacking Begins</h3>
                  <p className="text-gray-600">TBA</p>
                </div>

                <div className="md:w-1/12"></div>

                <div className="md:w-5/12 md:pl-8 pl-12 w-full">
                  <div className="md:hidden mb-2">
                    <h3 className="font-semibold text-lg">Hacking Begins</h3>
                    <p className="text-gray-600">TBA</p>
                  </div>
                  <p className="text-gray-600">
                    Start building your innovative solutions
                  </p>
                </div>
              </div>

              {/* Mentorship Sessions */}
              <div className="flex items-start">
                <div className="absolute md:left-1/2 left-2 md:transform md:-translate-x-1/2 w-4 h-4 bg-[#008FAD] rounded-full mt-1.5"></div>

                <div className="md:w-5/12 md:text-right md:pr-8 hidden md:block">
                  <h3 className="font-semibold text-lg">Mentorship Sessions</h3>
                  <p className="text-gray-600">TBA</p>
                </div>

                <div className="md:w-1/12"></div>

                <div className="md:w-5/12 md:pl-8 pl-12 w-full">
                  <div className="md:hidden mb-2">
                    <h3 className="font-semibold text-lg">
                      Mentorship Sessions
                    </h3>
                    <p className="text-gray-600">TBA</p>
                  </div>
                  <p className="text-gray-600">
                    One-on-one sessions with industry experts
                  </p>
                </div>
              </div>

              {/* Project Submission */}
              <div className="flex items-start">
                <div className="absolute md:left-1/2 left-2 md:transform md:-translate-x-1/2 w-4 h-4 bg-[#008FAD] rounded-full mt-1.5"></div>

                <div className="md:w-5/12 md:text-right md:pr-8 hidden md:block">
                  <h3 className="font-semibold text-lg">Project Submission</h3>
                  <p className="text-gray-600">TBA</p>
                </div>

                <div className="md:w-1/12"></div>

                <div className="md:w-5/12 md:pl-8 pl-12 w-full">
                  <div className="md:hidden mb-2">
                    <h3 className="font-semibold text-lg">
                      Project Submission
                    </h3>
                    <p className="text-gray-600">TBA</p>
                  </div>
                  <p className="text-gray-600">
                    Submit your projects for evaluation
                  </p>
                </div>
              </div>

              {/* Closing Ceremony */}
              <div className="flex items-start">
                <div className="absolute md:left-1/2 left-2 md:transform md:-translate-x-1/2 w-4 h-4 bg-[#008FAD] rounded-full mt-1.5"></div>

                <div className="md:w-5/12 md:text-right md:pr-8 hidden md:block">
                  <h3 className="font-semibold text-lg">Closing Ceremony</h3>
                  <p className="text-gray-600">TBA</p>
                </div>

                <div className="md:w-1/12"></div>

                <div className="md:w-5/12 md:pl-8 pl-12 w-full">
                  <div className="md:hidden mb-2">
                    <h3 className="font-semibold text-lg">Closing Ceremony</h3>
                    <p className="text-gray-600">TBA</p>
                  </div>
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
