import React from "react";
import { Shield, Users, AlertTriangle, Phone } from "lucide-react";

export default function CodeOfConductPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16">
          Code of Conduct
        </h1>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-[#008FAD] mr-3" />
              <h2 className="text-2xl font-semibold">Introduction</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              CSIT Association of BMC (CSITABMC) is committed to fostering a
              respectful, inclusive, and professional environment for all
              students, members, and participants. This Code of Conduct outlines
              the expected behaviors and responsibilities to ensure a positive
              experience for everyone.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold mb-8">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Integrity",
                description:
                  "Uphold honesty and transparency in all activities.",
              },
              {
                title: "Respect",
                description:
                  "Treat everyone with dignity, regardless of background, beliefs, or identity.",
              },
              {
                title: "Collaboration",
                description:
                  "Encourage teamwork, knowledge sharing, and support among peers.",
              },
              {
                title: "Inclusivity",
                description:
                  "Ensure equal opportunities for all members, free from discrimination or harassment.",
              },
              {
                title: "Professionalism",
                description:
                  "Maintain ethical behavior in communication, participation, and engagements.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* General Expectations */}
          <section>
            <div className="flex items-center mb-6">
              <Users className="h-6 w-6 text-[#008FAD] mr-2" />
              <h2 className="text-2xl font-semibold">General Expectations</h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <ul className="space-y-3 text-gray-600">
                <li>
                  • All participants, mentors, judges, organizers, and
                  volunteers must behave professionally and respectfully.
                </li>
                <li>
                  • Harassment, discrimination, or inappropriate behavior in any
                  form will not be tolerated.
                </li>
                <li>
                  • Respect the event&apos;s rules, schedule, and instructions
                  given by organizers.
                </li>
              </ul>
            </div>
          </section>

          {/* Inclusivity & Respect */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Inclusivity & Respect
            </h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <ul className="space-y-3 text-gray-600">
                <li>
                  • Treat everyone with dignity and respect regardless of
                  gender, age, disability, ethnicity, sexual orientation,
                  religion, or background.
                </li>
                <li>
                  • Offensive language, slurs, or exclusionary jokes are not
                  acceptable.
                </li>
                <li>
                  • Be open to diverse ideas and constructive discussions.
                </li>
              </ul>
            </div>
          </section>

          {/* Zero Tolerance for Harassment */}
          <section>
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-6 w-6 text-[#008FAD] mr-2" />
              <h2 className="text-2xl font-semibold">
                Zero Tolerance for Harassment
              </h2>
            </div>
            <div className="bg-red-50 p-6 rounded-xl">
              <ul className="space-y-3 text-gray-600">
                <li>
                  • Harassment includes offensive verbal comments, intimidation,
                  stalking, unwanted attention, inappropriate physical contact,
                  or use of explicit imagery.
                </li>
                <li>
                  • Any participant violating this policy will face immediate
                  removal from the event.
                </li>
                <li>
                  • If you experience or witness harassment, report it to the
                  event staff immediately.
                </li>
              </ul>
            </div>
          </section>

          {/* Integrity & Fair Play */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Integrity & Fair Play
            </h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <ul className="space-y-3 text-gray-600">
                <li>
                  • Plagiarism, cheating, or unauthorized use of another
                  team&apos;s work is strictly prohibited.
                </li>
                <li>
                  • Participants must disclose any external help received.
                </li>
                <li>
                  • Judging will be fair, and all decisions made by the panel
                  are final.
                </li>
              </ul>
            </div>
          </section>

          {/* Use of Resources & Facilities */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Use of Resources & Facilities
            </h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <ul className="space-y-3 text-gray-600">
                <li>
                  • Treat event facilities, provided hardware, and software
                  responsibly.
                </li>
                <li>
                  • Do not tamper with or damage equipment, furniture, or
                  infrastructure.
                </li>
                <li>
                  • Clean up after yourself and dispose of waste properly.
                </li>
              </ul>
            </div>
          </section>

          {/* Responsible Use of Technology */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Responsible Use of Technology
            </h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <ul className="space-y-3 text-gray-600">
                <li>
                  • No hacking, exploiting vulnerabilities, or unethical
                  activities.
                </li>
                <li>
                  • Projects must align with ethical guidelines and avoid
                  harmful intent.
                </li>
                <li>
                  • Do not attempt to breach security or access restricted
                  areas.
                </li>
              </ul>
            </div>
          </section>

          {/* Reporting Issues */}
          <section>
            <div className="flex items-center mb-6">
              <Phone className="h-6 w-6 text-[#008FAD] mr-2" />
              <h2 className="text-2xl font-semibold">Reporting Issues</h2>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl">
              <ul className="space-y-3 text-gray-600">
                <li>
                  • If you experience or witness any violations of this Code of
                  Conduct, immediately report them to the event organizers.
                </li>
                <li>
                  • Reports will be handled with confidentiality and necessary
                  action will be taken.
                </li>
                <li>
                  • Emergency contact information will be provided at the event.
                </li>
              </ul>
            </div>
          </section>

          {/* Consequences */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Consequences of Violations
            </h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <ul className="space-y-3 text-gray-600">
                <li>
                  • Violating any rules may result in warnings,
                  disqualification, or expulsion from the event.
                </li>
                <li>
                  • Serious offenses will be reported to relevant authorities if
                  necessary.
                </li>
              </ul>
            </div>
          </section>

          {/* Acknowledgment */}
          <section>
            <div className="bg-[#008FAD] text-white p-8 rounded-xl text-center">
              <h2 className="text-2xl font-semibold mb-4">Acknowledgment</h2>
              <p className="leading-relaxed">
                By participating in BMC InnovateX, you agree to abide by this
                Code of Conduct and contribute to a positive and professional
                environment. Let&apos;s ensure a safe, fair, and inspiring event
                for everyone!
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
