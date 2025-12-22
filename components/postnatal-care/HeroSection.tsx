"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Users, CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[500px] md:min-h-[720px] flex items-center justify-center py-12 md:py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/prasava.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center py-16 md:py-20 w-full">
        {/* Subtitle */}
        <p className="text-sm md:text-base mb-4 text-white/90 uppercase tracking-wider">
          Traditional Ayurvedic Postnatal Care
        </p>

        {/* Main Title */}
        <h1 className="font-fractul text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
          Prasavaraksha
          <br />
          Postnatal Care Treatment
        </h1>

        {/* Description (max 3 lines) */}
        <p className="text-lg md:text-xl mb-8 text-white/95 text-balance max-w-3xl mx-auto leading-relaxed">
          Complete Ayurvedic postnatal care system designed to restore a mother's strength after childbirth,
          promote hormonal balance, support emotional well-being, and nurture both mother and newborn.
        </p>

        {/* Primary CTA */}
        <div className="mb-12">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200 px-8 py-6 text-lg"
            >
              Book a Consultation
            </Button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-12">
          <div className="flex items-center gap-2 text-white/90">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm md:text-base">Safe & Monitored</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-sm md:text-base">Caring Environment</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm md:text-base">Expert Guidance</span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="text-sm md:text-base">Proven Results</span>
          </div>
        </div>
      </div>
    </section>
  );
}

