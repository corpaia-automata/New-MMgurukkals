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
  <strong>M.M. Gurukkal Ayurveda Hospital and Kalari Marma Chikilsalayam</strong> carries a healing legacy
  of over <strong>25 years</strong>, rooted in the classical traditions of Ayurveda and Kalari Marma
  Chikitsa. Founded on the teachings of <strong>M.M. Muhammed Gurukkal</strong>, who began his Kalari
  training under the Kattiparuthi Gurus at a young age, the institution reflects decades of disciplined
  practice, wisdom, and authentic healing.
</p>

<p className="text-black text-justify leading-relaxed mb-4">
  In 1998, <strong>Shamsuddin Gurukkal</strong> introduced an integrated treatment approach that combined
  Kalari Marma therapy with Ayurveda in Kasaragod. This holistic method brought relief to countless
  patients and established M.M. Gurukkals as a trusted name in traditional healing, preserving the
  Gurukula lineage while addressing modern health challenges.
</p>

<p className="text-black text-justify leading-relaxed">
  Continuing this legacy, <strong>Dr. Shoukath Ali (H.C.) Gurukkal</strong> founded
  <strong> M.M. Gurukkals Ayurveda & Kalari Marma Hospital</strong> in memory of Muhammed Gurukkal.
  With centers in <strong>Kozhikode and Malappuram</strong>, the hospital today welcomes patients from
  across India and abroad, offering compassionate care where true healing begins with harmony of body,
  mind, and tradition.
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

      {/* Mission & Vision */}
<section className="py-16 md:py-24 bg-background">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeader
      subtitle="Our Purpose"
      title="Mission & Vision"
      description="What drives us and where we are heading"
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
      
      {/* Mission */}
      <div className="bg-background p-8 rounded-lg border border-border/50">
        <h3 className="font-serif text-2xl font-bold text-primary mb-4">
          Our Mission
        </h3>
        <p className="text-foreground/70 leading-relaxed">
          As a world-renowned Ayurvedic Kalari Marma &amp; Bone Setting Hospital,
          we help people get complete relief from pain, overcome neuromuscular
          and bone-related problems, and return to a healthy and peaceful life.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-background p-8 rounded-lg border border-border/50">
        <h3 className="font-serif text-2xl font-bold text-primary mb-4">
          Our Vision
        </h3>
        <p className="text-foreground/70 leading-relaxed">
          To become a world-renowned Ayurveda, Kalari Marma &amp; traditional
          Bone Setting Hospital, setting global standards in holistic healing
          and traditional medical excellence.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* Core Values */}
      {/* Core Values */}
<section className="py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeader
      subtitle="Our Core Values"
      title="What We Stand For"
      description="The principles that guide everything we do"
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
      {[
        {
          title: "Honesty",
          description:
            "We practice complete transparency and integrity in every treatment, interaction, and decision.",
        },
        {
          title: "Leadership",
          description:
            "We lead by example in traditional Ayurvedic healing, setting benchmarks in care and expertise.",
        },
        {
          title: "Smile",
          description:
            "We believe healing begins with warmth, positivity, and a welcoming human connection.",
        },
        {
          title: "Courage",
          description:
            "We stand firm in preserving traditional wisdom while boldly advancing holistic healthcare.",
        },
        {
          title: "Commitment",
          description:
            "We are deeply committed to our patients’ recovery, well-being, and long-term health.",
        },
        {
          title: "Respect",
          description:
            "We treat every individual, tradition, and practice with dignity and respect.",
        },
      ].map((value, idx) => (
        <div
          key={idx}
          className="bg-background p-8 rounded-lg border border-border/50"
        >
          <h3 className="font-serif text-xl font-bold text-primary mb-3">
            {value.title}
          </h3>
          <p className="text-foreground/70 leading-relaxed">
            {value.description}
          </p>
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
