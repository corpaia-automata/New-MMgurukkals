import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroSectionProps {
  title: string
  subtitle: string
  description?: string
  image?: string
  useGradient?: boolean
  cta?: { text: string; href: string }
}

export function HeroSection({ title, subtitle, description, image, useGradient = false, cta }: HeroSectionProps) {
  // Use gradient for non-home pages, or home.png for home page
  const backgroundImage = useGradient ? undefined : (image || "/home.png")
  // Show dual buttons if image is home.png (home page), otherwise show single CTA
  const showDualButtons = !useGradient && (!image || image === "/home.png")

  return (
    <section
      className="relative min-h-[500px] md:min-h-[720px] flex items-center justify-center py-12 md:py-20"
      style={
        useGradient
          ? {
            background: "linear-gradient(110deg, #16a34a 0%, #22c55e 40%, #86efac 80%, #ffffff 100%)"

          }
          : {
            backgroundImage: `url('${backgroundImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }
      }
    >
      {!useGradient && <div className="absolute inset-0 bg-black/30 " />}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center py-16 md:py-20">
        <p className={`text-sm md:text-base mb-4 ${useGradient ? "text-gray-800" : "text-white"}`}>{subtitle}</p>
        <h1 className={`font-fractul text-4xl md:text-6xl font-bold leading-tight mb-6 ${useGradient ? "text-gray-900" : "text-white"}`}>{title}</h1>
        {description && (
          <p className={`text-lg md:text-xl mb-8 text-balance max-w-6xl mx-auto ${useGradient ? "text-gray-700" : "text-white"}`}>{description}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {showDualButtons ? (
            <>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                {/* Primary Button */}
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Book an Appointment
                  </Button>
                </Link>

                {/* Outline Button */}
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 hover:text-primary transition-all duration-200"
                  >
                    Explore All Services
                  </Button>
                </Link>
              </div>

            </>
          ) : (
            cta && (
              <Link href={cta.href}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  {cta.text}
                </Button>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  )
}
