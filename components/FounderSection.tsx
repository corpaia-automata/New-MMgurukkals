"use client";

import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="w-full py-12 md:py-16 px-4 sm:px-6 lg:px-8 rounded-xl">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch rounded-xl">

        {/* LEFT — IMAGE */}
        <div className="relative w-full h-[500px] sm:h-[400px] md:h-full md:min-h-[400px] overflow-hidden rounded-xl">
          <Image
            src="/founder.jpg"
            alt="Founder of MM Gurukkals"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* RIGHT — CONTENT */}
        <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-emerald-100 p-8 md:p-10 flex flex-col justify-center">
          {/* LOGO */}
          <div className="mb-6 flex justify-center md:justify-start">
            <Image
              src="/mm-minimal.png"
              alt="MM Gurukkals"
              width={100}
              height={100}
              className="object-contain w-32 h-32 sm:w-20 sm:h-20 md:w-24 md:h-24"
            />
          </div>

          {/* HEADING */}
          <h2 className="text-2xl md:text-3xl mb-4 font-fractul">
            Meet The <span className="text-orange-500">Founder</span>
          </h2>

          {/* MAIN TEXT */}
          <p className="text-neutral-700 leading-relaxed mb-3 text-base md:text-lg">
            MM Gurukkals was founded to preserve and advance the traditional Kalari Marma healing system passed down through our great-grandfather — a respected Gurukkal known for treating pain, injuries, and complex conditions through precise marma techniques, herbal knowledge, and deep Ayurvedic wisdom.
          </p>

          <p className="text-neutral-700 leading-relaxed mb-4 text-base md:text-lg">
            What began as a small traditional practice decades ago has grown into a trusted Ayurvedic hospital that blends ancestral healing with modern Ayurvedic science. Our commitment is simple:
            restore mobility, relieve pain, and help people heal naturally — without depending on unnecessary surgeries or long-term medication.
          </p>




          {/* FOUNDER NAME & TITLE */}
          <div className="mt-6">
            <p className="font-bold text-lg md:text-xl text-neutral-900">Dr Shoukath Ali (hc)</p>
            <p className="text-sm text-neutral-600 mt-1">Kalarimarmma & back pain specialist</p>
            <p className="text-sm text-neutral-600 mt-1">DAPT, BAT ,DTB ,DIP ,DCB (USA)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
