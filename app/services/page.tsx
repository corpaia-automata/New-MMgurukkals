import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import CTASection from "@/components/CTASection"
import { Leaf, Phone, MessageCircle } from "lucide-react"

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
    image: "/prasava.webp",
  },
  {
    title: "Premium Ayurvedic Kalari Marma Massage",
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

      <section className="py-6 md:py-10 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => {
            const isEven = index % 2 === 0
            const isImageLeft = isEven

            return (
              <div
                key={index}
                className={`relative flex flex-col ${isImageLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center mb-16 md:mb-24 last:mb-0`}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 relative h-[400px] md:h-[550px] rounded-xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Text Section */}
                <div className={`w-full md:w-1/2 flex flex-col justify-center relative ${isImageLeft ? "pr-0 md:pr-16" : "pl-0 md:pl-16"}`}>
                  {/* Small Icon */}
                  <div className="mb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                      <Leaf className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Uppercase Header */}
                  <p className="text-primary uppercase text-xs md:text-sm font-semibold tracking-wider mb-2">
                    AYURVEDIC TREATMENT
                  </p>

                  {/* Large Title */}
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5c3e1f] mb-4 md:mb-6 leading-tight font-serif">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-base md:text-lg text-[#5c3e1f] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* View Details Button */}
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 px-6 py-4 text-lg text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 w-fit"
                    >
                      <Leaf className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </Link>

                  {/* Floating Action Buttons - Positioned on the outer edge */}
                  <div className={`absolute ${isImageLeft ? "right-0" : "left-0"} top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3`}>
                    <Link
                      href="tel:+917012525067"
                      className="w-12 h-12 bg-primary hover:bg-primary/90 rounded-lg flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-200"
                      aria-label="Call us"
                    >
                      <Phone className="w-5 h-5" />
                    </Link>
                    <Link
                      href="https://wa.me/917306393768"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary hover:bg-primary/90 rounded-lg flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-200"
                      aria-label="WhatsApp us"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </Link>
                  </div>
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
