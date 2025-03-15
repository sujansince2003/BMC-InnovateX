import { ChevronRight } from "lucide-react";

const Heroland = () => {
  return (
    <header className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Innovation Unleashed 2025
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            48 hours of coding, creativity, and collaboration. Join us in
            building the future!
          </p>
          <div className="flex gap-4 justify-center">
            <a href="  ">
              <button className="bg-[#008FAD] cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center">
                View Proposal <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </a>

            <a href="https://forms.gle/23ercnXckkeY8T2n6">
              <button className="border-2 cursor-pointer border-gray-800 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Contribute As a Volunteer
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Heroland;
