import React, { type JSX } from "react";
import { BookOpen, School, GraduationCap } from "lucide-react";
import { HiArrowNarrowRight } from "react-icons/hi";

interface OverviewCard {
  title: string;
  icon: JSX.Element;
  description: string;
}

const overviewCards: OverviewCard[] = [
  {
    title: "Primary School",
    icon: <BookOpen className="w-10 h-10 text-accent" />,
    description:
      "Grade 1–5: Building strong foundations in Math, Science, Language, and holistic growth.",

  },
  {
    title: "Secondary School",
    icon: <School className="w-10 h-10 text-accent" />,
    description:
      "Grade 6–10: Preparing students for board exams with focus on academics, critical thinking, and personal growth.",
  },
  {
    title: "Higher Secondary (+2)",
    icon: <GraduationCap className="w-10 h-10 text-accent" />,
    description:
      "Science / Management / Humanities: Career-oriented learning and preparation for higher education.",

  },
];

const AcademicsOverview: React.FC = () => {
  return (
    <section className="bg-secondary py-6 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
          Academics Overview
        </h2>
        <p className="text-gray-700 text-sm md:text-md leading-6 font-semibold">
          Our school offers structured academic programs at every level to ensure holistic development. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta eos iste nobis, quas laudantium maiores, cum ratione, est obcaecati inventore mollitia.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {overviewCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{card.icon}</div>
            <h3 className="text-xl font-heading font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 font-body text-sm mb-4">{card.description}</p>

            <button
              
              className="inline-flex items-center mt-2 text-sm font-semibold text-accent hover:text-primary transition"
            >
              View Details
              <HiArrowNarrowRight className="ml-2 transform transition-transform duration-300 hover:translate-x-2" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicsOverview;
