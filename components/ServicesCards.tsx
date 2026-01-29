import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Kalarimarma Chikilsa",
    image: "/kalari.webp",
    slug: "/kalarimarma-chikilsa",
    description:
      "The ancient Indian medical system focuses on a natural and holistic approach to physical and mental health. Our treatments aim to eliminate toxins, balance doshas, and strengthen immunity through classical Ayurvedic therapies.",
  },
  {
    title: "Prasava Raksha",
    image: "/prasava.webp",
    slug: "/postnatal-care",
    description:
      "Kalari Chikitsa is a traditional musculoskeletal treatment system developed in Kerala. Originally used for warriors, it is now highly effective for treating modern-day pain, injuries, and mobility issues.",
  },
  {
    title: "Premium Ayurvedic Kalari Marma Massage",
    image: "/premium.webp",
    slug: "/premium-kalari-marma-massage",
    description:
      "We follow holistic diagnostic approaches based on traditional principles such as Nadi Chikitsa and Marma analysis, alongside modern observations, to understand the body as an integrated system.",
  },
]

export default function ServicesCards() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING WITH LOGO */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          <div className="flex items-center justify-center gap-6 mt-6">
            <span className="w-24 h-px bg-primary" />

            <Image
              src="/mmgurukkals.png"
              alt="Gurukkals Logo"
              width={150}
              height={150}
              className="object-contain"
            />

            <span className="w-24 h-px bg-primary" />
          </div>

          <p className="mt-8 text-sm md:text-base text-[#5c3e1f] leading-relaxed">
            Gurukkals Ayurveda Hospital has been running for the past 25 years in Kerala.
            Founded by <strong>Shamsuddin Gurukkal</strong>, the institution is rooted in
            the traditional Kalari Marma system—focused on restoring strength, resisting
            disease, and achieving long-term healing through disciplined Ayurvedic practice.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                flex
                flex-col
                text-center
                transition-transform
                duration-300
                hover:-translate-y-2
              "
            >
              {/* IMAGE */}
              <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-xl md:text-2xl font-semibold text-[#5c3e1f] mb-3 uppercase tracking-wide">
                {service.title}
              </h3>

              {/* DIVIDER */}
              <div className="w-16 h-[2px] bg-[#5c3e1f] mx-auto mb-4" />

              {/* DESCRIPTION */}
              <p className="text-[#5c3e1f] text-sm md:text-base text-left leading-relaxed px-4 mb-8">
                {service.description}
              </p>

              {/* CTA — SPECIFIC PAGE */}
              <div className="mt-auto">
                <Link
                  href={service.slug}
                  className="
                    inline-block
                    bg-primary
                    text-white
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    tracking-wide
                    transition-all
                    duration-300
                    hover:bg-[#6a6f32]
                  "
                >
                  KNOW MORE
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}