import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { SectionHeader } from "@/components/section-header"
import { TestimonialCard } from "@/components/testimonial-card"
import { testimonials } from "@/data/testimonials"
import Image from "next/image"
import FounderSection from "@/components/FounderSection"
import CTASection from "@/components/CTASection"

export const metadata = {
  title: "About MMGurukkals | Ayurvedic Clinic",
  description: "Learn about our clinic, practitioners, and our commitment to authentic Ayurvedic healing.",
}

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <HeroSection
        title="About MMGurukkals"
        subtitle="Our Story"
        description="Dedicated to bringing authentic Ayurvedic wisdom to modern healthcare"
        useGradient={true}
      />

      {/* Our Story */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
              {/* Text Column */}
              <div className="flex flex-col">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 mb-3">
                  Our Story
                </h2>
                <div className="w-16 h-1 bg-green-400 mb-6"></div>
                <p className="text-black text-justify leading-relaxed mb-4">
                  Rooted in the timeless wisdom of Ayurveda, Gurikkal Ayurveda Clinic carries forward a legacy of
                  healing that blends tradition with compassion. Founded with a vision to preserve and promote authentic
                  Ayurvedic practices, our clinic stands as a sanctuary for those seeking natural balance and holistic
                  wellness.
                </p>
                <p className="text-black text-justify leading-relaxed mb-4">
                  At Gurikkal, every treatment is more than a therapy it's a journey of renewal. From specialized
                  Prasava Raksha care for mothers to full-body rejuvenation therapies, each service is thoughtfully
                  designed to nurture body, mind, and soul.
                </p>
                <p className="text-black text-justify leading-relaxed">
                  Guided by experienced Ayurvedic practitioners and supported by pure herbal formulations, we remain
                  devoted to restoring health the natural way where every healing touch tells a story of care, purity,
                  and tradition. Our mission is to make ancient Ayurvedic healing accessible for modern lifestyles,
                  offering comfort and wellness for every stage of life. At Gurikkal Ayurveda Clinic, we believe true
                  healing begins with harmony within yourself and with nature.
                </p>
              </div>

              {/* Image Column */}
              <div className="relative w-full h-[400px] md:h-[600px] rounded-tr-2xl rounded-bl-2xl overflow-hidden order-first md:order-last">
                <Image
                  src="/mm-minimal.png"
                  alt="Ayurvedic herbs and traditional healing tools"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FounderSection />

      {/* Core Values */}
      <section className="py-16 md:py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Our Foundation"
            title="Core Values"
            description="The principles that guide everything we do"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Authenticity",
                description:
                  "We follow authentic Ayurvedic principles passed down through centuries, maintaining the purity of traditional knowledge.",
              },
              {
                title: "Compassion",
                description:
                  "Every patient is treated with care and respect, understanding that healing goes beyond physical treatment.",
              },
              {
                title: "Excellence",
                description:
                  "We continuously improve our methods, train our practitioners, and provide the highest quality of care.",
              },
              {
                title: "Accessibility",
                description:
                  "We believe Ayurvedic wellness should be available to everyone, regardless of background or circumstances.",
              },
              {
                title: "Holism",
                description: "We treat the whole person – mind, body, and spirit – not just symptoms.",
              },
              {
                title: "Sustainability",
                description:
                  "We source our ingredients ethically and support sustainable practices in Ayurvedic medicine.",
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-background p-8 rounded-lg border border-border/50">
                <h3 className="font-serif text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </>
  )
}
