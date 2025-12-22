"use client";

interface RecoveryPhase {
  phase: "Early" | "Mid" | "Advanced";
  phaseDescription: string;
  motherCare: string[];
  babyCare: string[];
}

const recoveryPhases: RecoveryPhase[] = [
  {
    phase: "Early",
    phaseDescription: "Initial recovery and stabilization period",
    motherCare: [
      "Gentle abdominal care and oil massages",
      "Restorative herbal baths",
      "Nutritional support and dietary guidance",
      "Lactation support and breastfeeding assistance",
      "Stress relief and relaxation therapies",
    ],
    babyCare: [
      "Safe environment for bonding",
      "Support for healthy feeding patterns",
      "Calm and nurturing space",
      "Gentle exposure to therapeutic environment",
    ],
  },
  {
    phase: "Mid",
    phaseDescription: "Building strength and restoring energy",
    motherCare: [
      "Progressive strengthening therapies",
      "Hormonal balance support",
      "Core muscle restoration",
      "Improved circulation and vitality",
      "Enhanced sleep quality support",
    ],
    babyCare: [
      "Continued bonding support",
      "Healthy growth environment",
      "Stable routine establishment",
      "Positive developmental influence",
    ],
  },
  {
    phase: "Advanced",
    phaseDescription: "Complete restoration and long-term wellness",
    motherCare: [
      "Full body strength restoration",
      "Emotional balance and mental clarity",
      "Complete physical recovery",
      "Long-term wellness foundation",
      "Confidence in motherhood journey",
    ],
    babyCare: [
      "Established healthy patterns",
      "Strong mother-baby connection",
      "Positive family foundation",
      "Supportive growth environment",
    ],
  },
];

export default function RecoveryPhasePrograms() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-fractul mb-4">
            Recovery Phase <span className="text-orange-500">Programs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our care is tailored to different phases of postnatal recovery, ensuring appropriate support at each stage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {recoveryPhases.map((phase, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6">
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-3">
                  {phase.phase} Phase
                </div>
                <p className="text-gray-600 text-sm italic">{phase.phaseDescription}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-primary">●</span> Mother-Focused Care
                  </h3>
                  <ul className="space-y-2">
                    {phase.motherCare.map((care, careIndex) => (
                      <li key={careIndex} className="text-gray-700 text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{care}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-primary">●</span> Baby-Focused Care
                  </h3>
                  <ul className="space-y-2">
                    {phase.babyCare.map((care, careIndex) => (
                      <li key={careIndex} className="text-gray-700 text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{care}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

