
import { BookOpen, UserCheck, Home, Award } from "lucide-react";
import type { JSX } from "react";

interface Card {
  icon: JSX.Element;
  title: string;
  description: string;
}

const cards: Card[] = [
  {
    icon: <BookOpen size={40} className="text-accent" />,
    title: "Quality Education",
    description: "We provide top-notch education for a brighter future.",
  },
  {
    icon: <UserCheck size={40} className="text-accent" />,
    title: "Experienced Teachers",
    description: "Our teachers are skilled and highly experienced.",
  },
  {
    icon: <Home size={40} className="text-accent" />,
    title: "Modern Facilities",
    description: "State-of-the-art classrooms and labs for students.",
  },
  {
    icon: <Award size={40} className="text-accent" />,
    title: "Achievements",
    description: "Recognized for excellence in academics and sports.",
  },
];

const InfoCards = () => {
  return (
    <section className="py-6 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 font-body">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
