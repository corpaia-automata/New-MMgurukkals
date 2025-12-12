"use client";

import Link from "next/link";
import Image from "next/image";
import { Leaf } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-500 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 md:p-12 items-center">
            {/* Left Side - Text Content (2/3 width) */}
            <div className="lg:col-span-2 space-y-2">
              <p className="text-emerald-100 text-sm md:text-base font-medium uppercase tracking-wide">
                Book Your Appointment Now
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Take The First Step Towards{" "}
                <span className="text-white" style={{ fontFamily: "var(--font-fractul)" }}>
                  Wellness
                </span>
              </h2>
              <p className="text-emerald-50 text-base md:text-lg leading-relaxed max-w-2xl">
                Experience Ayurvedic care with personalized treatments for your body and soul. Step into wellness with a{" "}
                <span className="text-orange-300 font-semibold">single click</span>.
              </p>
              {/* Button - Hidden on small screens, shown on large screens */}
              <div className="hidden lg:block">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-amber-50 hover:bg-amber-100 text-amber-900 px-6 py-4 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <span>Book My Appointment Now</span>
                  <Leaf className="w-5 h-5 text-emerald-700" />
                </Link>
              </div>
            </div>

            {/* Right Side - Icon and Button (1/3 width) */}
            <div className="lg:col-span-1 flex flex-col items-center space-y-6">
              {/* Circular Icon with Logo */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center mx-auto">
                <div className="w-full h-full bg-white rounded-full shadow-lg flex items-center justify-center p-4">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/mm-minimal.png"
                      alt="MM Gurukkals Logo"
                      width={220}
                      height={220}
                      className="object-contain"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        margin: "auto"
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Button - Shown on small screens, hidden on large screens */}
              <div className="lg:hidden w-full flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-amber-50 hover:bg-amber-100 text-amber-900 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <span>Book My Appointment Now</span>
                  <Leaf className="w-4 h-4 text-emerald-700" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


