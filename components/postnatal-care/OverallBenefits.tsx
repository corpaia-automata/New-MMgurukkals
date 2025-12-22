"use client";

export default function OverallBenefits() {
  const motherBenefits = [
    {
      title: "Physical Recovery",
      items: [
        "Restoration of abdominal strength and muscle tone",
        "Improved circulation and energy levels",
        "Reduced body aches and back pain",
        "Enhanced flexibility and mobility",
      ],
    },
    {
      title: "Hormonal Balance",
      items: [
        "Support for natural hormonal regulation",
        "Improved mood and emotional stability",
        "Better sleep patterns",
        "Reduced stress and anxiety",
      ],
    },
    {
      title: "Breastfeeding Support",
      items: [
        "Enhanced milk production",
        "Improved lactation quality",
        "Better feeding comfort",
        "Support for feeding challenges",
      ],
    },
    {
      title: "Long-term Wellness",
      items: [
        "Foundation for lasting health",
        "Improved digestive function",
        "Enhanced immunity",
        "Better overall vitality",
      ],
    },
  ];

  const babyBenefits = [
    {
      title: "Healthy Development",
      items: [
        "Positive environment for growth",
        "Support for healthy patterns",
        "Stable and nurturing care",
        "Foundation for well-being",
      ],
    },
    {
      title: "Bonding & Connection",
      items: [
        "Enhanced mother-baby bonding",
        "Calm and secure environment",
        "Supportive family foundation",
        "Positive emotional connection",
      ],
    },
    {
      title: "Feeding Support",
      items: [
        "Better breastfeeding experience",
        "Improved feeding patterns",
        "Enhanced nutrition absorption",
        "Support for healthy growth",
      ],
    },
    {
      title: "Future Well-being",
      items: [
        "Positive developmental influence",
        "Healthy routine establishment",
        "Supportive care patterns",
        "Foundation for lifelong health",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-fractul mb-4">
            Overall <span className="text-orange-500">Benefits</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive approach provides lasting benefits for both mother and baby.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Mother Benefits Column */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 font-fractul text-center lg:text-left">
              Benefits for Mother
            </h3>
            <div className="space-y-6">
              {motherBenefits.map((category, index) => (
                <div key={index} className="bg-[#faf8f5] rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-primary mb-4">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Baby Benefits Column */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 font-fractul text-center lg:text-left">
              Benefits for Baby
            </h3>
            <div className="space-y-6">
              {babyBenefits.map((category, index) => (
                <div key={index} className="bg-[#faf8f5] rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-primary mb-4">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

