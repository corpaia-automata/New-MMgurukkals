import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { doctors } from "@/data/doctors"
import Image from "next/image"
import { DoctorCard } from "@/components/doctor-card"

export const metadata = {
  title: "Our Doctors | MMGurukkals Ayurvedic Clinic",
  description: "Meet our team of experienced and certified Ayurvedic practitioners.",
}

export default function DoctorsPage() {
  return (
    <>
      <Navbar />

      <HeroSection
        title="Our Practitioners"
        subtitle="Meet The Team"
        description="Experienced and certified Ayurvedic physicians dedicated to your wellness"
        useGradient={true}
      />

      <DoctorCard/>

      <Footer />
    </>
  )
}
