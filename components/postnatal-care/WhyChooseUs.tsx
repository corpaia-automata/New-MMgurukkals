"use client";

import { Leaf, Users, Shield, Heart, LucideIcon } from "lucide-react";

interface WhyChooseUsFeature {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const features: WhyChooseUsFeature[] = [
  {
    title: "Ayurvedic Lineage",
    description: "Rooted in centuries of traditional Ayurvedic wisdom and authentic healing practices",
    Icon: Leaf,
  },
  {
    title: "Experienced Doctors",
    description: "Highly qualified Ayurvedic physicians with extensive experience in postnatal care",
    Icon: Users,
  },
  {
    title: "Safe Herbal Therapies",
    description: "Gentle, natural treatments using carefully selected herbs and traditional methods",
    Icon: Shield,
  },
  {
    title: "Calm Healing Environment",
    description: "Serene, nurturing space designed to promote relaxation, recovery, and bonding",
    Icon: Heart,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-fractul mb-4">
            Why Choose MM Gurukkals for Your{" "}
            <span className="text-orange-500">Postnatal Care</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine traditional Ayurvedic expertise with compassionate care to support your postnatal recovery journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4 text-primary">
                <feature.Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-fractul">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

