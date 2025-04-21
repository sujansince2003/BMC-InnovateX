import React from "react";
import { BookOpen, Lightbulb, Target, Rocket, Brain } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen  bg-white">
      <div className="container mt-20 mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Your Ultimate Guide to Hackathons & BMC InnovateX
          </h1>
          <p className="text-xl text-gray-600 text-center mb-8">
            From Newbie to Ninja: Everything you need to know about hackathons
            and how to succeed at BMC InnovateX
          </p>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed">
              Okay, so you&apos;re curious about hackathons? Awesome! Whether
              you&apos;re a coding newbie or a seasoned pro, hackathons are an
              incredible way to learn, build, and connect with other passionate
              people. But let&apos;s be real, walking into one of these events
              can feel a little intimidating if you don&apos;t know what to
              expect.
            </p>
          </div>
        </div>

        {/* What's a Hackathon Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center mb-8">
            <BookOpen className="h-8 w-8 text-[#008FAD] mr-3" />
            <h2 className="text-3xl font-bold">
              What&apos;s a Hackathon, Anyway?
            </h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>
              At its core, a hackathon is an event where people come together to
              collaborate on software or hardware projects. Usually, these
              events last between 24 and 48 hours, and participants form teams
              to brainstorm, design, and build something cool.
            </p>
            <p>
              Think of it like a pressure cooker for creativity and innovation.
              You&apos;re given a limited amount of time, a bunch of resources,
              and a room full of talented people. The goal? To create something
              awesome.
            </p>
          </div>
        </div>

        {/* Why Participate Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center mb-8">
            <Lightbulb className="h-8 w-8 text-[#008FAD] mr-3" />
            <h2 className="text-3xl font-bold">Why Should You Participate?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Learn New Skills</h3>
              <p className="text-gray-600">
                Hackathons are the perfect environment to learn new programming
                languages, frameworks, and tools. You&apos;ll be surrounded by
                people who are eager to share their knowledge.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">
                Build Your Portfolio
              </h3>
              <p className="text-gray-600">
                A well-executed hackathon project can be a great addition to
                your portfolio, showing potential employers your capabilities.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">
                Network with Others
              </h3>
              <p className="text-gray-600">
                Connect with other developers, designers, and entrepreneurs who
                share your passion for technology.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Have Fun!</h3>
              <p className="text-gray-600">
                Work on projects you&apos;re passionate about, surrounded by a
                supportive and energetic community, with plenty of free food and
                swag!
              </p>
            </div>
          </div>
        </div>

        {/* Hackathon Jargon Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center mb-8">
            <Brain className="h-8 w-8 text-[#008FAD] mr-3" />
            <h2 className="text-3xl font-bold">
              Hackathon Jargon: A Mini-Dictionary
            </h2>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-lg">API</dt>
                <dd className="text-gray-600">
                  Application Programming Interface. It&apos;s like a set of
                  building blocks that allows you to interact with other
                  software or services.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-lg">Stack</dt>
                <dd className="text-gray-600">
                  The set of technologies you&apos;re using to build your
                  project (e.g., a full-stack developer knows both front-end and
                  back-end technologies).
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-lg">MVP</dt>
                <dd className="text-gray-600">
                  Minimum Viable Product. The simplest version of your project
                  that solves the core problem.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-lg">Pitch</dt>
                <dd className="text-gray-600">
                  A short presentation where you explain your project to the
                  judges.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-lg">Swag</dt>
                <dd className="text-gray-600">
                  Free stuff! Companies often sponsor hackathons and give away
                  t-shirts, stickers, and other goodies.
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* BMC InnovateX Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center mb-8">
            <Rocket className="h-8 w-8 text-[#008FAD] mr-3" />
            <h2 className="text-3xl font-bold">Dive Deeper: BMC InnovateX</h2>
          </div>
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-xl mb-8">
            <h3 className="text-2xl font-semibold mb-4">
              What is BMC InnovateX?
            </h3>
            <p className="text-gray-600 mb-6">
              BMC InnovateX is an event where individuals and teams converge to
              collaboratively tackle challenges and develop groundbreaking
              projects within a set timeframe. Think of it as an intense burst
              of creativity and problem-solving.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-semibold mb-3">Why Participate?</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fuel Innovation</li>
                  <li>• Sharpen Your Skills</li>
                  <li>• Build Your Dream Team</li>
                  <li>• Expand Your Network</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-semibold mb-3">What You&apos;ll Get</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Career Guidance</li>
                  <li>• Industry Connections</li>
                  <li>• Recognition</li>
                  <li>• Valuable Experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Journey to Success Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center mb-8">
            <Target className="h-8 w-8 text[#008FAD] mr-3" />
            <h2 className="text-3xl font-bold">
              The InnovateX Journey: Phases to Success
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Phase 1: Registration
              </h3>
              <p className="text-gray-600">
                Your journey begins with a simple and streamlined online
                registration process.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Phase 2: Prototype Development
              </h3>
              <p className="text-gray-600">
                This intensive phase focuses on rapid development, iterative
                feedback, and continuous improvement.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Phase 3: Selection of Finalists
              </h3>
              <p className="text-gray-600">
                Judges will meticulously evaluate submissions based on
                innovation, technical execution, usability, and potential
                impact.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Phase 4: The Grand Finale
              </h3>
              <p className="text-gray-600">
                A 48-hour coding marathon challenging finalists with
                development, innovation, and dynamic project presentations.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#008FAD] text-white p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg mb-8">
              Join BMC InnovateX and be part of something extraordinary.
              Register now and take your first step towards becoming a hackathon
              ninja!
            </p>
            <Link
              className="cursor-pointer hober:scale-105 transition-all duration-300 ease-in-out"
              target="_blank"
              href="https://forms.gle/aEWGMtuE9ukRQHtv7"
            >
              <button className="bg-white disabled text-[#008FAD] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
