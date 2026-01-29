'use client'

import KalariTreatmentSection from '@/components/KalariTreatmentSection'
import { Navbar } from '@/components/navbar'
import Link from 'next/link'

export default function PrasavarakshaPage() {
  return (
    <>
      <Navbar />

      <main className="w-full">

        {/* HERO SECTION */}
        <section
          className="
            relative
            w-full
            min-h-[30rem]
            md:min-h-[35rem]
            flex
            items-center
            overflow-hidden
          "
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/kalari.webp')" }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/55" />

          <div
            className="
              relative
              z-10
              max-w-4xl
              px-6
              md:pl-16
              lg:pl-24
              text-left
              space-y-3
            "
          >
            {/* Eyebrow */}
            <p className="uppercase tracking-widest text-xs md:text-sm mt-10 text-white/80">
              Traditional Healing & Pain Relief
            </p>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-white leading-tight">
              Kalarimarma Chikilsa
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-white/85 leading-relaxed">
              Traditionol Kalari based therapy that relieves pain, heal injuries, and restore body strength through pricise marma point treatment
            </p>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="#consultation"
                className="
                  inline-flex
                  items-center
                  justify-center
                  bg-primary
                  text-white
                  px-4
                  py-3
                  rounded-md
                  text-sm
                  md:text-base
                  font-medium
                  transition-all
                  duration-300
                  hover:bg-green-800
                "
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </section>

        <KalariTreatmentSection/>

      </main>
    </>
  )
}
