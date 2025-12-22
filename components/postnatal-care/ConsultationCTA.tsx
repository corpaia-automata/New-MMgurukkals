"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ConsultationCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left Side - Doctor Image */}
            <div className="relative h-[400px] md:h-auto">
              <Image
                src="/female-ayurvedic-doctor-professional.jpg"
                alt="Ayurvedic Doctor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col justify-center p-8 md:p-12 bg-white">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-fractul">
                Begin Your Recovery Journey
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our experienced Ayurvedic practitioners are here to guide you through every step of your postnatal recovery. We understand the unique needs of new mothers and provide compassionate, personalized care in a calm and nurturing environment.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                Schedule a consultation to discuss how our Prasavaraksha program can support your healing journey and help you regain strength, balance, and well-being.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto px-8 py-6 text-lg"
                >
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

