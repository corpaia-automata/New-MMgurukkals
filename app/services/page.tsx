import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import CTASection from "@/components/CTASection"

export const metadata = {
  title: "Services | MMGurukkals Ayurvedic Clinic",
  description: "Explore our comprehensive range of Ayurvedic treatments and wellness services.",
}

const services = [
  {
    title: "Kalarimarma Chikilsa",
    description:
      "Kalarimarma Chikilsa is a powerful traditional therapy rooted in ancient Kalari principles, focusing on activating and healing the body's vital Marma points. This treatment helps release deep-seated tension, restore joint mobility, improve circulation, and accelerate natural recovery from injuries. It strengthens the body, enhances flexibility, and supports long-term physical resilience.",
    image: "/kalari.webp",
  },
  {
    title: "Prasava Raksha",
    description:
      "Prasava Raksha is a complete Ayurvedic postnatal care system designed to restore a mother's strength after childbirth. It promotes hormonal balance, supports emotional well-being, and accelerates recovery through warm oil treatments, abdominal care, and rejuvenating herbal support. This therapy helps rebuild energy, reduce stress, and nurture both mother and newborn.",
    image: "/prasva.png",
  },
  {
    title: "Premium Ayurvedic Massage",
    description:
      "This premium Ayurvedic massage uses warm, medicated herbal oils and rhythmic therapeutic strokes to deeply relax the body and mind. It improves circulation, detoxifies tissues, nourishes the skin, and releases physical and mental fatigue. The treatment brings harmony, rejuvenation, and a renewed sense of vitality to your entire system.",
    image: "/premium.webp",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <HeroSection
        title="Our Services"
        subtitle="Comprehensive Wellness"
        description="Explore our full range of authentic Ayurvedic treatments designed for your well-being"
        useGradient={true}
      />

      <section className="py-6 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => {
            const isEven = index % 2 === 0
            const isImageLeft = isEven

            return (
              <div
                key={index}
                className={`flex flex-col ${isImageLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 md:gap-12 items-center mb-16 md:mb-24 last:mb-0`}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight font-fractul">
                    {service.title}
                  </h2>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link href="/contact">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 px-6 py-4 text-lg text-primary-foreground">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <CTASection />

      <Footer />
    </>
  )
}
