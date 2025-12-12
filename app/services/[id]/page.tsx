import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { ServiceCard } from "@/components/service-card"
import { FAQAccordion } from "@/components/faq-accordion"
import { Button } from "@/components/ui/button"
import { services } from "@/data/services"
import { faqs } from "@/data/faqs"
import Image from "next/image"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Service Details | MMGurukkals Ayurvedic Clinic",
  description: "Learn more about our specific Ayurvedic treatments and therapies.",
}

export default function ServiceDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const service = services.find((s) => s.id === Number.parseInt(params.id))

  if (!service) {
    notFound()
  }

  const relatedServices = services.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{service.icon}</span>
            <div>
              <p className="text-accent font-semibold">{service.subtitle}</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">{service.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
                <Image
                  src={`/ayurvedic-.jpg?height=400&width=600&query=ayurvedic-${service.title.toLowerCase()}-treatment`}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <SectionHeader
                subtitle="Treatment Details"
                title={service.title}
                description={service.description}
                centered={false}
              />

              <div className="mt-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span className="text-foreground/70">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">What to Expect</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  During your {service.title} session, our experienced practitioners will create a calming environment
                  tailored to your needs. The treatment follows traditional Ayurvedic protocols while incorporating
                  modern comfort and safety standards.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  We recommend wearing comfortable clothing and arriving 10-15 minutes early for your appointment. Most
                  clients report feeling relaxed and rejuvenated immediately after the session.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-muted p-8 rounded-lg border border-border/50 sticky top-20">
                <h3 className="font-serif text-2xl font-bold text-primary mb-6">Service Details</h3>

                <div className="space-y-6 mb-8">
                  <div>
                    <p className="text-sm text-foreground/70 mb-1">Duration</p>
                    <p className="font-semibold text-lg">{service.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70 mb-1">Price</p>
                    <p className="font-semibold text-lg text-accent">{service.price}</p>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-3">Book Now</Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Packages"
            title="Customized Treatment Packages"
            description="Choose the package that best suits your wellness goals"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                name: "Single Session",
                sessions: 1,
                price: service.price,
                features: ["Full treatment", "Personalized approach", "Post-care guidance"],
              },
              {
                name: "Wellness Plan",
                sessions: 4,
                price: "$250",
                features: ["4 sessions", "Dietary guidance", "Progress tracking", "10% savings"],
              },
              {
                name: "Transformation Program",
                sessions: 8,
                price: "$450",
                features: [
                  "8 sessions",
                  "Complete assessment",
                  "Lifestyle coaching",
                  "Follow-up support",
                  "20% savings",
                ],
              },
            ].map((pkg, idx) => (
              <div
                key={idx}
                className={`border rounded-lg p-8 ${
                  idx === 1 ? "bg-primary text-primary-foreground border-primary/50" : "bg-background border-border/50"
                }`}
              >
                <h3 className="font-serif text-xl font-bold mb-2">{pkg.name}</h3>
                <p className={idx === 1 ? "opacity-90" : "text-foreground/70"}>{pkg.sessions} sessions</p>
                <p className="font-serif text-3xl font-bold my-4">{pkg.price}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="text-sm flex items-center gap-2">
                      <span>✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className={
                    idx === 1 ? "w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90" : "w-full"
                  }
                >
                  Choose Package
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Questions"
            title="Frequently Asked Questions"
            description="Get answers to common questions about our treatments"
          />
          <div className="mt-12">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Related" title="Other Services You May Like" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {relatedServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
