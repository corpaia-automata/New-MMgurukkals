"use client";

interface PackageFeature {
  title: string;
  description: string;
  icon: string;
}

const packageFeatures: PackageFeature[] = [
  {
    title: "Customized Care Plans",
    description:
      "Every mother's postnatal journey is unique. Our experienced practitioners create personalized care plans tailored to individual needs, recovery patterns, and specific requirements, ensuring the most appropriate support for each mother and baby.",
    icon: "🎯",
  },
  {
    title: "Doctor-Guided Treatment Approach",
    description:
      "All treatments are supervised and guided by our experienced Ayurvedic physicians. Regular consultations ensure that care evolves with your recovery progress, with professional oversight at every step of your healing journey.",
    icon: "👩‍⚕️",
  },
  {
    title: "Mother & Baby Integrated Care",
    description:
      "Our approach recognizes that the well-being of mother and baby are interconnected. We provide comprehensive support that nurtures both, creating a harmonious environment that supports bonding, recovery, and healthy development.",
    icon: "🤱",
  },
];

export default function PackagesOverview() {
  return (
    <section className="py-16 md:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-fractul mb-4">
            Our Care <span className="text-orange-500">Approach</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our postnatal care packages are designed with a comprehensive, integrated approach to support both mother and baby.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packageFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-fractul">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

