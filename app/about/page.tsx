import React from "react";
import { Building, Target, Trophy, Users } from "lucide-react";
import Image from "next/image";
const benefits = [
  "Helps to promote innovation and motivate developers.",
  "Helps in skill development by providing a competitive environment.",
  "Helps in team building by working in a collaborative concept.",
  "Provides networking opportunities by being in the room with skilled individuals and entrepreneurs.",
  "Provides environment to encourage prototype development.",
  "Builds and helps indulge in community engagement.",
  "Recognition of excellence with innovation awards.",
  "Offers career guidance from industry leaders.",
  "Increases community-companies bond and interaction.",
  "Empowers individuals for tech career pursuit.",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen mt-10 bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16">
          About BMC InnovateX
        </h1>

        {/* What is BMC InnovateX */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            What is BMC InnovateX?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            BMC InnovateX is an event where individuals or teams come together
            to collaboratively solve problems or develop innovative projects
            within a limited time frame, typically ranging from a few hours to a
            few days. Participants, often consisting of programmers, designers,
            and other professionals, work intensively to create software
            solutions, prototypes, or models that address specific challenges or
            opportunities. These challenges can vary widely, covering areas such
            as software development, hardware engineering, data analysis, social
            issues, or business innovation.
          </p>
          <h2 className="mb-2 text-gray-600 text-lg font-semibold">
            Event Objectives:
          </h2>
          <ul className="mb-8 space-y-1 text-gray-600  list-disc list-inside ">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Image
              width={400}
              height={200}
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=400&fit=crop&q=80"
              alt="Hackathon participants"
              className="rounded-lg shadow-md"
            />
            <Image
              width={400}
              height={200}
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=400&fit=crop&q=80"
              alt="Collaboration"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 max-w-4xl">
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-semibold">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To foster innovation and technological advancement by providing
                a platform where students can collaborate, learn, and create
                solutions that address real-world challenges while developing
                essential skills for their future careers.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Trophy className="h-8 w-8 text-indigo-600 mr-3" />
                <h2 className="text-2xl font-semibold">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become the leading collegiate hackathon in India, recognized
                for nurturing talent, promoting innovation, and creating a
                lasting impact on the tech community while bridging the gap
                between academia and industry.
              </p>
            </div>
          </div>
        </div>

        {/* Organizing Body */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Building className="h-8 w-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-semibold">
              Organizing Body: CSIT Association of BMC
            </h2>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl max-w-4xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-6">
              The Computer Science and Information Technology Association (CSIT)
              of Brihan Mumbai College is a student-run organization dedicated
              to promoting technical excellence and innovation. With a track
              record of organizing successful technical events, workshops, and
              competitions, CSIT brings together passionate individuals who
              share a common goal of advancing technology education and
              practical application.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  50+
                </div>
                <div className="text-gray-600">Events Organized</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  1000+
                </div>
                <div className="text-gray-600">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  10+
                </div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Event Highlights */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <Users className="h-8 w-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-semibold">
              Previous Event Highlights
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <Image
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=300&h=200&fit=crop&q=80"
                alt="2024 Winner"
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="font-semibold mb-2">InnovateX 2024</h3>
              <p className="text-gray-600">300+ Participants</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <Image
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop&q=80"
                alt="2023 Winner"
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="font-semibold mb-2">InnovateX 2023</h3>
              <p className="text-gray-600">250+ Participants</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl text-center">
              <Image
                width={200}
                height={200}
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=300&h=200&fit=crop&q=80"
                alt="2022 Winner"
                className="rounded-lg mb-4 mx-auto"
              />
              <h3 className="font-semibold mb-2">InnovateX 2022</h3>
              <p className="text-gray-600">200+ Participants</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
