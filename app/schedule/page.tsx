import React from "react";
import { Calendar, Clock } from "lucide-react";

export default function SchedulePage() {
  return (
    <div className="min-h-screen mt-10 bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16">Event Schedule</h1>

        {/* Registration Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center mb-8">
            <Calendar className="h-8 w-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-semibold">Registration Timeline</h2>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-32 font-semibold">TBA</div>
                <div>
                  <div className="font-semibold">
                    Early Bird Registration Opens
                  </div>
                  <p className="text-gray-600">
                    Special perks for early registrants
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-32 font-semibold">TBA</div>
                <div>
                  <div className="font-semibold">
                    Regular Registration Opens
                  </div>
                  <p className="text-gray-600">
                    Standard registration period begins
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-32 font-semibold">TBA</div>
                <div>
                  <div className="font-semibold">Registration Closes</div>
                  <p className="text-gray-600">
                    Last day to register for the hackathon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Event Schedule */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Clock className="h-8 w-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-semibold">Main Event Schedule</h2>
          </div>

          {/* Day 1 */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 bg-indigo-50 p-4 rounded-lg">
              Day 1 -TBA
            </h3>
            <div className="space-y-6">
              <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                <div className="flex-shrink-0 w-32 font-semibold">9:00 AM</div>
                <div>
                  <div className="font-semibold">Check-in & Registration</div>
                  <p className="text-gray-600">
                    Collect your participant kit and setup your workspace
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                <div className="flex-shrink-0 w-32 font-semibold">10:00 AM</div>
                <div>
                  <div className="font-semibold">Opening Ceremony</div>
                  <p className="text-gray-600">
                    Welcome address, rules briefing, and keynote speech
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                <div className="flex-shrink-0 w-32 font-semibold">12:00 PM</div>
                <div>
                  <div className="font-semibold">Hacking Begins</div>
                  <p className="text-gray-600">
                    Start working on your projects
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                <div className="flex-shrink-0 w-32 font-semibold">2:00 PM</div>
                <div>
                  <div className="font-semibold">Workshop: API Integration</div>
                  <p className="text-gray-600">
                    Learn about integrating popular APIs into your project
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                <div className="flex-shrink-0 w-32 font-semibold">6:00 PM</div>
                <div>
                  <div className="font-semibold">Dinner & Networking</div>
                  <p className="text-gray-600">
                    Meet fellow participants and mentors
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 bg-indigo-50 p-4 rounded-lg">
              Day 2 - TBA
            </h3>
            <div className="space-y-6">
              <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                <div className="flex-shrink-0 w-32 font-semibold">10:00 AM</div>
                <div>
                  <div className="font-semibold">Mentorship Sessions Begin</div>
                  <p className="text-gray-600">
                    One-on-one guidance from industry experts
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                <div className="flex-shrink-0 w-32 font-semibold">2:00 PM</div>
                <div>
                  <div className="font-semibold">Workshop: Pitch Perfect</div>
                  <p className="text-gray-600">
                    Learn how to present your project effectively
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                <div className="flex-shrink-0 w-32 font-semibold">6:00 PM</div>
                <div>
                  <div className="font-semibold">Progress Check-in</div>
                  <p className="text-gray-600">
                    Share your progress with mentors
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Day 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-6 bg-indigo-50 p-4 rounded-lg">
              Day 3 - TBA
            </h3>
            <div className="space-y-6">
              <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                <div className="flex-shrink-0 w-32 font-semibold">11:00 AM</div>
                <div>
                  <div className="font-semibold">
                    Project Submission Deadline
                  </div>
                  <p className="text-gray-600">
                    Submit your project for evaluation
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                <div className="flex-shrink-0 w-32 font-semibold">1:00 PM</div>
                <div>
                  <div className="font-semibold">Project Presentations</div>
                  <p className="text-gray-600">
                    Present your solution to the judges
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                <div className="flex-shrink-0 w-32 font-semibold">5:00 PM</div>
                <div>
                  <div className="font-semibold">Closing Ceremony</div>
                  <p className="text-gray-600">
                    Winners announcement and prize distribution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
