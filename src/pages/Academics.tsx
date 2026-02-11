import React, { type JSX } from "react";
import { Baby, BookOpen, School, GraduationCap } from "lucide-react";
import { HiArrowNarrowRight } from "react-icons/hi";

import higherSecondary from '../assets/higher-secondary.jpg'

interface AcademicLevel {
  title: string;
  icon: JSX.Element;
  grades: string;
  points: string[];
}

const academicLevels: AcademicLevel[] = [
  {
    title: "Pre-Primary",
    icon: <Baby className="w-10 h-10 text-accent" />,
    grades: "Nursery, LKG, UKG",
    points: [
      "Play-based learning",
      "Creativity & confidence",
      "Focus on basics",
    ],
  },
  {
    title: "Primary",
    icon: <BookOpen className="w-10 h-10 text-accent" />,
    grades: "Grade 1 – 5",
    points: [
      "Strong foundation in Math, Science & Language",
      "Activity-based learning",
      "Concept clarity & curiosity",
    ],
  },
  {
    title: "Secondary",
    icon: <School className="w-10 h-10 text-accent" />,
    grades: "Grade 6 – 10",
    points: [
      "Board exam preparation",
      "Focus on Science, Math & Computer",
      "Critical thinking & discipline",
    ],
   
  },
  {
    title: "Higher Secondary (+2)",
    icon: <GraduationCap className="w-10 h-10 text-accent" />,
    grades: "Science / Management / Humanities",
    points: [
      "Lab-based learning",
      "Career-oriented education",
      "Preparation for higher studies",
    ],
  
  },
];

const Academics: React.FC = () => {
  return (
    <main className="bg-secondary text-primary font-body">
          {/* Hero Banner */}
      <section
        className="relative h-100 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${higherSecondary})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-gray-200 z-10 text-3xl md:text-4xl font-heading font-bold">
          Academics
        </h1>
      </section>
      {/* Section 1: Academics Overview */}
      <section className="text-center py-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-heading font-bold mb-4">
          Our Academic Programs
        </h1>
        <p className="text-gray-600 text-lg">
          We provide a structured, student-centered academic journey from early
          childhood to higher secondary education, ensuring holistic development
          at every stage.
        </p>
      </section>

      {/* Section 2: Academic Levels */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {academicLevels.map((level, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition hover:scale-105 duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">{level.icon}</div>

              {/* Title & Grades */}
              <h3 className="text-xl font-heading font-semibold mb-1">{level.title}</h3>
              <p className="text-sm text-accent font-medium mb-4">{level.grades}</p>

              {/* Points */}
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                {level.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

              {/* CTA */}
              <button
                
                className="inline-flex items-center cursor-pointer mt-4 text-sm font-semibold text-accent hover:text-primary transition"
              >
                View Details
                <HiArrowNarrowRight className="ml-2 transform transition-transform duration-300 hover:translate-x-2" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Academics;
