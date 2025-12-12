import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { SectionHeader } from "@/components/section-header"
import { TestimonialCard } from "@/components/testimonial-card"
import { testimonials } from "@/data/testimonials"
import Image from "next/image"

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
      />

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <Image src="/ayurvedic-traditional-healing-practice.jpg" alt="Our Story" fill className="object-cover rounded-lg" />
            </div>
            <div>
              <SectionHeader subtitle="Founded in 2004" title="Our Journey" centered={false} />
              <p className="text-foreground/70 mt-6 leading-relaxed mb-4">
                MMGurukkals was established by a group of passionate Ayurvedic practitioners with a vision to make
                authentic traditional medicine accessible to the modern world. What began as a small clinic has grown
                into a renowned wellness center trusted by thousands.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Our commitment to excellence, combined with our deep respect for Ayurvedic principles, has made us a
                beacon of natural healing in the community. We continue to train new practitioners and expand our
                services to serve more people.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Today, MMGurukkals stands as a testament to the power of ancient wisdom meeting modern wellness needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-muted/30">
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

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Success Stories" title="Transformations Through Ayurveda" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
