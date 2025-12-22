"use client";

export default function BenefitsTable() {
  const motherBenefits = [
    "Enhanced physical recovery and strength restoration",
    "Hormonal balance and emotional stability support",
    "Improved sleep quality and energy levels",
    "Abdominal muscle tone and core strength",
    "Reduced back pain and body aches",
    "Better milk production and breastfeeding support",
    "Stress relief and mental clarity",
    "Improved digestion and metabolism",
  ];

  const babyBenefits = [
    "Gentle care in a calm, nurturing environment",
    "Support for healthy growth and development",
    "Strengthened mother-baby bonding",
    "Positive influence from mother's improved well-being",
    "Safe, natural environment exposure",
    "Enhanced breastfeeding experience",
    "Better sleep patterns through mother's balance",
    "Healthy family foundation",
  ];

  return (
    <section className="py-16 md:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-fractul mb-4">
            Comprehensive <span className="text-orange-500">Benefits</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our postnatal care program offers benefits for both mother and baby, supporting holistic recovery and well-being.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-primary/10">
                  <th className="px-6 py-4 text-left text-xl font-semibold text-gray-900 border-r border-gray-200 w-1/2">
                    Benefits for Mother
                  </th>
                  <th className="px-6 py-4 text-left text-xl font-semibold text-gray-900 w-1/2">
                    Benefits for Baby
                  </th>
                </tr>
              </thead>
              <tbody>
                {motherBenefits.map((benefit, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 text-gray-700 border-r border-gray-200">
                      {benefit}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {babyBenefits[index]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-primary">
              Benefits for Mother
            </h3>
            <ul className="space-y-3">
              {motherBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="text-primary mt-1">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-primary">
              Benefits for Baby
            </h3>
            <ul className="space-y-3">
              {babyBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="text-primary mt-1">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

