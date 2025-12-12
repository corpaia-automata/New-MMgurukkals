"use client";

import React from "react";

type Tile = {
  id: number;
  title: string;
  subtitle: string;
  highlight?: boolean;
};

const tiles: Tile[] = [
  {
    id: 1,
    title: "Rooted & Personalised",
    subtitle: "Treatment Plans",
  },
  {
    id: 2,
    title: "4,000+ Happy",
    subtitle: "Recoveries",
  },
  {
    id: 3,
    title: "Authentic Kalari Marma",
    subtitle: "Expertise",
  },
  {
    id: 4,
    title: "Postnatal Care",
    subtitle: "Packages & Facilities",
  },
  {
    id: 5,
    title: "10+ Years of",
    subtitle: "Experience",
    highlight: true,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">


        {/* Heading */}
        <div className="text-center mb-16">
          <h4 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-fractul">
            Why Choose <span className="text-orange-500">MMgurukkals</span>
          </h4>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Decades of traditional Kalari Marma healing, refined with modern Ayurvedic science to help you recover naturally, safely, and effectively.
          </p>
        </div>

        {/* GRID LAYOUT FIXED → ORANGE TILE ON RIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-fr">
          {/* Row 1 - Left tiles */}
          <div className="h-full">
            <Card {...tiles[0]} />
          </div>
          <div className="h-full">
            <Card {...tiles[1]} />
          </div>

          {/* Row 1-2 - Orange highlighted tile spanning 2 rows */}
          <div className="row-span-2 h-full">
            <Card {...tiles[4]} big />
          </div>

          {/* Row 2 - Left tiles */}
          <div className="h-full">
            <Card {...tiles[2]} />
          </div>
          <div className="h-full">
            <Card {...tiles[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  title,
  subtitle,
  highlight,
  big,
}: {
  title: string;
  subtitle: string;
  highlight?: boolean;
  big?: boolean;
}) {
  return (
    <div
      className={`rounded-xl shadow-md transition-all duration-300 p-8 md:p-10 flex flex-col items-center justify-center text-center w-full h-full ${highlight ? "bg-orange-500 text-white" : "bg-emerald-500 text-white"
        } ${big ? "" : ""}`}
    >
      <p className="font-bold text-2xl md:text-3xl mb-2 leading-tight">
        {title}
      </p>
      <p
        className={`text-base md:text-lg font-normal ${highlight ? "text-orange-50" : "text-emerald-50"
          }`}
      >
        {subtitle}
      </p>
    </div>
  );
}
