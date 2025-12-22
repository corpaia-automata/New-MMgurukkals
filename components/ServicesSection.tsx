"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const services = [
  {
    title: "Kalarimarma Chikilsa",
    subtitle: "Traditional Healing & Pain Relief",
    description:
      "Traditional Kalari-based therapy that relieves pain, heals injuries, and restores body strength through precise Marma point treatment.",
    image: "/kalari.webp",
    url: "/services", // Update this when you create a dedicated Kalari page
  },
  {
    title: "Prasava Raksha",
    subtitle: "Postnatal Care & Recovery",
    description:
      "Ayurvedic postnatal care for mothers and babies to regain strength, balance hormones, and support natural recovery.",
    image: "/prasava.webp",
    url: "/postnatal-care",
  },
  {
    title: "Premium Kalari Marma Ayurvedic Massage",
    subtitle: "Rejuvenation & Wellness",
    description:
      "Rejuvenating full-body massage using herbal oils to relax the mind, detox the body, and refresh your energy.",
    image: "/premium.webp",
    url: "/services", // Update this when you create a dedicated Premium Massage page
  },
];

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState<boolean[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setCardVisible((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardRefs.current.forEach((ref) => {
      if (ref) {
        cardObserver.observe(ref);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardRefs.current.forEach((ref) => {
        if (ref) {
          cardObserver.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      {/* Section Header */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <div
          className={`text-center transition-all duration-600 ease-out ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
            }`}
        >
          <h4 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-fractul">
            Our <span className="text-orange-500">Services</span>
          </h4>
          <p className="text-lg md:text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
            At MM Gurukkals Ayurveda Hospital, we blend ancient Ayurvedic wisdom
            with modern healing science to restore balance, strength, and peace.
            Our authentic treatments naturally relieve pain, rejuvenate the body,
            and promote lasting wellness.
          </p>
        </div>
      </div>

      {/* Full-Width Three Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.url}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`group relative h-[600px] md:h-[700px] overflow-hidden block cursor-pointer ${cardVisible[index]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
            style={{
              transitionDelay: `${index * 200}ms`,
            }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-gray-200">
              {/* Loading Skeleton */}
              {!imagesLoaded[index] && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 animate-pulse" />
              )}
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                className={`object-cover transition-all duration-700 group-hover:scale-110 ${imagesLoaded[index] ? "opacity-100" : "opacity-0"
                  }`}
                sizes="(max-width: 768px) 100vw, 33vw"
                onLoad={() => {
                  setImagesLoaded((prev) => {
                    const newState = [...prev];
                    newState[index] = true;
                    return newState;
                  });
                }}
                onError={() => {
                  setImagesLoaded((prev) => {
                    const newState = [...prev];
                    newState[index] = true;
                    return newState;
                  });
                }}
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 text-left z-10">
              {/* Subtitle */}
              <p className="text-white/80 text-sm md:text-base font-medium uppercase tracking-wider mb-3 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                {service.subtitle}
              </p>

              {/* Main Title */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight transition-all duration-500 group-hover:translate-x-2 font-fractul">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-sm opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
