"use client";

import { Award, FileCheck, Star, LucideIcon } from "lucide-react";

interface Certification {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const certifications: Certification[] = [
  {
    title: "Ayurvedic Excellence",
    description: "Recognized for authentic Ayurvedic practices and traditional healing methods",
    Icon: Award,
  },
  {
    title: "Quality Care Standards",
    description: "Committed to maintaining highest standards in postnatal care and patient safety",
    Icon: FileCheck,
  },
  {
    title: "Patient Trust",
    description: "Trusted by families for compassionate, effective postnatal care services",
    Icon: Star,
  },
];

export default function Certifications() {
  return (
    <section className="py-16 md:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-fractul mb-4">
            Recognition & <span className="text-orange-500">Credibility</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence in Ayurvedic postnatal care is reflected in our standards and practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-100"
            >
              <div className="flex justify-center mb-4 text-primary">
                <cert.Icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-fractul">
                {cert.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

