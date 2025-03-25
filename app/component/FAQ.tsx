"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
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
];

export default function FAQ() {
  return (
    <section className="pb-16 bg-muted/50">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-6xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium py-4 px-1">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-1 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
