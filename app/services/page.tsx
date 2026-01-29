import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import CTASection from "@/components/CTASection"
import { Leaf, Phone, MessageCircle } from "lucide-react"
import ServicesCards from "@/components/ServicesCards"
import OurTreatments from "@/components/TreatmentSection"
import WhyChooseUs from "@/components/WhyChooseUs"

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

      <ServicesCards/>
      <OurTreatments/>
      <WhyChooseUs/>
      <CTASection />

      <Footer />
    </>
  )
}
