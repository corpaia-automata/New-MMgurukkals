import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { SectionHeader } from "@/components/section-header"
import { ServiceCard } from "@/components/service-card"
import { DoctorCard } from "@/components/doctor-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { GalleryGrid } from "@/components/gallery-grid"
import { ProcessSteps } from "@/components/process-steps"
import { services, processSteps } from "@/data/services"
import { doctors } from "@/data/doctors"
import { testimonials } from "@/data/testimonials"
import { galleryImages } from "@/data/gallery"
import FounderSection from "@/components/FounderSection"
import WhyChooseUs from "@/components/WhyChooseUs"
import CTASection from "@/components/CTASection"
import ContactSection from "@/components/ContactSection"
import ServicesSection from "@/components/ServicesSection"
import TreatmentsSection from "@/components/TreatmentSection"
import FAQSection from "@/components/FaqSection"
import AboutSection from "@/components/AboutSection"
import BlogSection from "@/components/BlogSection"
import { StatsSection } from "@/components/StatsSection"
import { WhatMakesUsDifferent } from "@/components/WhatMakesUsDifferent"
import OurTreatments from "@/components/TreatmentSection"
import ServicesCards from "@/components/ServicesCards"

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="Complete Pain Relief with Kalarimarma Ayurveda Treatment"
        subtitle="Welcome to MMGurukkals"
        description="Experience deep healing as Kalarimarma Ayurveda targets vital energy points to relieve pain, restore balance, and strengthen your body."
        image="/home.webp"
      />
      <AboutSection />
      <ServicesCards/>
      <OurTreatments/>
      <WhyChooseUs/>
      <StatsSection />
      <WhatMakesUsDifferent />
      {/* <ServicesSection />
      <TreatmentsSection />
      <WhyChooseUs /> */}
      {/* <FounderSection /> */}
      <BlogSection />
      <FAQSection />
      <ContactSection />
      <CTASection />

      <Footer />
    </>
  )
}
