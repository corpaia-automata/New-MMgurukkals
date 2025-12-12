import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServiceDetailPage } from "@/components/ServiceDetailPage"
import { services } from "@/data/services"

export const metadata = {
  title: "Services | MMGurukkals Ayurvedic Clinic",
  description: "Explore our comprehensive range of Ayurvedic treatments and wellness services.",
}

export default function ServicesPage() {
  // Transform services data to match ServiceDetailPage format
  const serviceDetails = [
    {
      title: "Abhyanga",
      description:
        "Traditional full-body oil massage that balances doshas and promotes deep relaxation. This ancient practice improves circulation, nourishes the skin, and enhances overall well-being through therapeutic touch and warm medicated oils.",
      image: "/ayurvedic-clinic-treatment-area.jpg",
    },
    {
      title: "Panchakarma",
      description:
        "Comprehensive five-fold purification therapy for complete body rejuvenation. A holistic approach to detoxification and wellness that cleanses the body at a deep cellular level, restoring balance and vitality.",
      image: "/ayurvedic-therapy-room-wellness.jpg",
    },
    {
      title: "Shirodhara",
      description:
        "Therapeutic oil pouring on the forehead to calm the mind and nervous system. Promotes mental clarity, reduces stress, and induces deep relaxation for lasting peace and improved sleep quality.",
      image: "/spa-relaxation-wellness-area.jpg",
    },
    {
      title: "Marma Therapy",
      description:
        "Stimulation of vital energy points to balance the body and mind. This precise technique helps restore energy flow, promotes natural healing processes, and provides relief from pain and tension.",
      image: "/kalari-marma.png",
    },
    {
      title: "Herbal Remedies",
      description:
        "Custom herbal formulations tailored to your unique constitution. Natural healing solutions with no side effects, designed specifically for your dosha type to support long-term wellness and vitality.",
      image: "/ayurvedic-herbs-remedies-collection.jpg",
    },
    {
      title: "Consultation",
      description:
        "Initial consultation to determine your unique dosha and health needs. Our expert practitioners provide comprehensive assessment, personalized treatment plans, and dietary guidance for your wellness journey.",
      image: "/wellness-clinic-consultation-room.jpg",
    },
  ]

  return (
    <>
      <Navbar />

      <HeroSection
        title="Our Services"
        subtitle="Comprehensive Wellness"
        description="Explore our full range of authentic Ayurvedic treatments designed for your well-being"
      />

      <section className="bg-background">
        <ServiceDetailPage services={serviceDetails} />
      </section>

      <Footer />
    </>
  )
}
