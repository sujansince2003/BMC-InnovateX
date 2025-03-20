"use client";
import { Award } from "lucide-react";

export default function EnhancedPrizesV2() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Prizes & Rewards
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compete for exciting prizes and recognition in our hackathon.
            Winners will receive cash prizes and exclusive opportunities.
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <MainPrizeCard
            value="₹50,000"
            label="First Prize"
            color="#FFB800"
            position="1"
          />
          <MainPrizeCard
            value="₹30,000"
            label="Second Prize"
            color="#B4B9C7"
            position="2"
          />
          <MainPrizeCard
            value="₹15,000"
            label="Third Prize"
            color="#FF8A00"
            position="3"
          />
        </div>

        {/* Category Heading */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Special Category Winners
          </h3>
          <p className="text-gray-600">Each category winner receives ₹5,000</p>
        </div>

        {/* Category Prizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <CategoryCard category="Best AI/ML Solution" />
          <CategoryCard category="Best Web3 Project" />
          <CategoryCard category="Most Innovative Idea" />
          <CategoryCard category="Best UI/UX Design" />
          <CategoryCard category="Best Social Impact" />
        </div>
      </div>
    </section>
  );
}

interface MainPrizeCardProps {
  value: string;
  label: string;
  color: string;
  position: string;
}

function MainPrizeCard({ value, label, color, position }: MainPrizeCardProps) {
  return (
    <div
      className={`rounded-xl p-8 flex flex-col items-center justify-center shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 relative overflow-hidden h-[260px]`}
      style={{
        borderColor: color,
        background: `linear-gradient(to bottom, ${color}10, white)`,
      }}
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-gray-50 opacity-50 rounded-full -mt-10 -mr-10"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gray-50 opacity-50 rounded-full -mb-8 -ml-8"></div>

      <div className="mb-6" style={{ color: color }}>
        <GiftIcon />
      </div>
      <h3 className="text-3xl font-bold text-gray-800 mb-2">{value}</h3>
      <p className="text-gray-600 text-lg">{label}</p>

      <div className="absolute top-4 right-4">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold`}
          style={{ backgroundColor: color }}
        >
          {position}
        </div>
      </div>
    </div>
  );
}

interface CategoryCardProps {
  category: string;
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-[#0A9AAB] flex flex-col items-center text-center">
      <div className="mb-4 text-[#0A9AAB]">
        <Award className="w-10 h-10" />
      </div>
      <h4 className="font-semibold text-gray-800">{category}</h4>
      <p className="text-[#0A9AAB] font-bold mt-2">₹5,000</p>
    </div>
  );
}

function GiftIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 12V22H4V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 7H2V12H22V7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22V7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
