import {
  Presentation,
  Lightbulb,
  Users,
  Palette,
  Leaf,
  Code,
  TrendingUp,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function EvaluationCriteria() {
  const criteria = [
    {
      title: "Innovation & Problem Solving Impact",
      percentage: 35,
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      description:
        "Uniqueness of solution, problem-solution fit, and potential impact",
      color: "bg-primary",
    },
    {
      title: "Technology Used",
      percentage: 15,
      icon: <Code className="w-6 h-6 text-primary" />,
      description: "Technical complexity, code quality, and implementation",
      color: "bg-primary",
    },
    {
      title: "Presentation",
      percentage: 10,
      icon: <Presentation className="w-6 h-6 text-primary" />,
      description: "Demo quality, pitch effectiveness, and documentation",
      color: "bg-primary",
    },
    {
      title: "Teamwork & Collaboration",
      percentage: 10,
      icon: <Users className="w-6 h-6 text-primary" />,
      description:
        "Team dynamics, role distribution, and collaborative approach",
      color: "bg-primary",
    },
    {
      title: "UI/UX",
      percentage: 10,
      icon: <Palette className="w-6 h-6 text-primary" />,
      description:
        "Design quality, user experience, and interface intuitiveness",
      color: "bg-primary",
    },
    {
      title: "Sustainability",
      percentage: 10,
      icon: <Leaf className="w-6 h-6 text-primary" />,
      description: "Environmental considerations and long-term sustainability",
      color: "bg-primary",
    },
    {
      title: "Scalability & Future Potential",
      percentage: 10,
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      description: "Growth potential, market viability, and scalability",
      color: "bg-primary",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-16 px-4 sm:px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Evaluation Criteria
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Projects will be evaluated based on the following criteria, with a
          total of 100 possible marks.
        </p>
      </div>

      {/* Mobile view - cards */}
      <div className="md:hidden space-y-4 mb-8">
        {criteria.map((criterion, index) => (
          <Card key={index} className="border-0 shadow-md overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-full bg-gray-50">
                  {criterion.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{criterion.title}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-gray-600">Score weight</span>
                    <span className="font-semibold text-lg">
                      {criterion.percentage}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div
                  className={`h-2.5 rounded-full ${criterion.color}`}
                  style={{ width: `${criterion.percentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">{criterion.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Desktop view - table */}
      <div className="hidden md:block overflow-hidden rounded-xl shadow-md mb-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Criteria
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Description
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 w-32">
                Weight
              </th>
            </tr>
          </thead>
          <tbody>
            {criteria.map((criterion, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-6 py-4 border-t border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-white shadow-sm">
                      {criterion.icon}
                    </div>
                    <span className="font-medium">{criterion.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 border-t border-gray-200">
                  {criterion.description}
                </td>
                <td className="px-6 py-4 border-t border-gray-200">
                  <div className="flex flex-col items-center">
                    <span className="font-semibold text-lg mb-2">
                      {criterion.percentage}%
                    </span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${criterion.color}`}
                        style={{ width: `${criterion.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
            <tr className="bg-gray-50">
              <td
                colSpan={2}
                className="px-6 py-4 border-t border-gray-200 font-semibold"
              >
                Total
              </td>
              <td className="px-6 py-4 border-t border-gray-200">
                <div className="flex flex-col items-center">
                  <span className="font-bold text-lg mb-2">100%</span>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full bg-[#0A9AAB]"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <Card className="border-0 shadow-md bg-gradient-to-r from-[#0A9AAB]/10 to-[#0A9AAB]/5 mb-8">
        <CardContent className="p-6 flex items-center gap-4">
          <div className="p-3 rounded-full bg-white shadow-sm">
            <Clock className="w-6 h-6 text-[#0A9AAB]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-1">Presentation Time</h3>
            <p className="text-gray-700">
              7 minutes for presentation + 5 minutes for judge&apos;s questions
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
