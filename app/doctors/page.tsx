import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { doctors } from "@/data/doctors"
import Image from "next/image"

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
      />

      {/* Doctors Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-card rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="relative w-full h-64 bg-muted">
                  <Image
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-2">{doctor.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-4">{doctor.specialty}</p>
                  <p className="text-foreground/70 text-sm mb-4">{doctor.experience}</p>
                  <p className="text-foreground/70 text-sm mb-6">{doctor.bio}</p>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">Credentials:</p>
                    <ul className="space-y-1">
                      {doctor.credentials.map((cred, idx) => (
                        <li key={idx} className="text-xs text-foreground/70">
                          ✓ {cred}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
