"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is Prasavaraksha safe for new mothers and babies?",
    answer:
      "Yes, Prasavaraksha is a traditional, gentle approach designed specifically for postnatal recovery. All treatments are supervised by experienced Ayurvedic physicians and are adapted to individual needs. The therapies use natural, safe methods that have been practiced for centuries in Ayurvedic tradition.",
  },
  {
    question: "Are the treatments supervised by qualified doctors?",
    answer:
      "Absolutely. All treatments are guided and supervised by our experienced Ayurvedic physicians. Regular consultations ensure that your care plan is appropriate for your recovery stage, and any adjustments are made with professional oversight.",
  },
  {
    question: "Can I bring my baby during treatment sessions?",
    answer:
      "Yes, our postnatal care program is designed to accommodate both mother and baby. The environment is calm and nurturing, and we provide support for bonding and care during your recovery process.",
  },
  {
    question: "How does Ayurvedic postnatal care differ from modern approaches?",
    answer:
      "Ayurvedic postnatal care, Prasavaraksha, takes a holistic approach that addresses physical recovery, hormonal balance, emotional well-being, and the mother-baby bond simultaneously. It uses traditional therapies, herbal support, and natural methods to restore balance and strength, focusing on complete healing rather than just symptom management.",
  },
  {
    question: "When should I start postnatal care after delivery?",
    answer:
      "The timing can vary based on individual circumstances and delivery type. We recommend consulting with our practitioners to determine the best time to begin your postnatal care program, which can be tailored to your specific recovery needs and timeline.",
  },
  {
    question: "What should I expect during a typical treatment session?",
    answer:
      "Treatment sessions may include gentle oil massages, herbal applications, relaxation therapies, nutritional guidance, and support for breastfeeding and bonding. Each session is personalized based on your recovery phase and specific needs, always in a calm, supportive environment.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-fractul mb-4">
            Customers' Major Concerns and Common Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to frequently asked questions about our Prasavaraksha postnatal care program.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left gap-4 p-5 md:p-6"
              >
                <span className="text-base md:text-lg font-semibold text-gray-900 flex-1 font-fractul">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

