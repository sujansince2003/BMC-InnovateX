"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              question: "Who can participate?",
              answer:
                "Anyone aged 18 and above can participate. Whether you're a student, professional, or enthusiast, all are welcome!",
            },
            {
              question: "Do I need a team?",
              answer:
                "Teams can have 2-4 members. Don't have a team? No worries! We'll have a team formation event before the hackathon.",
            },
            {
              question: "What should I bring?",
              answer:
                "Bring your laptop, charger, and any hardware you might need. We'll provide food, drinks, and a comfortable hacking space.",
            },
            {
              question: "Is there a participation fee?",
              answer:
                "Yes, we have a participation fee TBA per team. This covers food, drinks, and a comfortable hacking space.",
            },
            {
              question: "What about intellectual property?",
              answer:
                "All teams retain full ownership of their projects. However, we encourage open-source contributions.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openFaq === index ? (
                  <Minus className="h-5 w-5 text-indigo-600" />
                ) : (
                  <Plus className="h-5 w-5 text-indigo-600" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
