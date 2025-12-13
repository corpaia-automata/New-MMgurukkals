import Link from "next/link"
import Image from "next/image"
import { Heart, Sparkles, Users, Leaf } from "lucide-react"

export function WhatMakesUsDifferent() {
  const features = [
    {
      icon: Heart,
      title: "Promise",
      description:
        "We preserve authentic Ayurvedic techniques to detoxify, heal, and naturally restore balance throughout your entire body.",
      link: "/about",
    },
    {
      icon: Sparkles,
      title: "Value",
      description:
        "Our Kalari Marma treatments activate vital points to enhance flexibility, boost recovery, and rejuvenate your body.",
      link: "/services",
    },
    {
      icon: Users,
      title: "Benefit of Us",
      description:
        "Expert therapists deliver personalized care for deeper relaxation, faster recovery, and emotional well-being.",
      link: "/services",
    },
    {
      icon: Leaf,
      title: "Features",
      description:
        "We integrate Ayurveda, Kalari therapy, postnatal care, and wellness massages for complete mind-body healing.",
      link: "/about",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white via-green-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 font-fractul">
            What Makes Us <span className="text-green-600">Different</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Column - Two Blocks */}
          <div className="lg:col-span-1 space-y-8">
            {features.slice(0, 2).map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-green-50 rounded-full p-3 flex-shrink-0">
                    <feature.icon
                      size={24}
                      className="text-green-600"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 font-fractul">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center - Logo */}
          <div className="lg:col-span-1 flex justify-center items-center py-8 lg:py-0">
            <div className="relative">
              {/* Central Logo Circle */}
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-green-100 via-green-50 to-emerald-50 rounded-full flex items-center justify-center shadow-2xl border-8 border-white relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-4 left-4 w-16 h-16 bg-green-200/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-emerald-200/30 rounded-full blur-xl"></div>

                {/* Logo Image */}
                <div className="relative z-10 w-32 h-32 md:w-40 md:h-40">
                  <Image
                    src="/mm-minimal.png"
                    alt="MMGurukkals Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Two Blocks */}
          <div className="lg:col-span-1 space-y-8">
            {features.slice(2, 4).map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-green-50 rounded-full p-3 flex-shrink-0">
                    <feature.icon
                      size={24}
                      className="text-green-600"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 font-fractul">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
