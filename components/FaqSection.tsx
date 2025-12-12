"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Kalari Marma Chikilsa?",
    answer:
      "Kalari Marma Chikilsa is a traditional Kerala treatment focused on marma points (vital spots). It helps relieve pain, heal injuries, and restore body energy flow through precise pressure point therapy.",
  },
  {
    question: "What kind of services do you provide?",
    answer:
      "We offer comprehensive Ayurvedic treatments including Kalari Marma Chikilsa, Prasava Raksha (postnatal care), Premium Ayurvedic Massage, rejuvenation therapies, and personalized wellness programs tailored to individual needs.",
  },
  {
    question: "Who are MM Gurukkals' treatments designed for?",
    answer:
      "Our treatments are designed for individuals of all ages seeking natural healing, pain relief, and holistic wellness. We specialize in helping those with chronic pain, injuries, postnatal recovery, stress-related conditions, and anyone looking to restore balance through authentic Ayurvedic care.",
  },
  {
    question: "Do you provide personalized solutions?",
    answer:
      "Yes, absolutely. Each treatment is customized based on your unique constitution (Prakriti), current health condition, and specific needs. Our certified practitioners conduct thorough consultations to create personalized treatment plans.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy. Simply book a consultation through our website or call us directly. During your first visit, our practitioner will assess your condition, discuss your health goals, and recommend the most suitable treatment plan for you.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Header/Introduction */}
          <div className="space-y-6">
            <h4 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-fractul">
              Frequently Asked{" "}
              <span className="text-orange-600">
                Questions
              </span>
            </h4>
            <div className="text-gray-600 text-lg leading-relaxed">
              <p>Find answers to our most frequently asked questions.</p>
              <p>Still have questions?</p>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Question Row */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left gap-4"
                >
                  <span className="text-base md:text-lg font-medium text-gray-900 flex-1">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-green-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
